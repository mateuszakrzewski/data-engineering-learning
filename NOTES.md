# NOTES — nadzorca ścieżki

Zasady pisania lekcji: `CLAUDE.md`. Szczegółowy profil i historia z sieci: `network/NOTES.md` (najbogatsze źródło o uczniu).

## Uczeń (ustalone 2026-10-15)
- 8 lat w transporcie i logistyce → analizy, narzędzia analityczne, skrypty, aplikacje „vibe-codowane". Teraz Data Engineer w zespole Data.
- **Stack w pracy**: Git + GitHub, Snowflake, Airflow, Postgres, S3, BigQuery (migracja resztek do Snowflake), Cloud Run (migracja na Airflow).
  **W planach**: Fivetran, dbt. **Airflow w pracy: 3.2.2** (lekcje i dokumentacja pod tę wersję, nie 2.x).
- **Cel**: uzupełnić podstawy DE i IT, wzmocnić obecne narzędzia, być gotowym na zmianę pracy. Bez terminu.
- **Czas**: codziennie 45–90 min na cały blok. Podział między tory ustalam ja.
- **Angielski**: czytanie dokumentacji + mówienie na spotkaniach.
- **Środowisko**: dom — Linux (Ubuntu, LEGION); praca — Windows bez dual boota, WSL2 + Docker.
- **Legacy, pomijać**: zoomcamp/`dez-learning`, `python_learning`, `sql_learning`. Wszystko ma żyć tutaj i być ze sobą powiązane.
- Źródła: dobierać od praktyków i zgodnie ze standardami (oficjalna dokumentacja + uznane książki). Lista w `RESOURCES.md`.
- Społeczność: nadal nieustalone — zaproponować, gdy pojawi się pytanie „z praktyki" (r/dataengineering, Slack dbt, Airflow Slack).

## Rytm
**Dwa tory naraz + angielski.** Tor A = fundament IT (terminal, system, infrastruktura). Tor B = dane (SQL, bazy, modelowanie, transformacje).

**Tydzień (wzorzec, nie dogmat):**
| Dzień | Blok 45 min | Jeśli 90 min |
|---|---|---|
| Pn | konsultacja 5′ + lekcja toru A | + ćwiczenia toru B / dokończenie |
| Wt | konsultacja 5′ + lekcja toru B | + krótka lekcja toru A |
| Śr | tor A | + tor B |
| Czw | tor B | + tor A |
| Pt | **angielski 25′** + przegląd tygodnia 15′ (mieszany quiz z obu torów) | + projekt |
| Weekend | opcjonalnie: projekt portfolio / zaległe ćwiczenia | |

**Reguły przełączania:**
1. Domena = blok 4–6 lekcji, zamknięty **punktem kontrolnym**: krótki mieszany test bez podpowiedzi. ≥ 80% → następna domena w torze; mniej → jedna lekcja powtórkowa.
2. Nie zaczynać lekcji N+1, gdy N ma otwarte zadania „Odpowiedz w czacie" — najpierw je domknąć (konsultacja to pilnuje).
3. Wstrzymana domena nie znika: 1 pytanie z niej trafia do rozgrzewek co ~3–5 dni (spacing).
4. Ból z pracy wygrywa z planem: jeśli w pracy pali się Git / Airflow / Snowflake, przesuwam tę domenę wyżej (zapisuję decyzję w learning-records).
5. Angielski jest wpleciony: główne źródło każdej lekcji jest po angielsku; piątek = mówienie (opis tygodnia jak na stand-upie/demo).

## Kolejność (szczegóły i uzasadnienie: `roadmap.html`, LR-0001)
| Faza | Tor A — fundament IT | Tor B — dane |
|---|---|---|
| 1 | `002_linux` | `005_sql` (podstawy) |
| 2 | `003_docker` | `007_postgresql` (w Dockerze) |
| 3 | `network` (powrót: most do lekcji 04) → `006_python` (dla DE) | `013_data_modeling` → `014_snowflake` |
| 4 | `012_git` → `004_api` | `009_dbt` |
| 5 | `015_airflow` → `016_cloud` (S3, IAM, Cloud Run, BQ) | `008_db_replications` (CDC, Fivetran, ELT) |
| 6 | `010_iac` (Terraform) | `011_ai_agents` |
| ciągle | `english` | `projekt` — potok e-commerce i marketingu (portfolio), od fazy 2 — LR-0003 |

| 6 (cd.) | — | `017_data_quality` (testy, jakość, monitoring, lineage) |
| 7 (opcja) | Spark · Kafka/streaming · Kubernetes — pod zmianę pracy, decyzja później | |

Katalogi `012`–`017` i `projekt/` zakładam dopiero, gdy do nich dojdziemy.

## Pokrycie roadmap.sh (ściąga dla nauczyciela, LR-0004)
Uczeń wskazał https://roadmap.sh/data-engineer jako punkt odniesienia. Tematy (≈190 węzłów, pobrane z repo `nilbuild/developer-roadmap`, `roadmaps/data-engineer/content/`)
rozłożone na domeny. **Przy pisaniu lekcji domeny sprawdź, czy jej tematy z tej listy są pokryte.**
| Temat z roadmap.sh | Gdzie u nas |
|---|---|
| linux-basics, networking-fundamentals | `002_linux`, `network` |
| programming-skills, python, data-structures-and-algorithms | `006_python` (DSA tylko podstawy pod rozmowę) |
| learn-sql, relational-databases, postgresql, transactions, indexing, data-normalization | `005_sql`, `007_postgresql` |
| what-is-data-engineering, data-engineering-lifecycle, oltp-vs-olap, data-warehouse, data-lake, data-mart, batch vs realtime/streaming, etl-vs-reverse-etl, types-of-data-ingestion | **`013_data_modeling` — rozszerzony o warstwę architektury** (pierwsze lekcje), rama: _Fundamentals of DE_ |
| data-modelling-techniques, star-vs-snowflake-schema, slowly-changing-dimension, data-warehousing-architectures | `013_data_modeling` |
| snowflake, google-bigquery | `014_snowflake` (+ różnice BQ przy migracji) |
| dbt, transform-data | `009_dbt` |
| apis, authentication-vs-authorization, async-vs-sync-communication | `004_api` (authn/authz też w `network`) |
| git-and-github, **cicd, github-actions** | `012_git` — **rozszerzony o CI/CD (GitHub Actions)** |
| apache-airflow, job-scheduling, data-pipelines, idempotency | `015_airflow` |
| s3-storage, google-cloud-storage, serverless-options (Cloud Run), cloud-computing | `016_cloud` |
| docker, containers--orchestration | `003_docker` |
| infrastructure-as-code, terraform, opentofu | `010_iac` |
| extract/load-data, sources-of-data, change data capture (Fivetran) | `008_db_replications` |
| data-quality, testing (unit/integration/e2e/smoke), monitoring, logs, data-lineage, metadata-management | **`017_data_quality` (nowa domena)**; testy dbt w `009_dbt` |
| encryption, data-masking, tokenization, gdpr, eu-ai-act | **wątek przekrojowy**: TLS w `network`, IAM w `016_cloud`, RBAC + masking w `014_snowflake`, RODO przy danych klientów w projekcie |
| reverse-etl, hightouch, census, segment, ab-testing | **wątek marketingowy projektu** (opcjonalnie: dane z hurtowni → narzędzia marketingowe) |
| apache-spark, apache-kafka, messaging-systems, streaming, kubernetes, distributed-systems-basics, cap-theorem, cluster-computing | faza 7 (opcja) |
| nosql (mongodb, cassandra, redis…), hadoop/hdfs/mapreduce, azure/aws ekosystemy poza S3, java/scala/go, mlops, BI (Looker, Power BI, Tableau) | **świadomie pominięte** — poza stackiem i misją; wrócić, jeśli zmiana pracy tego wymaga |

## Stan domen
<!-- Aktualizuje sesja domenowa po każdej lekcji. Jeden wiersz na domenę. -->
| Domena | Status | Ostatnia lekcja | Data | Otwarte / do powtórki |
|---|---|---|---|---|
| network | ⏸ wstrzymana po 04 | 0004 kto odpowiada na nazwę | 2026-10-14 | LR-0011 „zła nazwa = DNS"; nazwy w kontenerze; 04.7–04.8 bez odpowiedzi. Powrót po bloku Docker. |
| 002_linux | ▶ w toku | 0001 gdzie co leży — zamknięta | 2026-10-19 | misja potwierdzona; następna: 0002 uprawnienia. Repo Airflow w pracy w `/mnt/c` (LR-0002) |
| 005_sql | ▶ w toku | 0001 co oznacza jeden wiersz (odpowiedzi komplet: quiz 5/5, 01.6 mocne) | 2026-10-17 | MISSION.md potwierdzony i zmieniony przez ucznia (LR-0003). Krytyka 01.2 (zadanie-kopia) → zasady 12–13 w CLAUDE.md. Lekcja o NULL otwiera się jego kluczem z 01.6. Następna: 0002 agregacje |
| english | ▶ start (piątki) | — | — | cel: dokumentacja + spotkania |
| pozostałe | ○ w kolejce | — | — | — |

## Mosty (powiązania między domenami)
- Linux → sieci: proces, port, `stdout/stderr`, `$?`, pipe — luki z `network/LR-0007` łatamy w Linuksie od podstaw. Lekcje Linuksa mogą odwoływać się do `ss`, `curl` z sieci jako „już widziałeś".
- Linux → Docker (2026-10-19, `002_linux/LR-0002`): repo Airflow w pracy leży w `/mnt/c` i jest bind-mountowane do kontenera.
  W bloku Docker: wolniejszy dostęp do plików i brak zdarzeń o zmianie plików (inotify) z dysku Windows — docs Docker Desktop „WSL best practices".
- Docker → sieci: „kontener = osobna maszyna z własnym /etc/hosts i localhost" — brakujący model z `network/LR-0011`/04.3. Po bloku Docker: lekcja-most w `network/`.
- Linux/Docker → Postgres: Postgres w Dockerze na Linuksie to poligon dla `007_postgresql` i `network` (wystawianie bazy, pg_hba).
- SQL → Postgres → Snowflake → dbt: ten sam SQL, coraz wyżej po stosie.
- SQL → Airflow / data quality: „0 wierszy = sukces, kod wyjścia 0” (SQL 01, retrieval z network LR-0010) — literówka w filtrze nie wywala zadania; zalążek testów danych w `017_data_quality`.
- SQL → modelowanie: ziarno (`orders` vs `order_items`, SQL 01) — pierwsze zetknięcie z pojęciem Kimballa przed `013_data_modeling`.
- Linux → SQL: wielkość liter (`/Etc` vs `'returned'`) — ta sama pułapka, ale SQL milczy zamiast zgłosić błąd.
- Python → API → Airflow: skrypt → wywołanie API → zadanie w DAG-u (kod wyjścia! `network/LR-0010`).

## Dziennik konsultacji
### 2026-10-15 — założenie ścieżki
Uczeń podał stack, cel, czas, środowisko (cytat w skrócie: „uzupełnić podstawy z DE i IT i wzmocnić skilla z obecnych narzędzi
plus być gotowym na ewentualną zmianę pracy. Terminu brak"). Legacy kursy pomijamy. Utworzone: MISSION, CLAUDE.md, NOTES, RESOURCES,
roadmap.html, LR-0001/0002, szkice misji `002_linux` i `005_sql`, symlinki `/teach` w katalogach domenowych, `assets/` w root.
**Decyzja:** start fazy 1 — tor A `002_linux` lekcja 0001, tor B `005_sql` lekcja 0001. Pierwszy dzień: Linux.

**Doprecyzowania (2026-10-15, ta sama sesja):**
> mamy Airflow 3.2.2. Co do projektu, to chyba bardziej wolę coś związanego z e-commerce i marketingiem, bo tam chyba da się najwięcej wartośi biznesowej wyciągnąć

→ Projekt zmieniony z „potoku przewozów" na e-commerce + marketing na danych TheLook (LR-0003). Airflow 3.2.2 zapisany.
Zapytał też, czy Python zniknął ze ścieżki — nie (faza 4, tor A). Zaproponowałem przeniesienie `006_python` do fazy 3 (przed Gita) —
**czeka na jego decyzję**, plan na razie bez zmian.
> Tak, przenieś przed Git'a

→ Zrobione: `006_python` w fazie 3 (po `network`), `012_git` w fazie 4 (przed `004_api`). LR-0001 zaktualizowany.
> jeszcze w ramach kontekstu jako ściąga dla ciebie można się posłużyć tą roadmapą: https://roadmap.sh/data-engineer

→ Pobrałem listę tematów z repo roadmap.sh i zestawiłem z planem (sekcja „Pokrycie roadmap.sh”, LR-0004). Zmiany: warstwa architektury
na początku `013_data_modeling`, CI/CD w `012_git`, nowa domena `017_data_quality`, wątek bezpieczeństwa/RODO, opcjonalna faza 7.

### 2026-10-19 (pn) — konsultacja
Stan: Linux 0001 — odpowiedzi 01.1–01.5 wciąż otwarte (od 10-15). SQL 0001 — domknięta (krytyka zadań → zasady 12–13). Network wstrzymany.
Rozgrzewka zadana (z innych domen niż dzisiejszy Linux, zadania-decyzje, z podpowiedzią):
- R1 sieci (LR-0011, para „nazwa nieznana vs istniejąca nazwa złej maszyny"): task Airflow → `postgress:5432` vs `airflow-scheduler:5432`.
- R2 SQL (ziarno, bez podpowiedzi w tekście lekcji): `AVG(sale_price)` z `order_items` jako „średnia wartość zamówienia".
Odpowiedzi:
> a padnie na DNS, bo nie ma w ogóle takiej nazwy. b padnie na TCP, bo na tym porcie hosta 5432 nikt nie słucha. Na 5432 słucha postgres. W pierwszym przypadku może być coś w rodzaju can't resolve name, a w drugim przypadku komunikat TCP, że na porcie nikt nie słucha.
> ta liczba mierzy średnią cenę sprzedanych pozycji a nie średnią wartość zamówienia. Ta liczba powinna być niższa od prawdziwego AOV, bo w zamówieniu dana pozycja może występować wielokrotnie, co podnosi wartość zamówienia, ale sama cena się nie zmienia

Ocena: R1 ✓✓ — wzorzec „zła nazwa = DNS" (network LR-0011) przełamany na nowym przypadku, z podpowiedzią; oba szczeble i oba komunikaty trafne.
Następny raz: ta sama para **bez podpowiedzi**. R2 ✓ — miara (średnia cena pozycji) i kierunek (niżej) poprawne. Doprecyzowane: przyczyna to mianownik
(wierszy `order_items` ≥ zamówień); w TheLook nie ma kolumny `quantity` (sprawdzone `bq show`), każda sztuka = osobny wiersz; równość tylko,
gdy każde zamówienie ma 1 pozycję. Dobry punkt wejścia do SQL 0002 (agregacje: AOV = SUM / COUNT DISTINCT order_id).
Wynik rozgrzewki: 2/2.
**Decyzja:** poniedziałek = tor A. Reguła 2 blokuje Linux 0002, dopóki 01.1–01.5 otwarte →
sesja `002_linux`: najpierw odpowiedzi 01.1–01.5, potem lekcja 0002 (uprawnienia). Przy 90 min: SQL 0002 (agregacje) w osobnej sesji.
