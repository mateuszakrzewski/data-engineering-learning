# Mission: SQL dla inżyniera danych

> Potwierdzona i zmieniona przez ucznia 2026-10-17. Misja nadrzędna: `../MISSION.md`.

## Why
SQL to język, w którym na co dzień rozmawiam z Snowflake, Postgresem i BigQuery — a wkrótce z dbt.
Chcę pisać zapytania samodzielnie i umieć zweryfikować SQL od AI: czy zwraca to, co trzeba, i czy query jest zgodne z moimi wymaganiamu.

## Success looks like
- Piszę bez pomocy: SELECT / WHERE / ORDER BY, prawidłowe JOIN-y, GROUP BY / HAVING, oraz złożone zapytania uwzglęniające CTE.
- Rozumiem NULL (trójwartościowa logika, `COUNT(*)` vs `COUNT(col)`, `COALESCE`).
- Używam CTE i funkcji okna (`ROW_NUMBER`, `LAG`, sumy narastające) — np. deduplikacja, „ostatnie zamówienie klienta", kohorty retencji.
- Czytam cudzy SQL i mówię, jakie jest **ziarno** wyniku (co oznacza jeden wiersz).
- Wiem, czym różni się dialekt Postgres / Snowflake / BigQuery w rzeczach, które spotykam przy migracji.
- Potrafię budować złożone funckje i procedury
- Potrafię na podstawie danych w RAW zapisanych jako JSON TYPE lub VARIANT zbudować sensowny biznesowo i czytelny dla użytkownika widok / tabelę w STAGING

## Constraints
- Bardziej skomplikowny kod piszę z AI, prostsze zapytania piszę samodzielnie; celem jest rozumienie i weryfikacja, nie wkuwanie. Zasady lekcji: `../CLAUDE.md`.
- Faza 1: ćwiczenia w przeglądarce (pgexercises) i BQ. Jeśli w Snowflake to tylko na Free Trialach jeśli istnieją. Lekcji nie przenoszę do pracy. W pracy i prywatnie dysponuję różnym sprzętem i nie podpinam prywatnych środowisk pod zasoby firmowe. Od fazy 2: Postgres w Dockerze.
- Dane w przykładach: e-commerce i marketing (TheLook: zamówienia, klienci, kanały, zdarzenia), z wątkiem wysyłek i zwrotów.
  TheLook (syntetyczne dane) odpytuję z prywatnego konta BigQuery. Firmowych BQ/Snowflake i ich źródeł nie podpinam do prywatnego sprzętu.

## Out of scope
- Administracja bazą, strojenie wydajności (to `../007_postgresql`, `../014_snowflake`).
