# Mission: Sieci i HTTP dla inżyniera danych

## Why
Jestem inżynierem danych — samoukiem — i buduję potoki danych, nie mając podstaw sieciowych.
Przez to traktuję connection stringi, API, firewalle i konfigurację Linuksa jak magiczne zaklęcia:
kopiuję je i mam nadzieję, że zadziałają. Chcę rozumieć, co naprawdę dzieje się między moim kodem
a bazą / API, żeby samodzielnie diagnozować i projektować połączenia w potokach, zamiast zgadywać.

## Success looks like
- Czytam dowolny URL lub connection string (`postgresql://host:5432/db`) i potrafię powiedzieć, co każda część robi na poziomie sieci.
- Widząc błąd połączenia, wiem z niego, na którym etapie coś padło (DNS / TCP / TLS / HTTP / auth) i którą komendą to sprawdzić.
- Czytam i piszę żądania HTTP ręcznie: metoda, nagłówki, status, body — bez klikania w Postmana.
- Rozumiem, co znaczy „wystawić bazę": port, bind address, firewall, kto skąd może się połączyć.
- Umiem użyć `dig`, `curl -v`, `ss`, `nc`, `traceroute` do zbadania realnego problemu w potoku.
- Rozumiem sieci w chmurze na tyle, by świadomie konfigurować dostęp do baz i API z potoków danych.

## Constraints
- Uczę się od zera — brak podstaw teoretycznych z sieci **i** brak zaplecza technicznego w kodzie.
- Rozumiem hurtownie **od strony założeń i architektury**, nie od strony implementacji.
- Kod piszę i recenzuję z pomocą AI — nie jestem biegły w Pythonie ani SQL-u.
  Nauka Pythona i SQL-a to osobny katalog, poza tą misją.
- Nauka po polsku; źródła techniczne mogą być po angielsku.
- Krótkie lekcje, jedna konkretna wygrana na sesję.
- Ćwiczenia mają być osadzone w realiach inżynierii danych (bazy, API, potoki), nie w abstrakcyjnych przykładach —
  ale zakotwiczone w **connection stringach, konfiguracji i terminalu**, nie w kodzie aplikacji.
- Każda komenda i flaga ma być rozwinięta: od czego jest skrótem, co znaczy każda litera.

## Out of scope
- Certyfikaty sieciowe (CCNA, Network+) i sprzętowy routing/switching.
- Administracja sieci korporacyjnych, VLAN-y, BGP.
- Bezpieczeństwo ofensywne / pentesting.
