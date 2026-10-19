# Sam nazwał lukę: brak kanonu informatycznego

Po lekcji 02 użytkownik zapisał:

> Sekcje o flagach też na pewno przydatne, ale nadal są dla mnie niezbyt jasne, bo chyba brakuje mi
> po prostu podstaw informatyki uniwersyteckiej i wiedzy kanonicznej.
> Miałem rozszerzoną informatykę w liceum, ale było to kilkanaście lat temu.

Jego pytania to potwierdzają — pyta o **pojęcia, nie o komendy**: czym jest socket, TCP, UDP,
Unix socket, daemon, IPv4 vs IPv6, co robi `|`.

## Evidence
Kontrast wewnątrz jednej notatki: sekcję o `curl` opisał jako „najciekawszą, bo realnie pokazuje,
jak czytać odpowiedź z danego endpointu" — tam był **mechanizm i cel**. Sekcje o flagach
określił jako niejasne — tam była **lista bez podbudowy pojęciowej**.
Quiz zrobił 3/3, więc problemem nie jest uwaga ani zrozumienie lekcji, tylko brak fundamentu pod nią.

## Implications
- **Diagnoza:** rozwijanie skrótów (zasada z [[NOTES.md]]) działa tylko wtedy, gdy rozwinięcie
  trafia w znane pojęcie. `-t` = „TCP" nic nie daje, jeśli TCP jest pustym słowem.
  Rozwinięcie musi być **zakotwiczone w definicji**, inaczej zamienia jedno zaklęcie na drugie.
- **Reakcja:** powstał `reference/glossary.html` jako kanoniczna ściąga pojęć. Od tej pory
  obowiązuje reguła: termin kanoniczny przy pierwszym użyciu dostaje definicję **i** wpis w glosariuszu,
  a lekcje linkują do niego zamiast powtarzać definicje.
- Nie jest to powód, by cofać się do kursu „podstaw informatyki". Luka jest **punktowa i nazwana** —
  łatamy ją terminem po terminie, w kontekście sieci, zgodnie z misją.
- Sygnał zgodny z [[0003-nie-jest-techniczny]]: jego kompetencja jest koncepcyjna, więc definicja
  pojęcia wchodzi mu łatwiej niż lista flag. **Uczyć pojęciami, ilustrować flagami** — nie odwrotnie.
