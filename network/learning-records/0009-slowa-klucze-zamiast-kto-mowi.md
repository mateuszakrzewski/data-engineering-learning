# Klasyfikuje błędy po słowach-kluczach, nie po tym, kto mówi

W treningu 03.2 (5/8) wszystkie „czyste" komunikaty przypisał bezbłędnie, ale dwa pomylił
w lustrzany sposób: `psql … Connection refused` → **Auth** (powinno być TCP) oraz
`FATAL: no pg_hba.conf entry for host …` → **TCP** (powinno być Auth). W obu przypadkach wygrało
potoczne znaczenie słów — „refused" brzmi jak „odmówiono dostępu", a „host" + adres IP jak problem sieci —
nad regułą z lekcji: `FATAL:` albo kod statusu = mówi serwer; brak tego = mówi system, serwer nic nie usłyszał.

## Evidence
To dokładnie pułapka, przed którą ostrzega dokumentacja PostgreSQL: „Connection refused … does *not* mean that
the server got your connection request and rejected it". Ciekawe, że rozróżnienie refused/timeout opanował
([[0004-odmowa-vs-cisza]]) — ale przy `nc`, gdzie słowo „refused" nie konkuruje z pojęciem autoryzacji.

Potwierdził to sam (2026-09-27): „W 2 wybrałem TCP, bo zobaczyłem adres IP i to mi się skojarzyło z TCP.
W 5 wybrałem Auth przez słowo klucz »refused«". Czyli dwa różne wyzwalacze: **adres IP → TCP** i **refused → Auth**.

## Implications
- Adres IP jest w psql w **każdym** komunikacie (prefiks `connection to server at "…", port … failed:`), więc jako
  wskazówka jest bezwartościowy. Uczyć anatomii linii: prefiks = gdzie próbowałem, werdykt = tekst po `failed:`.
- Reguła „kto mówi?" jest **znana, ale nie zautomatyzowana**. Potrzebna rozłożona w czasie praktyka,
  w której **najpierw** nazywa mówiącego, a dopiero potem szczebel — dwa kroki jawnie.
- `pg_hba.conf` trzeba w lekcji o wystawianiu bazy postawić obok firewalla: oba filtrują po adresie,
  ale firewall milczy (szczebel 2, cisza), a `pg_hba.conf` mówi (szczebel 4, `FATAL`). To para do porównania wprost.
- Granica 401/403 vs 404 wymaga testu zamiast etykiety: „czy inny użytkownik z większymi uprawnieniami dostałby to samo?"
  Jeśli nie — Auth.

## Update 2026-10-06
Po 9 dniach, przy powtórce lekcji: 03.2 = 8/8, w tym oba lustrzane przypadki poprawnie. Ale to te same komunikaty
co wcześniej — transfer na nowe komunikaty do potwierdzenia, zanim uznam regułę za odruch.
Transfer (tego samego dnia, 3 nowe komunikaty): oba psql poprawnie (timeout → system/TCP; `FATAL: role … not permitted`
→ serwer/Auth). Błąd: `< HTTP/2 503` → „moja maszyna, serwer nie odpowiada, TCP". Ten sam mechanizm co w 03.2:
znaczenie słowa („Service Unavailable") wygrało z sygnałami formy (`<`, kod statusu).
**Wniosek:** reguła „kto mówi?" przeniosła się na psql, nie na HTTP. W lekcji o HTTP: każdy kod statusu =
ktoś odpowiedział po HTTP (często proxy/load balancer przed aplikacją), więc szczeble 1–3 przeszły.

## Update 2026-10-14
Rozgrzewka lekcji 04, trzy **nowe** komunikaty z pułapkami: psql `Connection refused` z nazwą i adresem w prefiksie → TCP ✓;
`FATAL: no pg_hba.conf entry` → Auth ✓; `< HTTP/1.1 503 Service Unavailable` → Aplikacja ✓. Błąd 503 z 10-06 nie wrócił
po 8 dniach. Reguła działa teraz i dla psql, i dla HTTP, na komunikatach, których wcześniej nie widział.
Zostaje do potwierdzenia, czy stosuje ją jawnie (najpierw mówiący, potem szczebel), czy już odruchowo — w obu przypadkach to sukces.
Potwierdził (2026-10-14): „najpierw myślałem sobie kto odpowiada" — reguła stosowana jawnie. Następny krok: rozgrzewki bez podpowiedzi „najpierw kto mówi".
