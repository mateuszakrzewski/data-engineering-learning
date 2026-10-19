# Misja SQL przepisana przez ucznia: procedury, JSON/VARIANT → staging, zero pracy w lekcjach

W 01.1 uczeń sam zmienił `MISSION.md` (2026-10-17). Doszły cele: złożone zapytania z CTE, **funkcje i procedury**, **budowa widoku/tabeli STAGING z danych RAW w JSON / VARIANT**.
Doszło ograniczenie: lekcji nie przenosi do pracy, nie łączy prywatnych środowisk z firmowymi; Snowflake tylko na Free Trial.
Weryfikacja SQL od AI to teraz „czy zwraca to, co trzeba, i czy jest zgodne z moimi wymaganiami” (zamiast „czy nie mnoży wierszy”).

## Implications
- Plan domeny dostaje blok „półstrukturalne dane”: JSON w BigQuery (`JSON_VALUE`, `UNNEST`) i VARIANT w Snowflake (`:`, `FLATTEN`) — na Snowflake Free Trial. Najpewniej po funkcjach okna.
- Procedury/funkcje: **w zakresie** (uczeń kazał usunąć je z Out of scope, 2026-10-17) — osobna lekcja (UDF, potem procedura).
- Środowisko: prywatne konto BQ z TheLook — tak; firmowe BQ/SF nigdy na prywatnym sprzęcie (`../CLAUDE.md` zasada 13).
- Ćwiczenia „z pracy” tylko koncepcyjne (opisz, nie uruchamiaj). Nie kotwiczyć zadań w jego firmowym BQ/Snowflake.
