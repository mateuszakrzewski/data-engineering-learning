# NOTES

## Preferencje użytkownika
- **ZASADY STAŁE z krytyki lekcji 04 (2026-10-14) — obowiązują w każdej kolejnej lekcji, mają pierwszeństwo przed starszymi ustaleniami:**
  1. **Pojęcia wyjaśniane w lekcji, przy pierwszym użyciu** — pełnym zdaniem, w tekście. Glosariusz to archiwum do powtórek,
     nie miejsce, do którego odsyłam zamiast wyjaśnić. Nie skacze między oknami — to rozprasza.
  2. **Nie zakładać wiedzy.** Jeśli lekcja opiera się na czymś (np. „pgAdmin to aplikacja webowa", „kontener to osobna maszyna"),
     to mówię to wprost, zanim z tego skorzystam.
  3. **Przewidywanie tylko tam, gdzie ma na czym je oprzeć** — o rzeczach wyjaśnionych wcześniej w tej samej lekcji albo opanowanych.
     O nowościach: „uruchom i obserwuj", nie „przewidź". Woli testować niż zgadywać.
  4. **Komendy w terminalu — po jednej, każda z trzema rzeczami:** co robi, czego szukać w wyniku, czego się spodziewać
     (przykładowy wynik albo kluczowa linia). Żadnych bloków 5 komend „ciągiem" z jedną notką na dole.
- **Język**: lekcje, materiały i rozmowa po polsku. Terminy techniczne zostawiamy po angielsku (request, header, socket) — tak będzie je widział w dokumentacji.
- **Kontekst (sprostowane przez użytkownika 2026-09-21)**: inżynier danych, samouk.
  Rozumie hurtownie **koncepcyjnie** — jak powinny być zbudowane, jakie są założenia.
  **Nie jest techniczny**: kod pisze i recenzuje z pomocą AI, nie jest biegły w Pythonie ani SQL-u.
  Python i SQL to osobny workspace — tutaj ich nie uczymy i nie zakładamy.
- **Czego NIE zakładać**: znajomości bibliotek, sterowników, składni, wnętrza `psycopg2` itp.
  **Co MOŻNA zakładać**: pojęcia architektoniczne (warstwy hurtowni, źródła, potoki), terminal
  (radzi sobie), czytanie konfiguracji i komunikatów błędów.
- **Gdzie kotwiczyć przykłady**: connection stringi, pliki konfiguracyjne, wynik terminala,
  komunikaty błędów, diagramy architektury. **Nie** w kodzie aplikacyjnym — a jeśli już kod,
  to rozebrany linijka po linijce jak komendy.
- **Styl**: zaczyna od zera, więc każda lekcja musi mieć jedną konkretną, namacalną wygraną.
- Przerwał formularz z pytaniami wielokrotnego wyboru i odpowiedział własnymi słowami — **nie zasypywać go formularzami**, pytać krótko i konkretnie.
- **ZASADA STAŁA (prośba z 2026-09-21): rozwijać każdą komendę i flagę.** Od czego jest skrótem nazwa
  komendy, co znaczy każda litera flagi, co oznacza każda kolumna wyniku. Nie podawać komend jako
  zaklęć do skopiowania. Dotyczy to **wszystkich** przyszłych lekcji, nie tylko tej o narzędziach.
  Powód: uczy się od zera i chce rozumieć, a nie zapamiętywać — rozwinięty skrót jest zaczepieniem
  dla pamięci długotrwałej.
- **Retrieval — dawkować (2026-09-27, po 03.3).** Sprzeciwił się pytaniu „wymień 5 szczebli i 5 komend" po jednej
  lekcji — słusznie. Pytania z pamięci: **małe** (1–3 elementy), **z podpowiedzią** przy pierwszych powtórkach
  (np. „szczebel 2, narzędzie od net-cat"), rozłożone w kolejnych lekcjach. Pojęcia wchodzą mu szybko, składnia wolno.
- **Przycisk „Skopiuj dla nauczyciela" (prośba z 2026-10-06).** Po każdej grupie quizów — dokładany automatycznie
  przez `assets/quiz.js`, więc działa w każdej lekcji, która linkuje komponent. Kopiuje: lekcja, wynik,
  per pytanie: etykieta (`.tag` albo P1…), wybór ✓/✗ z poprawną odpowiedzią, skrót treści. Nie wyłączać.
- **Nowa lekcja = nowa sesja (2026-10-06).** Kończy przez `/exit`, zaczyna od nowa w tym katalogu (`/teach lesson NNNN`);
  stare rozmowy zostawia w historii (`claude --resume`). Więc **wszystko, co ważne, musi trafić do repo** przed końcem sesji.
- Chce też **wracać do własnych wyników** z ćwiczeń i omawiać je, a nie tylko iść dalej.
- **ZASADA STAŁA (zmieniona 2026-09-24, zastępuje ustalenie z 2026-09-23): uczeń odpowiada w czacie,
  ja zapisuję w repo.** Odpowiedzi, pytania, zaskoczenia i wyniki z terminala wkleja do rozmowy.
  Moje obowiązki z tego wynikające:
  1. **Każda lekcja ma jawną, ponumerowaną sekcję „Odpowiedz w czacie"** — ćwiczenia, zadania,
     pytania, ćwiczenia umysłowe z identyfikatorami (np. `03.4`), żeby mógł odpowiadać po numerach.
     Nic, czego oczekuję w odpowiedzi, nie może być ukryte w dopisku albo w notce.
  2. **Po jego odpowiedzi zapisuję ją w repo wg mojej konwencji:** surowe odpowiedzi (cytaty) + moja ocena
     w `## Dziennik lekcji` poniżej; wiersz w `## Postępy`; aktualizacja `## Profil ucznia`;
     nieoczywiste wnioski → nowy learning record; nowe terminy → glosariusz.
  3. Jego cytaty zapisuję **dosłownie** i oddzielam od mojej oceny — nie wygładzam jego słów.
  Historyczna sekcja `## lesson 0002` (pisana przez niego) zostaje nietknięta jako archiwum.
- **Nazwał własną lukę (2026-09-23)**: „brakuje mi podstaw informatyki uniwersyteckiej i wiedzy
  kanonicznej" — rozszerzona informatyka w liceum kilkanaście lat temu, niewiele pamięta.
  → Terminy kanoniczne (socket, daemon, TCP/UDP, IPv4/IPv6, pipe, stdout) wymagają **jawnej definicji
  przy pierwszym użyciu** i miejsca w `reference/glossary.html`. Nie zakładać, że „to wiadomo".

## Środowisko (ustalone 2026-09-21)
- **Dom**: dual boot, ten Linux (Ubuntu-like, systemd-resolved, kernel 6.17). Tu robi ćwiczenia z lekcji.
- **Praca**: Windows + WSL2 + Docker — tam stawia kontenery. To jest kontekst, w którym najbardziej
  bolą go realne problemy sieciowe, więc pułapki WSL/Docker (`localhost`, bind address, port forwarding,
  `host.docker.internal`) mają **wysoki priorytet** i realną wartość.
- **Chmura**: ma dostęp do **GCP**. W grę wchodzi też trial Databricks albo tani VPS.
  → VPS jest najlepszym poligonem do „wystawiania baz": prawdziwy publiczny adres IP, prawdziwy firewall,
  prawdziwe konsekwencje. GCP do części o sieciach chmurowych (VPC, firewall rules, Cloud SQL).
- **Cel poboczny**: Linux ma mu się przydać pod kontenery i VM-y on-prem oraz w chmurze.
  Nie jest to osobna misja, ale uzasadnia przemycanie linuksowych narzędzi w lekcjach sieciowych.

## Do ustalenia
- Czy chce dołączyć do jakiejś społeczności, czy woli na razie sam.

## Profil ucznia (aktualizowany po każdej lekcji)
- **Mocne strony**: myśli mechanizmem i intencją (sam wyjaśnił, dlaczego firewall milczy — LR-0004);
  czyta materiały krytycznie i wyłapuje moje błędy (LR-0002, LR-0003); notuje obserwacje i wyciąga reguły.
- **Luki**: kanon informatyczny (socket, TCP/UDP, stdout, pipe) — łatane terminami w glosariuszu (LR-0007).
  Flagi bez podbudowy pojęciowej nie zostają w pamięci.
- **Błędy do pilnowania**: kierunek w `curl -v` — **naprawiony w 03.1** (poprawnie, z własnym przykładem).
  Sprawdzić jeszcze raz przy okazji w lekcji o HTTP (spacing), bez podpowiedzi.
- **Czyta komunikaty po słowach-kluczach, nie po mówiącym** (03.2, LR-0009): „refused" brzmi jak odmowa dostępu,
  „host" jak sieć. Reguła „kto mówi?" jest znana, ale jeszcze nie stosowana odruchowo.
- **Kod wyjścia vs kod statusu HTTP** — zlewa je w jedno (03.4, LR-0010). Dwa kanały: serwer → curl (status),
  curl → powłoka/orkiestrator (`$?`). Kluczowe dla potoków; wracać, aż rozróżni bez podpowiedzi.
- **Myśli warstwami obrony** (03.7): sam dodał walidację danych w hurtowni jako drugą linię po `-f`. Mocna strona —
  łączyć sieć z jego wiedzą architektoniczną.
- **Kody wyjścia**: 0 vs 22 zastosowane poprawnie w scenariuszu (03.7) — LR-0010 w dużej mierze zamknięty.
- **Doświadczenie z praktyki**: wie, że API blokują niektóre User-Agenty (np. pythonowy) — ma już zderzenia z realnymi API.
- **Opanowane**: odmowa vs cisza (LR-0004); usługa nasłuchuje na adresie, nie na maszynie (LR-0002);
  rozwinięcie `ss -tlnp` (częściowo — w lekcji 02 nie pamiętał `-n`, `-p`).

## Postępy
| Lekcja | Data | Quiz / trening | Opanowane | Otwarte |
|---|---|---|---|---|
| 0001 adres połączenia | 2026-09-21 | — | bind address, 127.0.0.0/8 | — |
| 0002 komendy litera po literze | 2026-09-23 | 3/3 | odczyt `dig`, `ss`; `refused` vs timeout | kierunek `>`/`<`; flagi `-n`, `-p`; pojęcia kanoniczne |
| 0003 drabina połączenia | 2026-09-24 → 09-27; powtórka od 10-06 | 03.1 ✓ · 03.2: 5/8 · 03.3: szczeble 5/5, komendy 0/5 · **powtórka 10-06: 03.1 ✓, 03.2: 8/8, transfer 2/3 (✗ 503), 03.7 ✓✓, 03.8 ✓ (po doprecyzowaniu) — zamknięta** | szczeble DNS, TLS, Aplikacja; kierunek `>`/`<` | „kto mówi?" nie działa jeszcze jako odruch (03.2·2, ·5); 401/403 vs 404 |
| 0004 kto odpowiada na nazwę | 2026-10-14 | 04.1: 3/3 (w tym 503 ✓) · 04.2 ✓ · 04.3: 2/5 (laptop 2/2, kontener 0/3) · kontrolne `kestra` ✗ · 04.4 ✓ · 04.5 ✓ (+ własne eksperymenty) · 04.6 ✓ | „kto mówi?" na HTTP (503); kod wyjścia ≠ odpowiedź serwera (dig); getent vs dig | zły host ≠ DNS (LR-0011); program w kontenerze; 04.7–04.8 bez odpowiedzi |

## Working notes
- **STAN (2026-10-14): nauka sieci WSTRZYMANA po lekcji 04** — uczeń przechodzi do Linuksa i Dockera (katalogi `../002_linux`, `../003_docker`).
  Przy powrocie: (1) zacząć od przepisania lekcji 04 wg zasad stałych z 2026-10-14, albo krótkiej lekcji-mostu powtarzającej 04.3/LR-0011;
  (2) dokończyć 04.7 (Airflow + `localhost:5433` → `dwh:5432`); (3) w rozgrzewce pary „nazwa nieznana vs istniejąca nazwa złej maszyny"
  i rozgrzewka „kto mówi?" bez podpowiedzi. Po Dockerze uczeń może znać kontenery/sieci lepiej — sprawdzić to przed lekcją.
- Kolejność tematyczna wynikająca z misji: adres połączenia → warstwy i błędy → DNS → TCP/TLS → HTTP szczegółowo → API → wystawianie baz → chmura.
- (2026-09-24) Lekcja 03 = „drabina połączenia" (DNS → TCP → TLS → Auth → Aplikacja, reguła „kto mówi?").
  Zawiera poprawkę LR-0006 (kierunek `>`/`<`) i odpowiedź na jego pytanie 3 z lekcji 02 — z korektą:
  kolumna Peer dla LISTEN to po prostu brak rozmówcy, nie ustawienie „przyjmę od każdego".
  Błędy w lekcji wygenerowane naprawdę na jego maszynie (curl 8.5.0, psql 16, kontener `postgres:18` na 127.0.0.1:55432).
  Ma lokalnie Dockera bez sudo i obraz `postgres:18` → dobry poligon do lekcji o wystawianiu bazy (pg_hba.conf, listen_addresses, -p bez 127.0.0.1).
  Nowy komponent: `assets/ladder.css`. Nowa ściąga: `reference/drabina-bledow.html`.
  **Powtórka w lekcji 04 (spacing + interleaving):** 2–3 komunikaty z pułapką słowną (`Connection refused` z psql,
  `FATAL: no pg_hba.conf entry`, `403`) wymieszane z nowym materiałem. Kazać najpierw napisać „kto mówi", potem szczebel.
  Do sprawdzenia w jego odpowiedziach do lekcji 03: czy przewidywał kody przed Enterem; czy złapał `2>&1` przy `docker logs`.

- (2026-10-14) Lekcja 04 = „kto odpowiada na nazwę": łańcuch NSS (nsswitch → /etc/hosts → resolv.conf → 127.0.0.53),
  `getent hosts` vs `dig`, DNS Dockera 127.0.0.11, reguła „nazwę rozwiązuje maszyna, na której działa program".
  Kotwica: jego `docker-compose.yml` z zoomcampu (`~/DataEngineering/courses/data-engineering-zoomcamp/02-workflow-orchestration/`:
  serwisy `pgdatabase` z `ports: "5432:5432"`, `pgadmin`, `kestra` → `jdbc:postgresql://kestra_postgres:5432`). Ma też sieć `airflow_default`.
  Fakty zweryfikowane na LEGION: `dig LEGION` przez 127.0.0.53 ZWRACA 127.0.1.1 (systemd-resolved czyta /etc/hosts),
  `dig @1.1.1.1 LEGION` → NXDOMAIN, kod 0. Kontener w domyślnym bridge dostaje `nameserver 8.8.8.8 / 1.1.1.1`.
  Interleaving: rozgrzewka 04.1 (psql refused z nazwą, pg_hba FATAL, HTTP 503 — powtórka LR-0009), 04.2 = dig NXDOMAIN → kod 0 (LR-0010 na nowym narzędziu).
  Nowy komponent: `assets/chain.css` (łańcuch przekazań, ogniwa `link--skip`). Nowa ściąga: `reference/rozwiazywanie-nazw.html`.
  Do sprawdzenia w odpowiedziach: czy w 04.1·3 (503) zadziałało „kto mówi" na HTTP; czy w 04.3·1 nie wpadł w „siedzę przy przeglądarce";
  czy w 04.7 sam wskaże port KONTENERA (5432), nie hosta (5433).
  Kolejne tematy w kolejce: TTL/cache („zmiana DNS nie działa"), WSL2 ↔ Windows ↔ Docker localhost, wystawianie bazy (pg_hba vs firewall, 172.17.0.1 z 04.1·2).
## Dziennik lekcji
<!-- Od lekcji 0003: prowadzę ja. Format: ### lesson NNNN → odpowiedzi (cytaty dosłowne, po numerach) → ocena → co z tego wynika. -->

### lesson 0004

(2026-10-14) Lekcja wydana. Czekam na odpowiedzi 04.1–04.8.

**04.1 — rozgrzewka** (2026-10-14)
> Lekcja 04 · Kto odpowiada na nazwę — quiz: 3/3
> 04.1·1  [TCP ✓]  psql: error: connection to server at "pgdatabase" (172.19.0.2), port 5432 failed: Conne…
> 04.1·2  [Auth ✓]  psql: error: connection to server at "localhost" (127.0.0.1), port 5432 failed: FATAL: …
> 04.1·3  [Aplikacja ✓]  W curl -v: < HTTP/1.1 503 Service Unavailable

*Ocena:* 3/3, wszystkie trzy pułapki słowne ominięte. Najważniejsze: **503 ✓** — 8 dni temu (transfer 10-06)
ten sam kod zaklasyfikował jako TCP („serwer nie odpowiada"). Reguła „kto mówi?" przeniosła się na HTTP.
04.1·1: refused z nazwą i adresem w prefiksie — nie dał się zwieść ani „refused", ani adresowi.
Zastrzeżenie: wynik z kopiarki nie pokazuje, czy nazwał mówiącego przed kliknięciem — dopytałem.
> najpierw myślałem sobie kto odpowiada

*Ocena:* stosuje regułę **jawnie, w dwóch krokach** (mówiący → szczebel) — tak, jak było zaprojektowane. To etap przed odruchem.
Dalej: w kolejnych lekcjach 1–2 komunikaty z pułapką w rozgrzewce, już bez instrukcji „najpierw kto mówi" — sprawdzić, czy krok zostaje sam.

**04.2 — z pamięci: kod wyjścia dig po NXDOMAIN** (2026-10-14)
> kod wyjścia to 0, bo dig dostanie odpowiedź

*Ocena:* ✓ z poprawnym uzasadnieniem — **transfer LR-0010 na nowe narzędzie**, bez podpowiedzi. 10-06 przy curl bez -f
odpowiedział „5"; teraz sam rozdziela „serwer odpowiedział NXDOMAIN" od „program zakończył się sukcesem". Model dwóch kanałów działa.

**04.3 — trening „gdzie to się rozwiąże?"** (2026-10-14)
> Lekcja 04 · Kto odpowiada na nazwę — quiz: 2/5
> 04.3·1  [Padnie: TCP ✗ (poprawnie: Połączy się)]  W pgAdminie (localhost:8085 w przeglądarce) dodajesz serwer: host pgdatabase, port 5432.
> 04.3·2  [Padnie: DNS ✗ (poprawnie: Padnie: TCP)]  W tym samym formularzu pgAdmina wpisujesz host localhost, port 5432.
> 04.3·3  [Padnie: DNS ✓]  Z terminala na laptopie: psql "postgresql://root:root@pgdatabase:5432/ny_taxi"
> 04.3·4  [Połączy się ✓]  Z terminala na laptopie: psql "postgresql://root:root@localhost:5432/ny_taxi"
> 04.3·5  [Połączy się ✗ (poprawnie: Padnie: DNS)]  Odpalasz osobny kontener bez --network: docker run --rm postgres:18 psql "postgresql://…

*Ocena:* podział jest czysty — **oba pytania „program na laptopie" ✓, wszystkie trzy „program w kontenerze" ✗**.
Reguła działa tam, gdzie „gdzie siedzę" = „gdzie działa program"; pęka, gdy te dwa miejsca się rozjeżdżają.
Hipotezy (do potwierdzenia jego słowami, zanim napiszę LR):
- 04.3·1/·2: nie widzi pgAdmina jako **programu w kontenerze** — przeglądarka na laptopie wygląda jak „to, co się łączy".
  Moja wina częściowo: lekcja nie wyjaśniła, że pgAdmin to aplikacja webowa (przeglądarka = tylko ekran, połączenie robi serwer pgAdmina w kontenerze).
  Odpowiedzi ·1 = TCP i ·2 = DNS wyglądają na zamienione miejscami — może rozumował o samej nazwie, a nie o miejscu.
- 04.3·5: „kontener = zna nazwy z compose" — nie odróżnia sieci compose od domyślnej `bridge`.
Poprosiłem o uzasadnienie ·1, ·2, ·5.

*Uzasadnienia (2026-10-14):*
> 04.3.1 -> nie wiem w sumie. Źle przeczytałem fragment pliku z compose'a
> 04.3.2 -> pomyślałem, że skoro serwis bazy danych nazywa się pgdatabase, to innej nazwy nie znajdzie i stąd DNS, ale masz rację localhost powinien znaleźć, tylko nic tam nie słucha ba porcie 5432
> 04.3.5 -> rzeczywiście nie zwróciłem uwagi, że jest to kontener spoza sieci

*Ocena:*
- ·1 — sam nie wie; „źle przeczytałem compose". Brak dowodu, że rozumie, iż łączy się serwer pgAdmina, a nie przeglądarka.
  Dopisałem do lekcji notkę o pgAdminie jako aplikacji webowej (przed treningiem).
- ·2 — **nowy wzorzec (LR-0011):** „zła nazwa" = „DNS". Nie rozdziela „czy nazwa istnieje" (DNS) od „czy wskazuje właściwą maszynę" (TCP).
  Plus założenie, że w kontenerze istnieją tylko nazwy serwisów (zapomina o /etc/hosts z localhost). Po pytaniu sam się poprawił, z mechanizmem.
- ·5 — uwaga, nie model: przeoczył „bez --network" (było pogrubione). Do sprawdzenia przy następnej okazji, czy to tylko czytanie.
Dałem jedno nowe pytanie kontrolne (pgAdmin → host `kestra`, port 5432).

**Pytanie kontrolne: pgAdmin → host `kestra`, port 5432** (2026-10-14)
> padnie na DNS, bo nie wykryje nazwy. Prawidłowa nazwa serwisu to kestra_postgres, która słucha na 5432

*Ocena:* ✗ — **LR-0011 potwierdzony na świeżym przypadku**: „nie ta nazwa, której trzeba" → DNS. `kestra` to serwis z tego samego
compose (linia 51, porty 8080/8081), więc DNS Dockera go zna; na 5432 nikt nie słucha → TCP refused.
Dobre w odpowiedzi: wie, że właściwy cel to `kestra_postgres:5432`. Pokazałem prawdziwy wynik z jego laptopa
(sieć z kontenerem `kestra`: `getent` kod 0 → `Connection refused`; nieistniejąca `kestra-nie-ma`: kod 2 → `could not translate host name`).
Dałem mu test zamiast etykiety: „czy ta nazwa jest gdziekolwiek w łańcuchu tej maszyny?" — tak/nie, nie „czy to dobra nazwa".

**04.4 — z pamięci: reguła i komenda** (2026-10-14)
> nazwa jest rozwiązywana przez maszynę, na której działa program. Komenda do sprawdzenia to getent hosts

*Ocena:* ✓ obie części, z podpowiedzią „get entries" w treści pytania. Nie dodał „sprawdzaj tam" (`docker exec … getent`) — dopowiedziałem.
Uwaga: to fluency tuż po lekcji; prawdziwy test reguły to 04.3-podobne przypadki za kilka dni (spacing).

**04.5 — terminal: getent kontra dig** (2026-10-14, 23:32)
Wkleił surowy wynik (bez przewidywań). Skrót:
> getent hosts LEGION → `127.0.1.1 LEGION`, kod 0
> getent hosts (bez klucza — sam dorzucił) → localhost, LEGION, `127.0.0.1 ip6-localhost ip6-loopback`
> dig +short LEGION → 127.0.1.1
> dig (bez argumentów — sam dorzucił) → NS dla „.", 13 root-servers, SERVER 127.0.0.53
> dig @1.1.1.1 LEGION → status: NXDOMAIN, AUTHORITY: SOA a.root-servers.net, SERVER 1.1.1.1, kod 0
> getent hosts nie-ma-takiej-nazwy.example → pusto, kod 2

*Ocena:* wszystkie 4 linie zgodne z lekcją; obie pułapki (dig przez stub widzi /etc/hosts; NXDOMAIN → kod 0) na żywo.
**Sam eksperymentował** poza poleceniem (getent bez klucza, dig bez argumentów) — ciekawość narzędzi, mocna strona.
Wyjaśniłem: getent bez klucza = wylistuj bazę (tylko plik, DNS-u nie da się wylistować); dig bez argumentów = NS dla korzenia (man dig);
SOA w AUTHORITY = serwery root odpowiadają „nie ma takiej domeny najwyższego poziomu". Brak przewidywań — dopytałem lekko.

**04.6 — terminal: sieć lekcja04** (2026-10-14)
> nameserver 127.0.0.11 … 172.19.0.2 db / kod: 0   (kontener w lekcja04)
> kod: 2   (kontener bez --network)
> getent hosts db ; echo "kod: #?" → „kod: #?" — sam zauważył literówkę i powtórzył z $? → kod: 2   (laptop)
> docker stop db ; docker network rm lekcja04 → posprzątane

*Ocena:* wszystkie trzy kody zgodne z lekcją; sam złapał i poprawił literówkę `#?` → `$?` (rozumie, czym jest `$?`).

**Krytyka lekcji i decyzja ucznia** (2026-10-14) — dosłownie:
> nie podawałem przewidywań, bo chcę to testować. Jestem w tym zielony, a czasem każesz mi przewidywać coś o czym nie mam pojęcia.
> Lekcje nie są zbyt jasne, omijają podstawy i pewne założenia że coś wiem przyjmujesz za pewnik, a tak nie jest. Wolę, żeby pojęcia
> były też wyjaśniane od razu w lekcji a nie gdzieś w glosariuszu. Nie będę przeskakiwał ciągle między oknami, bo to rozprasza uwagę.
> Komendy do uruchomienia w terminalu są podane ciągiem i nie jest opisane czego szukać i czego się spodziewać albo chociaż na co
> zwrócić uwagę. Po tej lekcji chwilowo zawieszam uczenie z sieci i przechodzę do nauki Linuxa i Dockera

*Wnioski:* krytyka zasadna — przyjęta jako zasady stałe (góra pliku) i LR-0012. 04.3 (0/3 w przypadkach kontenerowych)
to w części skutek właśnie tego: pgAdmin jako aplikacja webowa i „kontener = osobna maszyna z własnym /etc/hosts" nie zostały wyjaśnione przed pytaniem.
04.7 i 04.8 bez odpowiedzi. **Nauka sieci wstrzymana po lekcji 04.**

### lesson 0003

#### Podejście 2 — powtórka całej lekcji po przerwie (od 2026-10-06, ~12 dni od 1. podejścia)

**03.1** (2026-10-06)
> linię >User-Agent: curl/8.5.0 wysłałem ja

*Ocena:* poprawnie po 12 dniach, bez wahania — kierunek `>` trwale w pamięci długotrwałej (LR-0006 zamknięty).
Zadałem obiecane pytanie z pamięci o kod wyjścia `curl` po 401 (z `-f` i bez).

**Pytanie z pamięci: kod wyjścia curl po 401** (2026-10-06)
> nie pamiętam. Jedyne kody jakie zapamiętałem to 60, 22 i 6, ale nie jestem pewien ich znaczenia. To było dawno

*Ocena:* swobodne przypomnienie — brak. Ale same liczby 6, 22, 60 zostały (bez znaczeń), a 22 to właśnie
odpowiedź dla `-f`. Kody wyjścia to składnia, nie mechanizm — zgodnie z profilem wchodzą wolno.
Dałem przypomnienie z podpowiedzią (cued recall) zamiast gotowej odpowiedzi.
> ok, czyli dla zapytania bez -f będzie 5, a dla -f będzie 22?

*Ocena:* `-f` → 22 ✓ (z podpowiedzią). Bez `-f` → 5 ✗ (poprawnie 0). Nie zna uniwersalnej konwencji
„0 = sukces" — luka z kanonu (LR-0007, LR-0010), nie z lekcji. Wyjaśnione; sprawdzi na żywo w 03.4.

**03.2 — trening „który szczebel?"** (2026-10-06, przez przycisk „Skopiuj dla nauczyciela")
> Lekcja 03 · Drabina połączenia — quiz: 8/8 (wszystkie ✓, w tym ·2 pg_hba → Auth, ·5 refused → TCP, ·7 403 → Auth)

*Ocena:* 8/8 vs 5/8 w podejściu 1 — wszystkie trzy wcześniejsze błędy poprawione. **Zastrzeżenie:** to te same
komunikaty, które omawialiśmy, więc część może być pamięcią konkretnych odpowiedzi, a nie regułą.
Dałem 3 nowe komunikaty (transfer) w formacie „kto mówi → szczebel".

**Transfer: 3 nowe komunikaty, „kto mówi → szczebel"** (2026-10-06)
> A) Szczebel TCP, odpowiedź z mojej maszyny
> B) Serwer: Szczebel Auth
> C) Moja maszyna, brak możliwości nawiązania połączenia: serwer nie odpowiada. Poziom TCP

*Ocena:* A ✓ (`Connection timed out`, system, TCP). B ✓ (`FATAL: role … not permitted to log in`, serwer, Auth).
C ✗: `< HTTP/2 503` → mówi serwer (strzałka `<` + kod statusu), szczebel Aplikacja. Odczytał znaczenie
(„niedostępny" → „serwer nie odpowiada") i zignorował dwa sygnały, które zna: `<` = przyszło do mnie,
kod statusu HTTP = ktoś mówi po HTTP. **Reguła działa dla psql (FATAL / brak FATAL), nie przenosi się jeszcze na HTTP.**
> Masz rację, mogłem się zasugerować HTTP i strzałką i nawet zastanawiałem się nad aplikacją, ale tak jak zauważyłeś
> skojarzenie z 'serwer nie odpowiada' wygrało

*Ocena:* sygnały formy **zauważył** i wahał się między TCP a Aplikacją — przegrały w rozstrzygnięciu, nie w percepcji.
Dobra metapoznawczo odpowiedź. Dałem regułę rozstrzygania: gdy forma (`<`, status, `FATAL:`) i znaczenie słów
się kłócą — wygrywa forma.

**03.3 — jedna komenda z podpowiedzią + szczeble** (2026-10-06)
> nc -zv w3 host:port. Szczeble po kolei: DNS, TCP, TLS, Auth, Aplikacja

*Ocena:* szczeble 5/5 (drugi raz, trwałe). `nc -zv` ✓ z podpowiedzią — rdzeń zapamiętany. Dwa błędy składni:
`w3` bez myślnika i spacji (`-w 3`) oraz `host:port` zamiast `host port` — przeniósł zapis z URL/connection stringa
(lekcja 01) na argumenty komendy. Pokazane na żywo: `nc -zv w3 api.github.com:443` → „port number invalid:
api.github.com:443" (`w3` wzięte za host!); `nc -zv -w 3 api.github.com:443` → „missing port number".
Nowa zasada do przekazywania: każde narzędzie ma własną składnię adresu (URL `host:port`, nc `host port`, psql `-h -p`).

**03.4 — pięć linii curl, faktyczne wyniki** (2026-10-06)
> refused 127.0.0.1:5432 → `(7) … after 0 ms: Couldn't connect to server`, kod: 7
> nie-istnieje-xyz123… → `(6) Could not resolve host`, kod: 6
> expired.badssl.com → `(60) SSL certificate problem: certificate has expired`, kod: 60
> api.github.com/user → body `{"message": "Requires authentication", … "status": "401"}`, kod 0
> -f api.github.com/user → `(22) The requested URL returned error: 401`, kod 22

*Ocena:* wykonane w całości, wyniki zgodne z drabiną; teraz zobaczył 0 vs 22 na żywo (zamyka pytanie z pamięci).
Przewidywań w tym podejściu nie wkleił. Wskazałem detale: body 401 trafia na stdout (= do pliku w potoku),
z `-f` body znika; `}kod 0` sklejone, bo body nie kończy się znakiem nowej linii.

**03.5 — Postgres w Dockerze, surowy wynik** (2026-10-06)
> `ss -tlnp | grep 55432` → `LISTEN 0 4096 127.0.0.1:55432 0.0.0.0:*` (bez kolumny Process)
> `pg_isready -h 127.0.01 -p 55432` → `accepting connections`, kod: 0   ← literówka 127.0.01, zadziałała
> zlehaslo → `FATAL: password authentication failed for user "postgres"`
> sekret → `?column? 1 (1 row)`
> etl → `FATAL: password authentication failed for user "etl"`
> /hurtownia → `FATAL: database "hurtownia" does not exist`

*Ocena:* wykonane w całości, kontener postawiony samodzielnie. Brak adnotacji „szczebel + kto mówi" przy psql —
poprosiłem o nie (to była część ćwiczenia). Detale wskazane: `-p 127.0.0.1:55432` stało się Local Address
(lekcja 01 na żywo); pusta kolumna Process, bo docker-proxy należy do roota; `127.0.01` = `127.0.0.1`
(stara notacja inet_aton: ostatnia liczba wypełnia brakujące oktety). Kontener nadal działa — do sprzątnięcia w 03.6.
> zlehaslo -> auth, sekret-> aplikacja, etl -> aplikacja

*Ocena:* zlehaslo → Auth ✓. sekret → „aplikacja" — akceptowalne (przeszło całą drabinę, łącznie z 5).
etl → Aplikacja ✗ (Auth): prawdopodobnie sklasyfikował po **ukrytej przyczynie** (wie z lekcji, że roli nie ma →
„brak zasobu"), nie po komunikacie; a i przyczyna to Auth (tożsamość; docs PG: „Authentication Problems").
hurtownia — pominięta. „Kto mówi" pominięte drugi raz z rzędu mimo prośby — możliwe, że uważa to za oczywiste
przy FATAL; nie naciskam trzeci raz, sprawdzę regułę inaczej (w nowych komunikatach).

**03.6 — przewidywanie dla `docker logs … | tail -8` bez `2>&1`** (2026-10-06)
> bez >2>&1 nie pokazałoby nic, bo logi lądują w stder, a | tego nie pokazuje

*Ocena:* mechanizm ✓ (stderr nie wchodzi do `|`), konsekwencja ✗. Sprawdziłem na jego kontenerze: stdout ma 46 linii
(skrypt inicjalizacji obrazu), stderr 16 (w tym FATAL/DETAIL). Bez `2>&1`: stderr **omija** potok i leci prosto
na ekran, niefiltrowany; `tail` dostaje tylko stdout → 8 linii z inicjalizacji. Ekran nie jest pusty.
Nie podałem odpowiedzi — kazałem uruchomić i porównać z przewidywaniem.
> (wkleił oba wyniki: z `2>&1` → 8 ostatnich linii z FATAL/DETAIL; bez `2>&1` → 16 linii stderr niefiltrowanych,
> a pod nimi 8 linii stdout z inicjalizacji; potem `docker stop`) „zatrzymałem już niestety kontener przed komendą nc -zv"

*Ocena:* wykonane; `DETAIL: Role "etl" does not exist` zobaczył w logu na własne oczy. Na dwa pytania kontrolne
nie odpowiedział wprost — wyjaśniłem na jego wyniku: „szew" w znacznikach czasu (20:45:46 → 20:40:32) to granica
między stderr (ominął potok, prosto na ekran) a stdout (przeszedł przez `tail`). `nc` po stopie nic nie stracone —
o to właśnie chodziło w zadaniu. Teaser na lekcję Docker: w kontenerze Postgres słucha na `0.0.0.0:5432`,
a na hoście `127.0.0.1:55432` — dwie warstwy adresów.

**Zbiorcze odpowiedzi 03.1–03.9** (2026-10-06)
> 03.1 Moja maszyna / ja. Poznaję po kierunku strzałki
> 03.2 8/8
> 03.3 DNS (dig), TCP (nc -zv -w..), TLS, Auth, Aplikacja
> 03.7 DAG będzie na zielono, bo otrzymał odpowiedź, czyli kod 0. Odpowiedzią może być informacja o tym, że token
> wygasł. Należy dodać flagę -f, aby błąd był głośny. Do hurtowni trafi odpowiedź, z orders.json, czyli komunikat
> o wygasłym tokenie, pod warunkiem, że nie ma walidacji dot. danych na hurtowni.
> 03.8 Mechanizm jest po to, aby ograniczyć kolejne próby wejścia do bazy, dlatego Postgres nie zdradza, czy taki
> użytkownik istnieje
> 03.9 nie mam na ten moment

*Ocena:*
- 03.1 ✓ — uzasadnienie po strzałce (forma, nie treść).
- 03.3 — `dig` i `nc -zv -w` z pamięci **bez podpowiedzi** (rano: z podpowiedzią, bez `-w`). Spacing w obrębie dnia zadziałał.
  TLS/Auth/Aplikacja bez narzędzi (curl -v / czytanie odpowiedzi) — do powtórki.
- 03.7 ✓✓ — wszystkie trzy części; sam dodał warunek „o ile nie ma walidacji danych w hurtowni" (myślenie
  warstwami obrony — jego kompetencja architektoniczna). Nie podał kodu 22 przy `-f`. Dopowiedziałem `-s` + `-f`
  = błąd po cichu (kod 22, ale brak komunikatu w logu Airflow) → `-sSf`; sprawdzone na żywo, plik nie powstaje.
- 03.8 częściowo — kierunek dobry (bezpieczeństwo), mechanizm nieprecyzyjny: nie ogranicza liczby prób, tylko
  odbiera informację (enumeracja użytkowników). Brak połączenia z portem 444 (o które pytało ćwiczenie).
- 03.8 — doprecyzowanie ucznia (2026-10-06):
  > właśnie to miałem na myśli, tylko źle to opisałem. Bo gdyby odpowiedź dla istniejącego użytkownika byłaby inna,
  > to haker wieddziałby, że taki user się znajduje i próbowałby do skutku, a tak to nie wie, czy jest sens dalej
  > próbować i są większe szanse, że odpuśi. To o to mi chodziło w kontekście ograniczania ilości prób
  *Ocena:* podniesione do ✓. Myślał o **ekonomii ataku** (brak informacji → mniej celowanych prób, większa szansa,
  że atakujący odpuści) — poprawne. Rozróżnienie domknięte: to zniechęca, ale nie *blokuje* technicznie; twarde
  ograniczanie prób to osobne mechanizmy (np. `auth_delay` w PG, fail2ban). Wzorzec: rozumie mechanizm, a skrótowo
  go zapisuje — przy niejasnej odpowiedzi dopytać o „dlaczego", zanim uznam za błąd.
- **Lekcja 03 zamknięta.**

#### Podejście 1 (2026-09-24 – 2026-09-27)

**03.1 — kto wysłał `> User-Agent`** (2026-09-24)
> linię > User-Agent: curl/8.5.0. wysłałem ja. Przekazałem ją w nagłówku zapytania. Niektóre API blokują
> niektórych user-agentów, np. user agenta pythona i wtedy trzeba udwać przeglądarkę albo Postmana

*Ocena:* poprawnie — kierunek i pojęcie „nagłówek zapytania" na miejscu. Błąd z LR-0006 nie wrócił.
Sam dołożył wiedzę z praktyki (blokowanie User-Agentów). Doprecyzowałem: lepiej przedstawić się uczciwie
(nazwa potoku + kontakt) niż udawać przeglądarkę; blokada User-Agenta to szczebel 4 (403).
Dowód na żywo: `curl -H 'User-Agent:' https://api.github.com/zen` → `403` „Please make sure your request has a User-Agent header".

**03.2 — trening „który szczebel?"** (2026-09-27)
> 1:b 2:b 3:c 4:e 5:d 6:a 7:e 8:e — 5/8

| # | Komunikat | Wybrał | Poprawnie |
|---|---|---|---|
| 1 | curl (28) timeout 30002 ms | TCP ✓ | TCP |
| 2 | `FATAL: no pg_hba.conf entry for host` | **TCP ✗** | Auth |
| 3 | curl (60) self-signed | TLS ✓ | TLS |
| 4 | `< HTTP/2 404` | Aplikacja ✓ | Aplikacja |
| 5 | psql `Connection refused` | **Auth ✗** | TCP |
| 6 | could not translate host name | DNS ✓ | DNS |
| 7 | `< HTTP/2 403` | **Aplikacja ✗** | Auth |
| 8 | `FATAL: database "staging" does not exist` | Aplikacja ✓ | Aplikacja |

*Ocena:* komunikaty „czyste" (DNS, timeout, certyfikat, 404, brak bazy) — bezbłędnie.
Błędy 2 i 5 są **lustrzane**: klasyfikuje po znaczeniu słów w komunikacie („refused" → odmowa dostępu;
„host" + adres → sieć), a nie po regule „kto mówi?". Patrz LR-0009. Błąd 7 to granica 401/403 vs 404 —
częściowo wina mojej taksonomii (wszystkie trzy to 4xx). Poprosiłem o uzasadnienie wyborów 2 i 5.

*Uzasadnienie (2026-09-27):*
> W 2 wybrałem TCP, bo zobaczyłem adres IP i to mi się skojarzyło z TCP. W 5 wybrałem Auth przez słowo klucz
> "refused". Uznałem to za odmowę ze wględu na brak autoryzacji

*Ocena:* hipoteza z LR-0009 potwierdzona jego słowami. Nowe: adres IP działa jak słowo-klucz „TCP" —
a w psql adres jest w **każdym** komunikacie (prefiks `connection to server at "…", port … failed:`).
Dałem regułę czytania: prefiks = gdzie próbowałem, werdykt = po `failed:`. Dopisana do ściągi drabiny.

**03.3 — z pamięci: szczeble i komendy** (2026-09-27)
> 1 DNS - sprawdza wewnętrzny resolver, 2 TCP, 3 TLS - sprawdza mój klient, 4 AUTH. 5 Aplikacja. Nie pamiętam
> komend na pamięć, bez szns, żebym je znał po jednej lekcji i jedno, czy dwukrotnym wpisaniu

*Ocena:* kolejność szczebli 5/5 z pamięci, z dwoma trafnymi dopiskami (kto odpowiada przy DNS; przy TLS ocenia
**klient** — to było w lekcji wyróżnione). Komendy 0/5 — i ma rację, że to było za wcześnie: moje pytanie
kazało odtworzyć 10 elementów naraz po jednej ekspozycji. Przeformułowałem: do zapamiętania są tylko 3 komendy
(dig, nc -zv, curl -v), bo szczeble 4–5 czyta się z odpowiedzi, nie z osobnej komendy. Odtąd komendy wracają
pojedynczo, z podpowiedzią, rozłożone na lekcje.

**03.4 — przewidywania dla 5 linii curl** (2026-09-27; faktyczne wyniki jeszcze nie wklejone)
> 1. DNS -> nazwa nie jest zarejestrowana
> 2. Nic nie zwróci, connection refused, bo nie mam żadnej bazy na tym porcie
> 3. Brak certyfikatu lub certyfikat nieważny
> 4. 403 forbiden
> 5. Odmowa dostępu z poziomu aplikacji

*Ocena:* szczeble 1–3 trafione, z poprawnym uzasadnieniem (2: refused, bo nic nie słucha — przy `curl`
reguła zadziałała, gdy nie było słowa-pułapki w komunikacie). 4: szczebel Auth dobrze, kod zły — przewidział 403,
faktycznie 401 (brak tożsamości ≠ brak uprawnień). 5: nazwał „aplikacją", a to wciąż Auth (ten sam 401).
**Nie przewidział żadnego kodu wyjścia** — a to był główny punkt linii 4–5 (0 vs 22). Poprosiłem o wklejenie faktycznych wyników.

*Dopytanie o kod wyjścia linii 4 i 5:*
> Linia 4 dostanie 401, a piąta 403

*Ocena:* **utożsamia kod wyjścia z kodem statusu HTTP** (LR-0010). Dodatkowo zakłada, że `-f` zmienia odpowiedź
serwera — a zmienia tylko to, jak `curl` raportuje wynik powłoce. Wyjaśnione jako dwa kanały; ponowione pytanie.
> ok, o te kody chodziło.Następnym razem sprawdzę w ściądze

*Stan:* przyjął rozróżnienie, na ponowione pytanie (kody 0 vs 22) nie odpowiedział — sam wybrał sprawdzenie w ściądze.
**Otwarte:** kody wyjścia linii 4–5 + faktyczne wyniki 03.4; 03.5–03.8. Na początku kolejnej sesji: jedno pytanie
z pamięci „jaki kod wyjścia daje `curl` po 401, z `-f` i bez?" — zanim zajrzy do ściągi.

**03.9 — pytanie** (2026-09-24)
> Skąd mój wbudowany resolver w mojej prywatnej maszynie wie jaki IP kryje się pod daną domeną? Musi się chyba
> połączyć online, bo inaczej skąd by to wiedział? Skoro DNS jest czymś w rodzaju książki telefonicznej, gdzie
> szukasz po użytkowników a zwraca ci jego numer, to jak to działa na lokalnym 127.0.0.53?

*Ocena:* bardzo dobre pytanie — intuicja „musi się połączyć online" jest poprawna, a pytanie zdradza,
że metafora „książki telefonicznej" z glosariusza sugerowała jedną książkę. Wytłumaczone w czacie:
stub → router → resolver rekurencyjny → root → TLD → autorytatywny, na dowodach z jego maszyny
(`resolvectl status`: DNS 192.168.1.1 / fe80::1; `dig +trace`). Glosariusz: dopisana hierarchia DNS.
→ Materiał gotowy na lekcję o DNS (w kolejności z Working notes). Haczyk na później: Docker nie może
użyć 127.0.0.53 hosta (w kontenerze to jego własny loopback — LR-0002).

## lesson 0002
<!-- archiwum: sekcja pisana przez ucznia, nie edytować -->

### pytania
1. Opisz dokładniej czym jest socket, TCP, UNIX, UDP?
2. Dobrze zrozumiałem, że przykładem socketa będzie 127.0.0.0:5432?
3. "Peer Address:Port	Z kim rozmawia. Dla nasłuchującego 0.0.0.0:* = „przyjmę od każdego, kto mnie znajdzie"." Jakie są inne peer address port i gdzie to się ustawia? W serwerze? W kontenerze? Jeśli zaplanowałeś to na dalsze lekcje, to ok nie wyprzedzajmy faktów, tylko napisz, że będzie o tym mowa później
4. Czym jest IPv4 a czym IPv6?
5. Czym jest daemon?
6. Co robi zapis z '|'?

### zaskoczenie
sekcja o curl była najciekawsza, bo realnie pokazuje jak czytać odpowiedź z danego endpointu. Może się przydać przy budowaniu potoków. 
Sekcje o flagach też na pewno przydatne, ale nadal są dla mnie niezbyt jasne, bo chyba brakuje mi po prostu podstaw informatyki uniwersyteckiej i wiedzy kanonicznej.
Miałem rozszerzoną informatykę w liceum, ale było to kilkanaście lat temu i niewiele już z tego pamiętam.

### quiz
1:a
2:a
3:a
3/3 dobrze

### zadania otwarte
1. *, >, <
'*' - odpowiedź z DNS, TCP. Można sprawdzić, czy dana strona istnieje, jaki jest jej adres IP i port, certyfikat.
'>' - Odpowiedź z HTTP. Podaje jakie parametry przyjmuje header
'<' - Odpowiedź z HTTP. Treść odpowiedzi, ale nie potrafię tego rozwinąć bardziej
2. ss to socket 'coś tam'. -tlnp mówi, żeby zwrócić tylko połączenia TCP (t), nasłuchujące (l), n-nie pamiętam, p też nie pamiętam. '.' oznacza roota, ale nie wiem w jakim kontekście

### zapytania do terminala

nc -zv 127.0.0.53 53
Connection to 127.0.0.53 53 port [tcp/domain] succeeded!

curl -v https://api.github.com/zen -> 36 gwiazdek przed pierwszym '>'
'* Host api.github.com:443 was resolved.
'* Host api.github.com:443 was resolved.
'* IPv6: (none)
'* IPv4: 140.82.121.6
'*   Trying 140.82.121.6:443...
'* Connected to api.github.com (140.82.121.6) port 443
'* ALPN: curl offers h2,http/1.1
'* TLSv1.3 (OUT), TLS handshake, Client hello (1):
'*  CAfile: /etc/ssl/certs/ca-certificates.crt
'*  CApath: /etc/ssl/certs
'* TLSv1.3 (IN), TLS handshake, Server hello (2):
'* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
'* TLSv1.3 (IN), TLS handshake, Certificate (11):
'* TLSv1.3 (IN), TLS handshake, CERT verify (15):
'* TLSv1.3 (IN), TLS handshake, Finished (20):
'* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
'* TLSv1.3 (OUT), TLS handshake, Finished (20):
'* SSL connection using TLSv1.3 / TLS_AES_128_GCM_SHA256 / X25519 / id-ecPublicKey
'* ALPN: server accepted h2
'* Server certificate:
'*  subject: CN=*.github.com
'*  start date: Aug 30 00:00:00 2026 GMT
'*  expire date: Nov 27 23:59:59 2026 GMT
'*  subjectAltName: host "api.github.com" matched cert's "*.github.com"
'*  issuer: C=GB; O=Sectigo Limited; CN=Sectigo Public Server Authentication CA DV E36
'*  SSL certificate verify ok.
'*   Certificate level 0: Public key type EC/prime256v1 (256/128 Bits/secBits), signed using ecdsa-with-SHA256
'*   Certificate level 1: Public key type EC/prime256v1 (256/128 Bits/secBits), signed using ecdsa-with-SHA384
'*   Certificate level 2: Public key type EC/secp384r1 (384/192 Bits/secBits), signed using ecdsa-with-SHA384
'* using HTTP/2
'* [HTTP/2] [1] OPENED stream for https://api.github.com/zen
'* [HTTP/2] [1] [:method: GET]
'* [HTTP/2] [1] [:scheme: https]
'* [HTTP/2] [1] [:authority: api.github.com]
'* [HTTP/2] [1] [:path: /zen]
'* [HTTP/2] [1] [user-agent: curl/8.5.0]
'* [HTTP/2] [1] [accept: */*]
'> GET /zen HTTP/2
'> Host: api.github.com
'> User-Agent: curl/8.5.0
'> Accept: */*
'> 
'* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
'* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
'* old SSL session ID is stale, removing
< HTTP/2 200 
< date: Wed, 23 Sep 2026 20:30:41 GMT
< content-type: text/plain;charset=utf-8
< x-github-api-version-selected: 2022-11-28
< access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset, Warning
< access-control-allow-origin: *
< strict-transport-security: max-age=31536000; includeSubdomains; preload
< x-frame-options: deny
< x-content-type-options: nosniff
< x-xss-protection: 0
< referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
< content-security-policy: default-src 'none'
< vary: Accept-Encoding, Accept, X-Requested-With
< server: github.com
< accept-ranges: bytes
< x-ratelimit-limit: 60
< x-ratelimit-remaining: 59
< x-ratelimit-used: 1
< x-ratelimit-resource: core
< x-ratelimit-reset: 1790199047
< content-length: 37
< x-github-request-id: A9C4:4EE75:53B705:5195CB:6AB436F7
< x-github-edge-region: fra
< 
'* Connection #0 to host api.github.com left intact'


dig api.github.com
; <<>> DiG 9.18.39-0ubuntu0.24.04.5-Ubuntu <<>> api.github.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 58206
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;api.github.com.                        IN      A

;; ANSWER SECTION:
api.github.com.         21      IN      A       140.82.121.6

;; Query time: 14 msec
;; SERVER: 127.0.0.53#53(127.0.0.53) (UDP)
;; WHEN: Wed Sep 23 22:37:07 CEST 2026
;; MSG SIZE  rcvd: 59


dig github.com MX

; <<>> DiG 9.18.39-0ubuntu0.24.04.5-Ubuntu <<>> github.com MX
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 17265
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;github.com.                    IN      MX

;; ANSWER SECTION:
github.com.             300     IN      MX      0 github-com.mail.protection.outlook.com.

;; Query time: 10 msec
;; SERVER: 127.0.0.53#53(127.0.0.53) (UDP)
;; WHEN: Wed Sep 23 22:38:01 CEST 2026
;; MSG SIZE  rcvd: 90


ss -tl
State                Recv-Q               Send-Q                               Local Address:Port                                 Peer Address:Port               Process               
LISTEN               0                    511                                      127.0.0.1:30974                                     0.0.0.0:*                                        
LISTEN               0                    4096                                    127.0.0.54:domain                                    0.0.0.0:*                                        
LISTEN               0                    4096                                 127.0.0.53%lo:domain                                    0.0.0.0:*                                        
LISTEN               0                    4096                                     127.0.0.1:ipp                                       0.0.0.0:*                                        
LISTEN               0                    4096                                         [::1]:ipp                                          [::]:*                        


ss -tlnp
State             Recv-Q            Send-Q                         Local Address:Port                          Peer Address:Port            Process                                     
LISTEN            0                 511                                127.0.0.1:30974                              0.0.0.0:*                users:(("code",pid=4280,fd=56))            
LISTEN            0                 4096                              127.0.0.54:53                                 0.0.0.0:*                                                           
LISTEN            0                 4096                           127.0.0.53%lo:53                                 0.0.0.0:*                                                           
LISTEN            0                 4096                               127.0.0.1:631                                0.0.0.0:*                                                           
LISTEN            0                 4096                                   [::1]:631                                   [::]:*                                   


ss -tnp
State            Recv-Q            Send-Q                       Local Address:Port                         Peer Address:Port            Process                                         
ESTAB            0                 0                                127.0.0.1:44686                           127.0.0.1:30974            users:(("claude",pid=5226,fd=23))              
ESTAB            0                 0                             192.168.14.7:40432                         13.69.68.64:443              users:(("code",pid=3953,fd=21))                
ESTAB            0                 0                             192.168.14.7:44222                       52.138.229.67:443              users:(("code",pid=3953,fd=22))                
ESTAB            0                 0                                127.0.0.1:30974                           127.0.0.1:44686            users:(("code",pid=4280,fd=62))                
ESTAB            0                 0                             192.168.14.7:51288                       34.107.243.93:443              users:(("firefox",pid=6230,fd=121))            
ESTAB            0                 0                             192.168.14.7:51960                        18.239.83.55:443              users:(("firefox",pid=6230,fd=202))            
ESTAB            0                 0                             192.168.14.7:41664                       104.18.31.173:443              users:(("firefox",pid=6230,fd=111))            
ESTAB            0                 0                             192.168.14.7:43090                       160.79.104.10:443              users:(("claude",pid=5226,fd=15))  


ss -tp
State            Recv-Q            Send-Q                       Local Address:Port                          Peer Address:Port            Process                                        
ESTAB            0                 0                             192.168.14.7:33876                        34.149.66.165:https            users:(("claude",pid=5226,fd=17))             
ESTAB            0                 0                                127.0.0.1:44686                            127.0.0.1:30974            users:(("claude",pid=5226,fd=23))             
ESTAB            0                 0                             192.168.14.7:43698                          13.107.5.93:https            users:(("code",pid=3953,fd=25))               
ESTAB            0                 0                             192.168.14.7:40432                          13.69.68.64:https            users:(("code",pid=3953,fd=21))               
ESTAB            0                 0                             192.168.14.7:44222                        52.138.229.67:https            users:(("code",pid=3953,fd=22))               
ESTAB            0                 0                                127.0.0.1:30974                            127.0.0.1:44686            users:(("code",pid=4280,fd=62))               
ESTAB            0                 0                             192.168.14.7:51288                        34.107.243.93:https            users:(("firefox",pid=6230,fd=121))           
ESTAB            0                 0                             192.168.14.7:51960                         18.239.83.55:https            users:(("firefox",pid=6230,fd=202))           
ESTAB            0                 0                             192.168.14.7:41664                        104.18.31.173:https            users:(("firefox",pid=6230,fd=111))           
ESTAB            0                 0                             192.168.14.7:54900                        216.66.39.200:https            users:(("firefox",pid=6230,fd=94))            
ESTAB            0                 0                             192.168.14.7:54904                        216.66.39.200:https            users:(("firefox",pid=6230,fd=110))           
ESTAB            0                 0                             192.168.14.7:32928                       150.171.109.53:https            users:(("code",pid=3953,fd=31))               
ESTAB            0                 0                             192.168.14.7:41884                       150.171.109.53:https            users:(("code",pid=3953,fd=30))               
ESTAB            0                 0                             192.168.14.7:43090                        160.79.104.10:https            users:(("claude",pid=5226,fd=15))             



ss -ulnp
State              Recv-Q             Send-Q                                              Local Address:Port                          Peer Address:Port             Process             
UNCONN             0                  0                                                         0.0.0.0:5353                               0.0.0.0:*                                    
UNCONN             0                  0                                                         0.0.0.0:43127                              0.0.0.0:*                                    
UNCONN             0                  0                                                      127.0.0.54:53                                 0.0.0.0:*                                    
UNCONN             0                  0                                                   127.0.0.53%lo:53                                 0.0.0.0:*                                    
UNCONN             0                  0                                                            [::]:5353                                  [::]:*                                    
UNCONN             0                  0                                                            [::]:47561                                 [::]:*                                    
UNCONN             0                  0                              [fe80::7299:e775:7f88:696a]%wlp9s0:546                                   [::]:*                                    


man nc | grep -A3 -- '-z'
               tional  arguments,  or with options -s and -p respectively.  Cannot be used together with -x or -z.  Additionally, any timeouts specified with the -w option are ig‐
               nored.

       -M ttl  Set the TTL / hop limit of outgoing packets.
--
       -z      Only scan for listening daemons, without sending any data to them.  Cannot be used together with -l.

       destination can be a numerical IP address or a symbolic hostname (unless the -n option is given).  In general, a destination must be specified,  unless  the  -l  option  is
       given  (in  which  case  the local host is used).  For Unix-domain sockets, a destination is required and is the socket path to connect to (or listen on if the -l option is
--
       It  may  be  useful  to know which ports are open and running services on a target machine.  The -z flag can be used to tell nc to report open ports, rather than initiate a
       connection. Usually it's useful to turn on verbose output to stderr by use this option in conjunction with -v option.

       For example:
--
             $ nc -zv host.example.com 20-30
             Connection to host.example.com 22 port [tcp/ssh] succeeded!
             Connection to host.example.com 25 port [tcp/smtp] succeeded!

--
             $ nc -zv host.example.com http 20 22-23
             nc: connect to host.example.com 80 (tcp) failed: Connection refused
             nc: connect to host.example.com 20 (tcp) failed: Connection refused
             Connection to host.example.com port [tcp/ssh] succeeded!


man curl | grep -A6 -- '-v, --verbose'
       --trace-ascii, --trace-config, --trace-ids, --trace-time, --trace and -v, --verbose.

       --abstract-unix-socket <path>
              (HTTP)  Connect  through an abstract Unix domain socket, instead of using the network.  Note: netstat shows the path of an abstract socket prefixed with '@', however
              the <path> argument should not have this leading character.

              If --abstract-unix-socket is provided several times, the last set value is used.
--
              If  the  cookie  jar cannot be created or written to, the whole curl operation does not fail or even report an error clearly. Using -v, --verbose gets a warning dis‐
              played, but that is the only visible feedback you get about this possibly lethal situation.

              If -c, --cookie-jar is provided several times, the last set value is used.

              Examples:
               curl -c store-here.txt https://example.com
--
              See also -G, --get, -v, --verbose and --trace-ascii.

       -H, --header <header/@file>
              (HTTP IMAP SMTP) Extra header to include in information sent. When used within an HTTP request, it is added to the regular request headers.

              For  an  IMAP  or  SMTP MIME uploaded mail built with -F, --form options, it is prepended to the resulting MIME document, effectively including it at the mail global
              level. It does not affect raw uploaded mails (Added in 7.56.0).
--
              See also -v, --verbose.

       --hostpubmd5 <md5>
              (SFTP SCP) Pass a string containing 32 hexadecimal digits. The string should be the 128 bit MD5 checksum of the remote host's public key, curl refuses the connection
              with the host unless the md5sums match.

              If --hostpubmd5 is provided several times, the last set value is used.
--
              To view the request headers, consider the -v, --verbose option.

              Prior to 7.75.0 curl did not print the headers if -f, --fail was used in combination with this option and there was error reported by server.

              Providing -i, --include multiple times has no extra effect.  Disable it again with --no-include.

              Example:
--
              See also -v, --verbose.

       -k, --insecure
              (TLS SFTP SCP) By default, every secure connection curl makes is verified to be secure before the transfer takes place. This option makes curl skip the  verification
              step and proceed without checking.

              When  this  option  is not used for protocols using TLS, curl verifies the server's TLS certificate before it continues: that the certificate contains the right name
--
              See also -v, --verbose.

       --limit-rate <speed>
              Specify the maximum transfer rate you want curl to use - for both downloads and uploads. This feature is useful if you have a limited pipe and you  would  like  your
              transfer not to use your entire bandwidth. To make it slower than it otherwise would be.

              The  given speed is measured in bytes/second, unless a suffix is appended.  Appending 'k' or 'K' counts the number as kilobytes, 'm' or 'M' makes it megabytes, while
--
              See also -v, --verbose, --libcurl and --trace.

       --max-filesize <bytes>
              (FTP  HTTP MQTT) Specify the maximum size (in bytes) of a file to download. If the file requested is larger than this value, the transfer does not start and curl re‐
              turns with exit code 63.

              A size modifier may be used. For example, Appending 'k' or 'K' counts the number as kilobytes, 'm' or 'M' makes it megabytes, while 'g' or 'G'  makes  it  gigabytes.
--
              -v, --verbose, --trace, --trace-ascii and --fail-early.

              For example, you can do both a GET and a POST in a single command line:

               curl www1.example.com --next -d postthis www2.example.com

              -:, --next can be used several times in a command line
--
              See also -v, --verbose and -s, --silent. Added in 7.67.0.

       --no-sessionid
              (TLS) Disable curl's use of SSL session-ID caching. By default all transfers are done using the cache. Note that while nothing should ever get hurt by attempting  to
              reuse SSL session-IDs, there seem to be broken SSL implementations in the wild that may require you to disable this in order for you to succeed.

              Note that this is the negated option name documented. You can thus use --sessionid to enforce session-ID caching.
--
              See also -:, --next and -v, --verbose. Added in 7.66.0.

       --pass <phrase>
              (SSH TLS) Passphrase for the private key.

              If --pass is provided several times, the last set value is used.

--
              See also -v, --verbose, --stderr and --no-progress-meter.

       --socks4 <host[:port]>
              Use the specified SOCKS4 proxy. If the port number is not specified, it is assumed at port 1080. Using this socket type make curl resolve the host name  and  passing
              the address on to the proxy.

              To specify proxy on a unix domain socket, use localhost for host, e.g.  socks4://localhost/path/to/socket.sock
--
              See also -v, --verbose and -s, --silent.

       --styled-output
              Enables the automatic use of bold font styles when writing HTTP headers to the terminal. Use --no-styled-output to switch them off.

              Styled output requires a terminal that supports bold fonts. This feature is not present on curl for Windows due to lack of this capability.

--
              See also -I, --head and -v, --verbose. Added in 7.61.0.

       --suppress-connect-headers
              When  -p, --proxytunnel is used and a CONNECT request is made do not output proxy CONNECT response headers. This option is meant to be used with -D, --dump-header or
              -i, --include which are used to show protocol headers in the output. It has no effect on debug options such as -v, --verbose or --trace, or any statistics.

              Providing --suppress-connect-headers multiple times has no extra effect.  Disable it again with --no-suppress-connect-headers.

              Example:
               curl --suppress-connect-headers --include -x proxy https://example.com

--
              See also -v, --verbose and --trace. This option is mutually exclusive to --trace and -v, --verbose.

       --trace-config <string>
              Set configuration for trace output. A comma-separated list of components where detailed output can be made available from. Names are case-insensitive.  Specify 'all'
              to enable all trace components.

              In addition to trace component names, specify "ids" and "time" to avoid extra --trace-ids or --trace-time parameters.
--
              See also -v, --verbose and --trace. This option is mutually exclusive to --trace and -v, --verbose. Added in 8.3.0.

       --trace-ids
              Prepends the transfer and connection identifiers to each trace or verbose line that curl displays.

              This option is global and does not need to be specified for each use of --next.

--
              See also --trace and -v, --verbose. Added in 8.2.0.

       --trace-time
              Prepends a time stamp to each trace or verbose line that curl displays.

              This option is global and does not need to be specified for each use of --next.

--
              See also --trace and -v, --verbose.

       --trace <file>
              Enables a full trace dump of all incoming and outgoing data, including descriptive information, to the given output file. Use "-" as filename to have the output sent
              to stdout. Use "%" as filename to have the output sent to stderr.

              Note  that verbose output of curl activities and network traffic might contain sensitive data, including user names, credentials or secret data content. Be aware and
--
              See also --trace-ascii, --trace-config, --trace-ids and --trace-time. This option is mutually exclusive to -v, --verbose and --trace-ascii.

       --unix-socket <path>
              (HTTP) Connect through this Unix domain socket, instead of using the network.

              If --unix-socket is provided several times, the last set value is used.

--
       -v, --verbose
              Makes curl verbose during the operation. Useful for debugging and seeing what's going on "under the hood". A line starting with '>' means "header data" sent by curl,
              '<' means "header data" received by curl that is hidden in normal cases, and a line starting with '*' means additional info provided by curl.

              If you only want HTTP headers in the output, -i, --include or -D, --dump-header might be more suitable options.

              If you think this option still does not give you enough details, consider using --trace or --trace-ascii instead.
--
              Providing -v, --verbose multiple times has no extra effect.  Disable it again with --no-verbose.

              Example:
               curl --verbose https://example.com

              See also -i, --include, -s, --silent, --trace and --trace-ascii. This option is mutually exclusive to --trace and --trace-ascii.

--
              See also -v, --verbose and -I, --head.

       --xattr
              When  saving  output to a file, this option tells curl to store certain file metadata in extended file attributes. Currently, the URL is stored in the xdg.origin.url
              attribute and, for HTTP, the content type is stored in the mime_type attribute. If the file system does not support extended attributes, a warning is issued.

              Providing --xattr multiple times has no extra effect.  Disable it again with --no-xattr.
--
              See also -R, --remote-time, -w, --write-out and -v, --verbose.

FILES
       ~/.curlrc
              Default config file, see -K, --config for details.

ENVIRONMENT