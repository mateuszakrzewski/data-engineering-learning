# Projekt portfolio: e-commerce i marketing na danych TheLook (zamiast potoku przewozów)

Uczeń wybrał domenę projektu: „wolę coś związanego z e-commerce i marketingiem, bo tam chyba da się najwięcej wartości biznesowej wyciągnąć" (2026-10-15).
Zastępuje to moją propozycję „potoku przewozów" z [[0002-stack-i-kotwice]]. Myśli kategorią wartości biznesowej, nie tylko techniki,
co jest mocną stroną na rozmowie rekrutacyjnej.

## Implications
- Źródło: `bigquery-public-data.thelook_ecommerce`. Dane siedzą w **BigQuery**, a cel to **Snowflake**, czyli projekt odtwarza jego migrację z pracy.
  Dane są odświeżane na bieżąco, więc da się realnie ćwiczyć ładowanie przyrostowe, idempotencję i backfill w Airflow 3.2.2.
- Pytania biznesowe kotwiczące SQL i modelowanie: lejek konwersji (`events`), przychód wg kanału (`traffic_source`), kohorty retencji, LTV, RFM,
  zwroty. W TheLook nie ma kosztów kampanii, więc CAC i ROAS wymagałyby wygenerowanych danych o wydatkach (np. przez własne mini-API w `004_api`).
- **Logistyka nie przepada:** `distribution_centers` i znaczniki `shipped_at` / `delivered_at` / `returned_at` pozwalają zadać pytanie „czy czas dostawy wpływa na zwroty?".
  To most do jego 8 lat doświadczenia: intuicja biznesowa zostaje, zmienia się tylko kontekst.
- Przykłady w lekcjach: domyślnie e-commerce i marketing (zamówienia, klienci, kanały, kampanie). Logistyka pojawia się jako fulfillment.
