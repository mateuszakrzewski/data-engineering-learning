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
**Dwa tory naraz + angielski codziennie.** Tor A = fundament IT (terminal, system, infrastruktura). Tor B = dane (SQL, bazy, modelowanie, transformacje).

**Progi czasu (decyzja ucznia 2026-10-20, LR-0005):**
| Masz | Blok |
|---|---|
| 45 min | konsultacja 5′ + lekcja **toru dnia** |
| 90 min | + **angielski ~30–40′** (codziennie, nie tylko w piątek) |
| 120 min | + krótka lekcja **drugiego toru** |

**Tydzień (wzorzec, nie dogmat) — tor dnia:**
| Dzień | Tor dnia |
|---|---|
| Pn | A |
| Wt | B |
| Śr | A |
| Czw | B |
| Pt | **przegląd tygodnia** (mieszany quiz z obu torów) + angielski mówiony (stand-up/demo tygodnia) |
| Weekend | opcjonalnie: projekt portfolio / zaległe ćwiczenia |

**Angielski codzienny** (sesja w `english/`): materiał z lekcji dnia, nie osobny program — czytanie fragmentu głównego źródła lekcji
+ streszczenie/stand-up po angielsku o tym, czego się nauczył. Daje spacing technicznego materiału przez język i przecina domeny.

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
| 005_sql | ▶ w toku | 0003 jeden do wielu (JOIN) — zamknięta | 2026-10-22 | quiz 3/3, dopytania 03.4b/03.5b ✓. Do powtórki: AOV ≠ `AVG(sale_price)` (błąd w 03.4), `ROUND(x, 2)`. Brak `bq` na LEGION. Następna: 0004 NULL (+ LEFT JOIN), start od klucza z `komentarz` (01.6) |
| english | ▶ start (codziennie przy 90′, LR-0005) | — | — | cel: dokumentacja + spotkania; MISSION szkic do potwierdzenia na 1. sesji |
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
- SQL → modelowanie / data quality (SQL 03, 2026-10-22): relacja jeden do wielu = wymiar → fakt (`users` → `orders` → `order_items`); test „COUNT(*) = COUNT(DISTINCT klucz)" przed i po JOIN = ręczny odpowiednik testu `unique` w dbt (`017_data_quality`, `dbt`).
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

### 2026-10-20 (wt) — konsultacja
Stan: Linux 0001 zamknięta 10-19, lekcja 0002 jeszcze niewydana. SQL 0001 zamknięta (komplet odpowiedzi). Network wstrzymany. Reguła 2 nic nie blokuje.
Zauważone: w git status usunięte symlinki `NNN_domena/.claude/skills/teach` → na prośbę ucznia przywrócone (`git checkout`), wszystkie 12 wskazują na `.agents/skills/teach`.
Rozgrzewka zadana (z innych domen niż dzisiejszy SQL, bez podpowiedzi):
- R1 sieci (LR-0011, ta sama para **bez podpowiedzi**, nowy przypadek): DAG ładuje zamówienia do Postgresa; host `pg-orders` vs `airflow-webserver`, port 5432.
- R2 Linux (spacing 0001, bez opcji): logi tasków Airflow w kontenerze + `cd opt/airflow/logs` wpisane w `/`, a potem w `~` — co się stanie i dlaczego.
Odpowiedzi (po `/exit` i powrocie, ta sama data):
> R1
> a) błąd DNS brak takiej usługi
> b) błąd TCP, nikt nie słucha na tym porcie
> Poznam po słowach kluczowych jak can't find, 'name, lub TCP
> R2
> a) wejdę do katalogu
> b) rzuci kod błędu 2, że nie ma takiej ścieżki

Ocena: R1 ✓ — oba szczeble trafne **bez podpowiedzi** (wzorzec LR-0011 utrwalony). Odróżnianie po słowach kluczowych zbyt ogólne. Dopowiedziane:
w b) log zawiera **adres IP** (`connection to server at "airflow-webserver" (172.x.x.x), port 5432 failed: Connection refused`), czyli nazwa już się rozwiązała.
W a) jest `could not translate host name "pg-orders" to address`, bez IP. Brak IP w logu = DNS, jest IP = TCP.
R2 ½ — a) ✓, b) skutek ✓, ale brak „dlaczego" (ścieżka względna liczona od bieżącego katalogu, `~` = `/home/airflow`). Kod wyjścia nietrafny:
`cd` w bashu zwraca **1** (sprawdzone), 2 zwraca `ls` albo `cd` w `sh`/dash. Prawdopodobne pomieszanie z errno 2 = ENOENT („No such file or directory").
Wynik: 1,5/2. Do spacingu: „dlaczego" przy ścieżkach względnych (Linux) oraz `$?` różne dla różnych komend → most do Linux 0002 / skryptów.
**Decyzja:** wtorek = tor B → sesja `005_sql`, lekcja 0002 (agregacje: AOV = SUM / COUNT DISTINCT order_id; wejście kluczem z R2 z 10-19).
Przy 90 min: `002_linux` 0002 (uprawnienia) w osobnej sesji — zaległa z poniedziałku.

**Zmiana rytmu (2026-10-20, ta sama sesja, prośba ucznia):**
> zastanawiam się, czy nie dać angielskiego codziennie jako dodatek do toru podstawowego, jeśli będę miał 90 minut. Umiejętności techniczne są konieczne, ale angielski to też podstawa i wymaga najwięcej treningu. Krótką lekcję z innego toru dorzucaj jeśli będę miał 120 minut dostępnego czasu. Dzięki temu pozwoli mi to pchać postępy równolegle, a podejrzewam, że z czasem te techniczne domeny zaczną się przecinać i będę ćwiczył wszystko na raz lub mix poszczególnych elementów z kilku domen

→ Przyjęte (LR-0005): 45′ tor dnia · 90′ + angielski · 120′ + drugi tor. Angielski budowany na lekcji dnia. Koszt: drugi tor rusza się wolniej
(dotąd „+ tor B" przy 90′) — każdy tor ~2 lekcje/tydz. przy 90′. Zaktualizowane: Rytm, roadmap.html, english/MISSION.md (Constraints).
**Dziś (wt):** SQL 0002; przy 90′ → `english/` (pierwsza sesja: potwierdzenie misji + angielski na materiale SQL 0002); Linux 0002 dopiero przy 120′ albo jutro (śr = tor A).


### 2026-10-22 (czw) — konsultacja
Stan: SQL 0002 zamknięta 10-21; dopytania 02.2, 02.3 i retrieval 02.4·3 przeniesione do 0003 (decyzja ucznia). Linux 0002 wciąż niewydana
(śr 10-21 poszła na domknięcie SQL 0002). `english/` — pierwsza sesja jeszcze się nie odbyła. Network wstrzymany (ostatnie pytanie 10-20 → kolejne ~10-23/25).
Reguła 2 nic nie blokuje (otwarte pytania z 0002 są wpisane do 0003).
Rozgrzewka zadana (inne domeny niż dzisiejszy SQL, bez podpowiedzi, zadania-decyzje):
- R1 Linux (spacing 0001 + brakujące „dlaczego" z 10-20): BashOperator domyślnie startuje w katalogu tymczasowym pod `/tmp`; `cd opt/airflow/logs` — uda się? dlaczego? poprawka.
- R2 Linux × SQL × sieci (kod wyjścia, „co to znaczy dla potoku", bez podpowiedzi z 01.4): dwa sprawdzenia przed ładowaniem —
  `getent hosts pg-orders` (nazwy nie ma) vs `SELECT … WHERE status = 'returned'` (małe litery). Które zatrzyma DAG, które przepuści problem, dlaczego.
Odpowiedzi:
> R1
> Nie uda się, bo komenda nie znajdzie szukanego katalogu. Tego zasobu tam nie ma, a wywołuje względną ścieżkę. Żeby zadziało trzeba podać ścieżkę bezwzględną z / na początku
> R2
> A) DAG padnie na DNS, bo nie ma takiego hosta
> B) Jeśli DAG doszedłby do zapytania, to SQL przepuści dalej, tylko zwróci 0 wierszy, bo nie ma takiego statusu
>
> Propozycja na piątek może być

Ocena: R1 ✓ — tym razem jest „dlaczego" (ścieżka względna + w katalogu startowym nie ma takiego podkatalogu) i poprawka (`/` na początku → `cd /opt/airflow/logs`).
Nie nazwał wprost, że względna liczy się od bieżącego katalogu (`/tmp/airflowtmpXXXX`), ale mechanizm z 10-20 domknięty. 
R2 ½ — oba skutki trafne (A zatrzymuje, B przepuszcza; sam zauważył kolejność zadań — B nie ruszy, gdy A padnie). Brak tego, o co prosiło zadanie:
kodu wyjścia (`getent` → 2, ≠ 0 → task failed; zapytanie z 0 wierszami → 0 → success) i konsekwencji dla potoku (cicho pusty raport/tabela → potrzebny test „czy są wiersze").
„Padnie na DNS" — skrót myślowy z sieci; sam `getent` nie rzuca błędu, tylko zwraca 2, a Airflow czyta kod. Dopowiedziane.
Wynik: 1,5/2. Spacing: kod wyjścia jako **mechanizm** decyzji Airflow (nie tylko „padnie / przejdzie") — w Linux 0002 (`$?` po `chmod`/brak uprawnień = 1).
**Decyzja:** czwartek = tor B → `005_sql` lekcja 0003 (JOIN), otwarcie: dopytania 02.2/02.3 + 02.4·3 w nowej formie. Przy 90′: pierwsza sesja `english/`.
**Piątek 10-23 (zgoda ucznia):** zamiast pełnego przeglądu tygodnia → `002_linux` lekcja 0002 (uprawnienia) + krótki mieszany quiz w rozgrzewce konsultacji.
