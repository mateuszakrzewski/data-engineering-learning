# Data Engineering & IT — Resources (poziom ścieżki)

Źródła przekrojowe i „kręgosłup" każdej domeny. Domeny dopisują własne, szczegółowe źródła w swoich `RESOURCES.md`.
Zasada: najpierw oficjalna dokumentacja, potem uznane książki praktyków. Sieci: patrz `network/RESOURCES.md`.

## Knowledge — przekrojowe
- [Book: _Fundamentals of Data Engineering_ — Joe Reis & Matt Housley (O'Reilly, 2022)](https://www.oreilly.com/library/view/fundamentals-of-data-engineering/9781098108298/)
  Cykl życia danych (generation → ingestion → transformation → serving) + „undercurrents" (orkiestracja, DataOps, bezpieczeństwo). Use for: rama całej ścieżki, język architektury, rozmowy rekrutacyjne.
- [Book: _Designing Data-Intensive Applications_, 2nd ed. — Martin Kleppmann & Chris Riccomini (O'Reilly, 2026)](https://martin.kleppmann.com/2026/03/24/designing-data-intensive-applications-2e.html)
  Kanon: replikacja, partycjonowanie, transakcje, strumienie. Use for: fazy 2 i 5 (Postgres, replikacje/CDC). Czytać wybiórczo, nie od deski do deski.
- [Course: _The Missing Semester of Your CS Education_ — MIT (edycja 2026)](https://missing.csail.mit.edu/)
  Shell, środowisko wiersza poleceń, Git, debugowanie, pakowanie kodu, agentic coding. Use for: dokładnie ta luka „kanonu informatycznego" — Linux i Git.
- [Roadmap: roadmap.sh — Data Engineer](https://roadmap.sh/data-engineer)
  Społecznościowa mapa umiejętności, wskazana przez ucznia jako ściąga. Use for: lista kontrolna pokrycia tematów (nie jako plan nauki).
  Treść węzłów (każdy temat z linkami do źródeł) jest w repo [nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap/tree/master/roadmaps/data-engineer/content),
  co przydaje się przy szukaniu źródeł do lekcji. Mapowanie na domeny: `NOTES.md` → „Pokrycie roadmap.sh”.

## Knowledge — kręgosłup domen
- **Linux**: [Book: _The Linux Command Line_ — William Shotts (darmowy PDF, wyd. 7 internetowe, 25.12)](https://linuxcommand.org/tlcl.php) — systematyczny, od zera, praktyk. + `man`.
- **Docker**: [Docker Docs — Get started](https://docs.docker.com/get-started/) i [Networking in Compose](https://docs.docker.com/compose/how-tos/networking/).
- **SQL**: [PostgreSQL Tutorial (oficjalny)](https://www.postgresql.org/docs/current/tutorial.html) + [pgexercises.com](https://pgexercises.com/) — ćwiczenia w przeglądarce na Postgresie (basic, joins, aggregates, window functions, recursive).
- **PostgreSQL**: [PostgreSQL Documentation](https://www.postgresql.org/docs/current/) — transakcje, MVCC, indeksy, `EXPLAIN`, role, `pg_hba.conf`.
- **Git**: [Book: _Pro Git_ — Chacon & Straub (darmowy, 2nd ed.)](https://git-scm.com/book/en/v2) + rozdział Git z Missing Semester.
- **Modelowanie**: [Kimball Group — Dimensional Modeling Techniques](https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-techniques/dimensional-modeling-techniques/) (ziarno, wymiary zgodne, SCD) na bazie _The Data Warehouse Toolkit_, 3rd ed.
- **Snowflake**: [Snowflake Documentation](https://docs.snowflake.com/) — architektura, warehouse'y, stage'e, `COPY INTO`, koszty. *(do zweryfikowania szczegółowo przy domenie)*
- **dbt**: [dbt Docs](https://docs.getdbt.com/) + [dbt Learn](https://learn.getdbt.com/) (kurs „dbt Fundamentals"). *(do zweryfikowania przy domenie)*
- **Airflow**: [Apache Airflow Docs **3.2.2**](https://airflow.apache.org/docs/apache-airflow/3.2.2/index.html) — wersja z pracy ucznia; linkować tę, nie `stable` (stable = 3.3.x). Zacząć od Airflow 101 i Best Practices.
- **Python**: [The Python Tutorial (oficjalny)](https://docs.python.org/3/tutorial/) — tylko części potrzebne w DE (pliki, wyjątki, moduły, venv).

## Dane do projektu i ćwiczeń
- **TheLook eCommerce** — `bigquery-public-data.thelook_ecommerce` (BigQuery, dane publiczne Google).
  Fikcyjny sklep z odzieżą, przygotowany przez zespół Lookera. Dane syntetyczne, odświeżane na bieżąco. Tabele m.in. `orders`, `order_items`, `products`,
  `users` (z `traffic_source`), `events` (zdarzenia web, z `traffic_source`), `inventory_items`, `distribution_centers`.
  Use for: projekt portfolio — lejek, kanały, kohorty, przyrostowe ładowanie, migracja BQ → Snowflake. Wartości `traffic_source` sprawdzić zapytaniem przed lekcją.
- **Olist — Brazilian E-Commerce** (Kaggle, `olistbr/brazilian-ecommerce`) + zbiór „marketing funnel" tego samego wydawcy.
  Prawdziwe, zanonimizowane dane marketplace'u. Use for: alternatywa / porównanie z danymi syntetycznymi. *(szczegóły i licencja do zweryfikowania — Kaggle nie dał się pobrać 2026-10-15)*

## Wisdom (Communities)
- [r/dataengineering](https://reddit.com/r/dataengineering) — praktycy, dyskusje o narzędziach i rekrutacji. Use for: „jak to robicie u siebie?".
- [dbt Community Slack](https://www.getdbt.com/community/join-the-community) — bardzo aktywna społeczność analytics engineering. Use for: od fazy 4 (dbt).
- [Apache Airflow Slack](https://apache-airflow-slack.herokuapp.com/) — oficjalny Slack projektu. Use for: od fazy 5. *(link do zweryfikowania)*
- Preferencja ucznia co do społeczności: **nieustalona**.

## Gaps
- Angielski techniczny / na spotkaniach — brak jeszcze wybranego, zaufanego źródła. Do znalezienia przy 1. lekcji `english`.
- Fivetran / CDC — źródła do wyboru przy domenie `008_db_replications` (dokumentacja Fivetran + rozdziały DDIA o replikacji).
- Przygotowanie do rozmów DE — do wyboru w fazie 4+.
