# Kotwice przykładów: jego stack w pracy i 8 lat logistyki

Uczeń używa na co dzień Git/GitHub, Snowflake, Airflow, Postgres, S3, BigQuery (migracja do Snowflake) i Cloud Run (migracja na Airflow).
Wkrótce Fivetran i dbt. Wcześniej przez 8 lat pracował w transporcie i logistyce. Zoomcamp był „testowym epizodem z innym stackiem" — odrzucony jako kotwica.

## Implications
- Przykłady i ćwiczenia kotwiczyć w **jego** narzędziach (Snowflake zamiast DuckDB, Airflow zamiast Kestry, S3 obok GCS)
  i w danych z **logistyki** (przesyłki, przewoźnicy, trasy, SLA dostaw, statusy) — tu ma intuicję biznesową, więc mniej obciąża pamięć roboczą.
- Migracje BQ→Snowflake i Cloud Run→Airflow to gotowe, realne case'y do lekcji (porównanie dialektów SQL, zadanie kontenerowe vs DAG).
- ~~Projekt portfolio: „potok przewozów"~~ — uczeń wybrał e-commerce i marketing, patrz [[0003-projekt-ecommerce-marketing]]. Logistyka zostaje jako fulfillment w tym projekcie.
- Ćwiczenia terminalowe muszą działać i na Ubuntu, i w WSL2; różnice (ścieżki `/mnt/c`, `localhost` Windows↔WSL↔Docker) nazywać wprost.
