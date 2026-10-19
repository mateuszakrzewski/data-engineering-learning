# roadmap.sh jako lista kontrolna, nie jako plan

Uczeń wskazał [roadmap.sh/data-engineer](https://roadmap.sh/data-engineer) jako ściągę. Zestawienie jej ≈190 tematów z planem (2026-10-15)
pokazało cztery realne dziury: (1) **warstwa pojęć architektonicznych** (cykl życia danych, OLTP vs OLAP, hurtownia / data lake / lakehouse,
ETL vs ELT vs reverse ETL, batch vs streaming), (2) **jakość danych i testy** (testy, monitoring, lineage), (3) **CI/CD**, (4) **bezpieczeństwo i RODO**.
Reszta mieściła się już w domenach albo jest świadomie poza stackiem ucznia.

## Implications
- `013_data_modeling` zaczyna się od 1–2 lekcji architektury (rama: _Fundamentals of Data Engineering_), dopiero potem Kimball.
  Uczeń rozumie hurtownie koncepcyjnie (`network/LR-0003`), więc to będzie szybka lekcja: nazwanie i uporządkowanie tego, co zna z praktyki.
- `012_git` obejmuje GitHub Actions (CI dla projektu, `dbt build` w PR).
- Nowa domena `017_data_quality` w fazie 6, tor B. Potrzebuje dbt i Airflow, bo testy i monitoring dotyczą istniejących potoków.
- Bezpieczeństwo nie jest osobną domeną, tylko wątkiem: TLS (`network`), IAM (`016_cloud`), RBAC i masking (`014_snowflake`), RODO przy danych klientów.
- Spark, Kafka i Kubernetes trafiają do opcjonalnej fazy 7. Nie ma ich w stacku, ale pojawiają się w ogłoszeniach o pracę, a celem jest gotowość na zmianę pracy.
- Lista „gdzie u nas” jest w `NOTES.md` → „Pokrycie roadmap.sh”. Sesje domenowe mają ją sprawdzać przy planowaniu lekcji.
