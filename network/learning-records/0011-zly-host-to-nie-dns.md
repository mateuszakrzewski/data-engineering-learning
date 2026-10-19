# „Zły host" klasyfikuje jako DNS, nawet gdy nazwa istnieje

W treningu 04.3·2 (pgAdmin w kontenerze, host `localhost`, port 5432) wybrał **Padnie: DNS**, choć poprawnie jest TCP.
Uzasadnienie: „skoro serwis bazy danych nazywa się pgdatabase, to innej nazwy nie znajdzie i stąd DNS".
Czyli „to nie ta nazwa, której trzeba" → „DNS nie zadziała". A DNS pada tylko wtedy, gdy nazwy **nikt nie zna**.
Nazwa istniejąca, ale wskazująca złą maszynę, przechodzi DNS i pada na TCP (albo wyżej).

## Evidence
Jego słowa (2026-10-14) — i od razu sam się poprawił: „localhost powinien znaleźć, tylko nic tam nie słucha na porcie 5432".
Mechanizm zna; przy pytaniu zlał dwa pytania drabiny w jedno: „czy nazwa istnieje?" i „czy to właściwy cel?".
Drugi składnik: założenie, że w kontenerze istnieją **tylko** nazwy serwisów compose (zapomina o `/etc/hosts` z `localhost`).
Ten sam trening: wszystkie pytania „program na laptopie" ✓, wszystkie „program w kontenerze" ✗ (2/5) — reguła
„nazwę rozwiązuje maszyna, na której działa program" jeszcze nie działa, gdy miejsce programu ≠ miejsce, przy którym siedzi
(pgAdmin: przeglądarka na laptopie, połączenie z kontenera; tego lekcja nie wyjaśniła przed pytaniem — moja luka, dopisana).

## Implications
- Uczyć DNS jako pytanie **tak/nie o istnienie nazwy** — nie o to, czy nazwa jest „dobra". Zła, ale istniejąca nazwa = problem szczebla 2+.
- Pary do porównania w kolejnych treningach: nieznana nazwa (DNS) vs istniejąca nazwa złej maszyny (TCP refused) — ta sama zła intencja, inny szczebel.
- Aplikacje webowe (pgAdmin, Airflow UI, Kestra UI) to zawsze dwa programy: przeglądarka i serwer. Pytać: „kto naprawdę otwiera połączenie do bazy?".
- Pokrewne [[0009-slowa-klucze-zamiast-kto-mowi]] i [[0010-kod-wyjscia-to-nie-status]]: znów zlewanie dwóch rzeczy, które różnią się tym, **kto i gdzie**.

## Update 2026-10-14 (to samo popołudnie)
Pytanie kontrolne na nowym przypadku: pgAdmin → host `kestra` (istniejący serwis compose, słucha na 8080), port 5432.
Odpowiedź: „padnie na DNS, bo nie wykryje nazwy. Prawidłowa nazwa serwisu to kestra_postgres". Wzorzec się powtórzył,
mimo że chwilę wcześniej sam go poprawił — to nie pomyłka czytania, tylko trwały skrót myślowy „zła nazwa = DNS".
Pokazany prawdziwy kontrast z jego maszyny: `kestra` → `Connection refused` (TCP), `kestra-nie-ma` → `could not translate host name` (DNS).
Wracać w kolejnych rozgrzewkach parą: nazwa nieznana vs nazwa istniejąca złej maszyny.
