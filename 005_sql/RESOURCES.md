# SQL — Resources

Kręgosłup ścieżki: `../RESOURCES.md`. Tu źródła szczegółowe dla domeny.

## Knowledge
- [PostgreSQL Tutorial — Part I, ch. 2 „The SQL Language"](https://www.postgresql.org/docs/current/tutorial-sql.html)
  Oficjalny, krótki tutorial: 2.5 Querying a Table, 2.6 Joins, 2.7 Aggregates. Use for: główne źródło lekcji podstawowych (SELECT → JOIN → GROUP BY).
- [pgexercises.com](https://pgexercises.com/)
  Ćwiczenia w przeglądarce na Postgresie (basic, joins, aggregates, window functions). Use for: trening po lekcji, bez instalacji.
- [BigQuery — GoogleSQL query syntax](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax)
  Pełna składnia dialektu BigQuery. Use for: różnice dialektów (BQ → Snowflake), szczegóły klauzul.
- [BigQuery — Optimize query computation (Avoid SELECT *)](https://docs.cloud.google.com/bigquery/docs/best-practices-performance-compute)
  i [Best practices for controlling costs](https://docs.cloud.google.com/bigquery/docs/best-practices-costs) — przechowywanie kolumnowe, `LIMIT` nie obniża kosztu w tabelach bez klastrowania, query validator.
  Use for: nawyki kosztowe w hurtowni.
- [BigQuery — Estimate and control costs](https://docs.cloud.google.com/bigquery/docs/estimate-costs)
  „BigQuery always uses logical (uncompressed) bytes to calculate on-demand query costs." Use for: liczenie kosztu zapytania. Sprawdzone 2026-10-17:
  dry-run = SUM rozmiarów typów (INT64/TIMESTAMP 8 B, STRING 2 B + długość UTF-8) co do bajta.
- [BigQuery sandbox](https://docs.cloud.google.com/bigquery/docs/sandbox)
  Bez karty, 1 TiB zapytań/mies., publiczne zbiory. Use for: dostęp do TheLook w domu.
- [Kimball Group — Grain](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/grain/)
  „The grain establishes exactly what a single fact table row represents." Use for: pojęcie ziarna (most do `013_data_modeling`).
- [Snowflake — SQL command reference: SELECT](https://docs.snowflake.com/en/sql-reference/sql/select) *(do zweryfikowania przy lekcji o dialektach)*

## Dane
- `bigquery-public-data.thelook_ecommerce` — zweryfikowane 2026-10-15 przez `bq` na projekcie ucznia `datapiperejtan`:
  `orders` 125 004 wiersze (~6,8 MB), `order_items` 181 081 (~13,6 MB), bez klastrowania i partycjonowania.
  Statusy `orders`: Shipped, Complete, Processing, Cancelled, Returned. `num_of_item` zgadza się z liczbą wierszy w `order_items` dla 100% zamówień.
  `orders.created_at`: od 2026-10-10 ok. 2,6% wierszy ma niezerowe mikrosekundy (wcześniej pełne sekundy) — sprawdzone 2026-10-17. `bq --format=pretty` ich nie pokazuje; `CAST(... AS STRING)` tak.
  Daty `created_at` sięgają „dziś" — dane są generowane na bieżąco, konkretne `order_id` w przykładach mogą się zmieniać.

## Wisdom (Communities)
- [r/SQL](https://www.reddit.com/r/SQL/) i [DBA Stack Exchange](https://dba.stackexchange.com/) — pytania o zapytania. Preferencja ucznia: nieustalona.
