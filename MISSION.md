# Mission: Fundamenty IT i Data Engineeringu dla praktykującego inżyniera danych

## Why
Pracuję jako Data Engineer (Git/GitHub, Snowflake, Airflow, Postgres, S3, BigQuery → Snowflake, Cloud Run → Airflow;
w planach Fivetran i dbt), ale przyszedłem z transportu i logistyki, a narzędzia poznawałem „od użycia", często z pomocą AI.
Chcę rozumieć, co dzieje się pod spodem — w systemie, sieci, kontenerze, bazie i potoku — żeby samodzielnie diagnozować,
świadomie projektować i krytycznie weryfikować kod od AI. I żeby być gotowym na rozmowę rekrutacyjną, gdy przyjdzie czas zmiany pracy.

## Success looks like
- Pracuję w terminalu Linuksa (lokalnie, w WSL, w kontenerze) bez kopiowania zaklęć: pliki, uprawnienia, procesy, zmienne środowiskowe, logi.
- Stawiam i debuguję usługi w Dockerze/compose i wiem, dlaczego kontener „nie widzi" bazy.
- Piszę SQL samodzielnie (JOIN, agregacje, CTE, funkcje okna) i czytam plan zapytania w Postgresie i Snowflake.
- Projektuję model hurtowni (fakty, wymiary, ziarno, SCD) i buduję go w dbt na Snowflake.
- Rozumiem i naprawiam DAG w Airflow: zależności, retry, idempotencja, backfill, logi zadania.
- Ładuję dane z API i bazy (w tym CDC/Fivetran) do S3/Snowflake i wiem, co gwarantuje każda metoda.
- Pracuję w Gicie świadomie: branch, rebase vs merge, rozwiązywanie konfliktów, code review na GitHubie.
- Mam własny, działający projekt portfolio (potok e-commerce i marketingu: BigQuery → S3 → Snowflake → dbt, orkiestrowany w Airflow)
  zbudowany kawałek po kawałku z tej ścieżki, który odpowiada na realne pytania biznesowe (lejek, kanały, retencja).
- Czytam dokumentację po angielsku bez tłumacza i potrafię na spotkaniu po angielsku opisać swój potok i problem.

## Constraints
- Start od podstaw: nie z IT, luka w kanonie informatycznym (socket, proces, stdout itp. — patrz `network/learning-records/0007`).
- Kod piszę z pomocą AI — celem nie jest wkuwanie składni, tylko rozumienie i weryfikacja.
- 45–90 minut dziennie, bez terminu końcowego. Najwyżej dwa tory naraz + angielski.
- Środowiska: dom — Linux (Ubuntu); praca — Windows + WSL2 + Docker. Ćwiczenia mają działać na obu.
- Nauka po polsku, terminy i źródła po angielsku.
- Lekcje samowystarczalne (zasady w `CLAUDE.md`).

## Out of scope
- Zoomcamp, `python_learning`, `sql_learning` — legacy, nie wracamy.
- Certyfikaty jako cel sam w sobie (mogą być produktem ubocznym).
- Data science / ML, frontend, administracja sieci korporacyjnych.
