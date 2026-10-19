# Sieci i HTTP — Resources

## Knowledge

- [MDN: Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
  Kanoniczny, utrzymywany przez Mozillę opis protokołu HTTP. Use for: czym jest żądanie/odpowiedź, model klient-serwer, historia i wersje HTTP.
- [MDN: HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages)
  Anatomia żądania i odpowiedzi linia po linii. Use for: nagłówki, start line, body, kody statusu.
- [MDN: HTTP reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference)
  Słownik nagłówków, metod i kodów statusu. Use for: szybkie sprawdzenie konkretnego nagłówka lub kodu.
- [High Performance Browser Networking — Ilya Grigorik (O'Reilly, darmowe online)](https://hpbn.co/)
  Najlepsze darmowe źródło łączące warstwy: TCP, UDP, TLS, HTTP/1.1, HTTP/2. Use for: co naprawdę robi handshake TCP/TLS i dlaczego opóźnienia są takie, a nie inne.
- [Julia Evans — Networking! ACK! (zine, PDF za darmo)](https://jvns.ca/networking-zine.pdf)
  Praktyczna, rysunkowa ściąga z debugowania sieci od inżynierki znanej z uczenia przez narzędzia. Use for: intuicja + komendy diagnostyczne.
- [Wizard Zines — How DNS Works](https://wizardzines.com/zines/dns/)
  Use for: rekordy DNS, cache, TTL, dlaczego „zmiana DNS-u nie działa".
- [PostgreSQL: Client Connection Problems](https://www.postgresql.org/docs/current/server-start.html#CLIENT-CONNECTION-PROBLEMS)
  Oficjalna dokumentacja: co znaczą `Connection refused`, timeout i błędy Unix socketa przy łączeniu z Postgresem. Use for: szczebel TCP w diagnostyce baz. Uwaga: „refused" to odmowa jądra, nie Postgresa.
- [PostgreSQL: Authentication Problems](https://www.postgresql.org/docs/current/client-authentication-problems.html)
  Oficjalne znaczenie komunikatów `FATAL:` (pg_hba.conf, hasło, brak bazy). Use for: szczeble Auth i Aplikacja. Uwaga: w PG 18 nieistniejący użytkownik daje ten sam komunikat co złe hasło — szczegół tylko w logu serwera (zweryfikowane 2026-09-24).
- `man curl` (sekcja EXIT CODES) i `man pg_isready` (EXIT STATUS) — lokalnie
  Use for: znaczenie kodów wyjścia; najbardziej zaufane źródło dla zainstalowanej wersji.
- [badssl.com](https://badssl.com/)
  Publiczny poligon z celowo zepsutymi certyfikatami (expired, wrong host, self-signed…). Use for: ćwiczenia szczebla TLS.
- [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
  Use for: znaczenie konkretnego kodu statusu.
- [Cisco Networking Academy — kursy darmowe](https://www.netacad.com/)
  Use for: usystematyzowany kurs podstaw, gdy zechcesz przejść szerzej niż mission wymaga. (Niski priorytet — poza scope certyfikatów.)

- [Docker: Networking in Compose](https://docs.docker.com/compose/how-tos/networking/)
  Oficjalne: nazwy serwisów jako hosty (wbudowany DNS), `HOST_PORT` vs `CONTAINER_PORT`, przykład `postgres://db:5432` vs `localhost:8001`. Use for: łączenie się z bazą w compose — z kontenera i z laptopa. (zweryfikowane 2026-10-14)
- [Docker: Networking — DNS services](https://docs.docker.com/engine/network/#dns-services)
  Wbudowany DNS `127.0.0.11` tylko w sieciach tworzonych przez użytkownika; domyślny `bridge` dostaje kopię `resolv.conf` hosta. Use for: dlaczego nazwa kontenera działa w jednym kontenerze, a w drugim nie.
- `man getent`, `man nsswitch.conf`, `man systemd-resolved`, `man dig` (RETURN CODES) — lokalnie
  Use for: łańcuch rozwiązywania nazw w Linuksie i kody wyjścia (`getent` 2 = nie znaleziono; `dig` 0 także przy NXDOMAIN). Uwaga: na Ubuntu systemd-resolved też czyta /etc/hosts, więc `dig` przez 127.0.0.53 widzi wpisy z /etc/hosts.

## Wisdom (Communities)

- [r/dataengineering](https://reddit.com/r/dataengineering)
  Use for: realne problemy z łącznością w potokach (VPC, private endpoints, timeouty do baz).
- [r/networking](https://reddit.com/r/networking)
  Use for: pytania, gdy problem jest naprawdę sieciowy, nie aplikacyjny. Moderowany, wymaga konkretnych opisów.
- [Stack Overflow / Server Fault](https://serverfault.com/)
  Use for: konkretne błędy połączeń z bazami i serwerami — wklejaj dokładny komunikat błędu.
- Polska społeczność: [Data Engineering Polska (grupy na Slacku/Discordzie i LinkedIn)](https://www.linkedin.com/)
  Use for: kontekst lokalnego rynku i praktyki; do zweryfikowania i doprecyzowania w przyszłej sesji.

## Gaps

- Brak jeszcze sprawdzonego polskojęzycznego źródła o podstawach sieci na dobrym poziomie.
- Brak wybranego źródła do części „bazy danych w sieci" (bind address, pg_hba, security groups) — do znalezienia przed lekcjami o wystawianiu baz.
- Brak zweryfikowanej, aktywnej polskiej społeczności DE — do potwierdzenia z użytkownikiem.
