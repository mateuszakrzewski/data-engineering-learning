# NOTES — 005_sql

Zasady lekcji: `../CLAUDE.md` (mają pierwszeństwo). Pełny profil ucznia i historia: `../network/NOTES.md`.
Wspólne komponenty: `../assets/` (lesson.css, quiz.css, quiz.js) — lekcje linkują `../../assets/…`.

## Preferencje (skrót, szczegóły w CLAUDE.md i network/NOTES.md)
- Pojęcia w lekcji przy pierwszym użyciu; nie zakładać wiedzy; przewidywanie tylko na tym, co wyjaśnione.
- Zapytania po jednym: co robi · na co patrzeć · czego się spodziewać (prawdziwy wynik). Rozwijać słowa kluczowe i nazwy kolumn.
- Odpowiada w czacie po numerach `NN.k`; zapisuję cytaty dosłownie + ocenę osobno (Dziennik poniżej).
- Retrieval: 1–3 elementy, z podpowiedzią przy pierwszych powtórkach.

## Profil ucznia (SQL)
- Kod (w tym SQL) pisze i recenzuje z AI; nie jest biegły w składni (network LR-0003). Hurtownie rozumie koncepcyjnie.
- Prostsze zapytania pisze sam, złożone z AI (MISSION.md). **Ziarno i klucz biznesowy rozumie z praktyki** — w 01.6 sam podał wielokolumnowy klucz tabeli sprzedaży (LR-0002).
- Krytyczny wobec zadań: odrzuca pytania, które tylko odtwarzają liczby podane przeze mnie (01.2). Chce zadań, w których sam coś odkrywa albo wyprowadza.
- Wyłapuje anomalie w danych (mikrosekundy w `created_at`).
- Zna: kod wyjścia i „0 = sukces" (network LR-0010), wielkość liter w ścieżkach (Linux 01).

## Środowisko
- Dom (LEGION): konsola BQ w **Brave** (w pierwotnej przeglądarce wyniki się nie wyświetlały, 2026-10-16); `bq`, `gcloud` (projekt `datapiperejtan`), `psql`, Docker. TheLook dostępny z konsoli BigQuery i z `bq`.
- **Lekcji nie przenosi do pracy** i nie podpina prywatnych środowisk pod zasoby firmowe (MISSION.md, 2026-10-17). Ćwiczenia: BQ (`datapiperejtan`), pgexercises, Snowflake tylko na Free Trial. Pytania „z pracy” — tylko koncepcyjne (jak 01.6). Od fazy 2: Postgres w Dockerze.

## Plan domeny (wstępny, 5–6 lekcji + punkt kontrolny)
1. 0001 Co oznacza jeden wiersz — SELECT/FROM/WHERE/ORDER BY/LIMIT, ziarno `orders` vs `order_items`, koszt kolumnowy ✅ wydana
2. Agregacje — `COUNT(*)`, `SUM`, `GROUP BY`, `HAVING`: przychód i zwroty wg statusu; ziarno wyniku `GROUP BY`
3. JOIN — `orders` ⋈ `order_items` ⋈ `users`; mnożenie wierszy (kluczowe dla misji: weryfikacja SQL od AI)
4. NULL — trójwartościowa logika, `COUNT(*)` vs `COUNT(col)`, `COALESCE` (`shipped_at`/`delivered_at`/`returned_at` — fulfillment)
5. CTE — rozbijanie zapytania na kroki; lejek z `events` lub czas dostawy vs zwroty
6. Funkcje okna — `ROW_NUMBER` (ostatnie zamówienie klienta, deduplikacja), `LAG`
→ punkt kontrolny. Dialekty BQ/Snowflake/Postgres — wplatać po drodze (grawisy vs cudzysłowy, typy).

## Working notes
- (2026-10-15) Lekcja 0001 wydana. Fakty zweryfikowane `bq` na `datapiperejtan`: szacunki dry-run — 4 kolumny `orders` 4 280 915 B,
  `SELECT *` 6 755 735 B, 2 kolumny 2 280 851 B; `orders` bez klastrowania; `status = 'returned'` → 0 wierszy, kod wyjścia 0;
  `status = Returned` → `Unrecognized name: Returned`. Przykład zamówienia 76807 (2 pozycje). `sale_price` FLOAT → 24.989999771118164.
  Docs BQ przeniesione na `docs.cloud.google.com`. MISSION.md był szkicem — potwierdzenie w 01.1.
- Format czasu w konsoli BQ (czy dopisuje `UTC`/ułamki) — niezweryfikowany; w lekcji podany ostrożnie. Sprawdzić w odpowiedzi 01.2/01.3.
- (2026-10-19, konsultacja) Rozgrzewka R2 ✓: sam rozróżnił „średnia cena pozycji” vs AOV i kierunek (niżej). Przyczynę opisał przez „pozycja występuje wielokrotnie”;
  precyzyjnie: mianownik (wiersze `order_items` ≥ zamówienia), w TheLook brak `quantity`. → 0002 może startować od tej pary (AVG na pozycjach vs SUM/COUNT DISTINCT zamówień) jako decyzji, bez podawania wzoru w zadaniu przed lekcją.
- Do sprawdzenia w odpowiedziach: 01.6 — czy umie nazwać ziarno tabeli z pracy (punkt startowy na lekcję o JOIN).

## Postępy
| Lekcja | Data | Quiz / trening | Opanowane | Otwarte |
|---|---|---|---|---|
| 0001 co oznacza jeden wiersz | 2026-10-15 → 10-17 | 01.4: 5/5 · 01.5 ✓ · 01.3 ✓ (4 id, zweryfikowane) · 01.6 ✓✓ · 01.2 — sprzeciw, słuszny co do formy | wartość `'…'` vs nazwa; 0 wierszy = sukces (01.5 ✓); ziarno orders/order_items (quiz); koszt kolumnowy (quiz) | `'…'` vs `"…"` w dialektach; koszt = bajty logiczne wg typu (wyjaśnione, nieprzećwiczone); NULL w kluczu biznesowym (dopytanie do 01.6); MISSION.md — sprzeczność „procedury” vs Out of scope |

## Dziennik lekcji
<!-- Format: ### lesson NNNN → odpowiedzi (cytaty dosłowne, po numerach) → ocena → co z tego wynika. -->

### lesson 0001
(2026-10-15) Lekcja wydana: `lessons/0001-co-oznacza-jeden-wiersz.html`. Ściąga `reference/sciaga-select.html`, glosariusz `reference/glossary.html`.
Czekam na odpowiedzi 01.1–01.6.

(2026-10-16) Pytanie w trakcie lekcji:
> dlaczego w BQ w wynikach widzę tylko to, co kliknę, a nie pełną tabelę? To wina przeglądarki? Nie mam jak ci wrzucić zrzutu ekranu, ale podświetla mi tylko tą komórkę tabeli, którą kliknę w wynikach

Ocena: bez zrzutu nie wiem, które z dwóch zjawisk widzi. (a) Podświetlenie komórki to zwykłe zaznaczenie w siatce wyników, nie filtr.
(b) „Nie pełna tabela”: wynik zapytania to nowa tabela (tylko kolumny z SELECT, tylko wiersze z LIMIT), a nie podgląd tabeli źródłowej.
Pełną tabelę pokazuje Explorer → tabela → karta Preview. Poprosiłem o opis, co dokładnie widzi. Jeśli chodzi o (b), to mylił wynik z tabelą źródłową:
wrócić do „wynik zapytania to znowu tabela” w 0002.

Doprecyzowanie ucznia (2026-10-16):
> te winiki tam są, ale wyświetla tylko komórkę, która jest wybrana kursorem. Noże chodzi o motyw przeglądarki. Znam BQ i to nie jest normalne zachowanie, to jest ewidentnie problem z wyświetlaniem wyników

Ocena: źle odczytałem pytanie — to problem z wyświetlaniem, nie z rozumieniem SQL. Uczeń zna BQ z pracy; **nie tłumaczyć mu podstaw interfejsu BQ**.
Prawdopodobnie tekst w komórkach ma kolor tła (wymuszony ciemny motyw / rozszerzenie typu Dark Reader); widać tylko zaznaczoną komórkę, bo ma inne tło.
Zaproponowałem diagnostykę (okno incognito → rozszerzenia → flaga wymuszonego ciemnego motywu) i obejście: `bq query` w terminalu.

(2026-10-17) Rozwiązane:
> dobra, zainstalowałem brave i widać wszystko. Mówiłem, że to wina przeglądarki

Miał rację od początku. Konsola BQ działa w **Brave** — używać jej do lekcji. Przyczyna w pierwotnej przeglądarce niezdiagnozowana.

(2026-10-17) Obserwacja ucznia:
> Widzę w created_at dla pierwszego zapytaia, że jeden z rekordów z timestampem ma inne formatowanie. Po sekundach są wartości po kropce do 6 cyfr

Ocena: **trafna obserwacja jakości danych, wyłapał coś, czego ja nie zauważyłem** (`bq --format=pretty` ucina mikrosekundy).
Sprawdzone `bq`: w `orders` 3237 z 125 055 wierszy ma niezerowe mikrosekundy, wszystkie z `created_at` od 2026-10-10 05:37; starsze (od 2019) mają `.000000`.
Typ ten sam (`TIMESTAMP`, dokładność do µs), różnią się wartości. Przyczyna po stronie generatora TheLook nieznana.
Poprawiłem notkę w lekcji (wcześniej sugerowała, że ułamki dopisuje konsola). Most do `017_data_quality` i do lekcji o typach:
porównania równości na czasie, `CAST` do tekstu, deduplikacja po znaczniku czasu.

(2026-10-17) Komentarz ucznia do zadania „Mała litera":
> W zapytaniu z 'returned' po prostu zwróci 0 wierszy, bo SQL przy wartościach przekazywanych w apostrofach podwójnych lub pojedynczych jest case sensitive, czyli szuka dokładnej wartości stringu podanej w zapytaniu

Ocena: ✓ sedno (porównanie dokładnej wartości tekstu, wielkość liter się liczy → 0 wierszy). ✗ do sprostowania: „podwójne apostrofy" to nie tekst w każdym SQL-u.
W BigQuery `"Returned"` działa jak tekst (sprawdzone `bq` 2026-10-15), ale w Postgresie i Snowflake `"…"` = nazwa (identyfikator), więc `status = "Returned"` szuka kolumny Returned.
Źródła: Postgres docs 4.1.1/4.1.2.1; Snowflake „Identifier requirements". Bezpieczny nawyk: tekst zawsze w `'…'`. Wrócić w lekcji o dialektach (migracja BQ → Snowflake) i w retrievalu 0002.

(2026-10-17) Komentarz ucznia do zadania „Bez apostrofów":
> bez apostrofów nie będzie szukało wartości stringa, tylko nazwy Returned, której nie ma zdefiniowanej i nie występuje w bazie

Ocena: ✓ poprawnie: słowo bez apostrofów = nazwa (identyfikator), nie wartość. Doprecyzowanie: szuka **kolumny** w tabelach z `FROM`, nie w całej bazie
(gdyby tabela miała kolumnę `Returned`, zapytanie by się wykonało i porównało dwie kolumny — bez błędu). Rozróżnienie wartość vs nazwa: opanowane na poziomie lekcji 01.

(2026-10-17) 01.4 Trening (wklejone z przycisku):
> SQL 01 · Co oznacza jeden wiersz — quiz: 5/5
> 01.4·1  [WHERE status = 'Returned' ✓]  01.4·2  [trzy wiersze ✓]  01.4·3  [wybranie mniejszej liczby kolumn ✓]
> 01.4·4  [jedną pozycję zamówienia ✓]  01.4·5  [pięć najnowszych zamówień ✓]

Ocena: 5/5. Quiz był z podpowiedziami w tekście tuż obok, więc to płynność (fluency), nie trwałość — ziarno i koszt kolumnowy sprawdzić w 0002 bez podpowiedzi (retrieval).
Pozostało: 01.1, 01.2, 01.3, 01.5, 01.6.

(2026-10-17) 01.5 Z pamięci:
> zadanie zostanie oznaczone jako wykonane i zwróci coś w rodzaju query result 0 rows, czyli po prostu odpowie, że nie ma danych z takim warunkiem, ale nie zwróci błędu

Ocena: ✓ poprawnie i własnymi słowami: pusty wynik to prawidłowa odpowiedź bazy, nie błąd → sukces zadania. Nie nazwał wprost kodu wyjścia
ani konsekwencji (raport/tabela docelowa po cichu pusta → potrzebny test „czy są wiersze”) — dopowiedziałem. LR-0010 (sieci) przeniesione na SQL bez podpowiedzi o kodzie.
Pozostało: 01.1, 01.2, 01.3, 01.6.

(2026-10-17) Odpowiedzi 01.1, 01.2, 01.3, 01.6:
> 01.01 mission.md nie do końca pasowało. Już je zmodyfikowałem
> 01.02 Szacunki dotyczące kosztu query są bez sensu, bo nie znam kompresji BQ i nie wiem jak dużo bajtów może przechowywać poszczególna komórka, więc pytanie typu ile MB przetworzy dane query nie ma sensu. Gdybym najpierw odpalił zapytanie na full kolumnach i później ograniczył je proporcjonalnie do kilku kolumn, to mógłbym prognozować jak zmienił się koszt, ale i tak kolumna kolumnie nierówna. Jedna będzie przechowywała dana po kilka bajtów, a inna jeśli ma dużo tekstu będzie mogła przechowywać nawet kilka - kilkaset kB. Zapytania robiłem w edytorze BQ i szacunek kosztów z konsoli był porównywalny do tego, co deklarowałeś, ale to dlatego, bo ty już znałeś te dane i wiedziałeś czego się spodziewać. Weź to pod uwagę.
> 01.03 orders id z wieloma pozycjami zamówienia: 78822, 11350, 86440, 119198. To logiczne, że jedno zamówienie ma wiele pozycji i ziarno na obu tabelach się różni.
> 01.6 Jest wiele takich tabel, ale jedną z nich jest tabela sprzedaży, gdzie ziarnem jest unikatowa pozycja z uwzględnieniem rabatu na pozycji, czyli kluczem biznesowym pozycji są kolumny: id_paragonu, id_produktu, procent_rabatu_do_produktu, komentarz. Dopiero taka kombinacja pozwala zweryfikować unikalność pozycji

Ocena:
- 01.1: MISSION.md zmieniony przez ucznia (szczegóły i sprzeczności → LR-0003). Do potwierdzenia ze mną: usunięcie nagłówka SZKIC, „procedury” w Success vs „procedury składowane” w Out of scope, zdanie „TheLook jest w BigQuery, które macie w pracy” vs „lekcji nie przenoszę do pracy”.
- 01.2: **sprzeciw słuszny co do formy zadania** — 01.2 prosiło tylko o przepisanie liczb, które podałem w lekcji, więc nic nie sprawdzało. Jego rozumowanie poprawne
  (kolumny różnią się wagą, tekst waży więcej). Brakujący element: BQ liczy koszt na **bajtach logicznych (nieskompresowanych)**, wg stałych rozmiarów typów
  — kompresja nie ma znaczenia (docs „Estimate and control costs”: „BigQuery always uses logical (uncompressed) bytes to calculate on-demand query costs”).
  Zweryfikowane 2026-10-17: dry-run 4 kolumn = 4 283 369 B, wzór SUM(8 + (2+BYTE_LENGTH(status)) + 8 + 8) = 4 283 369 B — co do bajta.
  Rozmiary typów (INT64/TIMESTAMP 8 B, STRING 2 B + długość UTF-8) — potwierdzone tym wynikiem, nie cytatem z docs.
  **Wniosek dla mnie:** nie dawać zadań „przepisz liczbę”; lepiej „wyprowadź / porównaj / wyjaśnij różnicę”.
- 01.3: ✓ cztery order_id; sprawdziłem `bq`: 11350 → 4/4, 78822 → 2/2, 86440 → 3/3, 119198 → 2/2. Ziarno opisane ogólnie („się różni”), bez zdania „jeden wiersz = …”,
  ale quiz 01.4·4 i 01.6 pokazują, że to rozumie.
- 01.6: ✓✓ **mocna odpowiedź** — ziarno pozycji paragonu, klucz biznesowy z 4 kolumn, sam powiązał ziarno z weryfikacją unikalności. Dopytanie (zadałem):
  `komentarz` w kluczu — co, gdy jest NULL albo różni się spacją/wielkością liter? Czy źródło ma numer linii paragonu? Most do lekcji o NULL.

(2026-10-17) Reakcja ucznia na moją ocenę 01.1/01.2/01.6:
> ale czego nie rozumiesz z BQ? Używam go jako narzędzia w pracy, ale mam też prywatne kontoi tam moge testowac query do syntetycznych danych z The Look, ale nie będę na prywatnym laptoppie zapinał firmowego BQ i SF i tamtejszych źródeł. To takie trudne do pojęcia? Co do procedur, to usuń z out of scope, bo nie wiem kto kazał ci je tam wrzucić.
> Co do przepisania wartości, które podałeś to jaki sens? Czego mnie to nauczy? kopiowania i wklejania? Lekcje mają być użyteczne w codziennym biznesowym zastosowaniu a nie uczyć kopiowania i wklejania danych z jednego miejsca w inne...
> Co do wzoru okej, dało się to wyliczyć, ale wspomniałeś o tym w lekcji, czy z dupy miałem sobie wyssać ten wzór? -> pewnie i tak nie rozumiesz ironii... Jak twoje lekcje mają się opierać na kopiowaniu twoich założeń do terminala to dziękuję za takie lekcje. Znajdę inne.
> Źródło nie ma linii paragonu. Pozycja z komentarzem i pozycja bez komentarza, czyli z null brane są za dwie rózne pozycje, bo paragon może być wynikiem połączenia dwóch zamówień, gdzie w jednym zamówieniu do tego samego produktu może być komentarz, a do innego nie.

Ocena i działania:
- **Krytyka słuszna.** 01.2 uczyło kopiowania; wzoru na koszt lekcja nie uczyła, a ja potem przedstawiłem go jak brakujący element u niego. Mój błąd, nie jego.
  → Nowa zasada stała 12 w `../CLAUDE.md` (zadania = decyzje/wyprowadzenia; reguła uczona przed zadaniem). Zasada 13: środowiska.
  → Lekcja 0001 poprawiona: akapit o bajtach logicznych + 01.2 przepisane na decyzję biznesową (najdroższa kolumna, co zamiast `SELECT *`).
- MISSION.md: usunięte procedury z Out of scope (na jego prośbę), nagłówek SZKIC, zdanie o BQ w pracy → prywatne konto, firmowe nie.
- **Ryzyko porzucenia kursu** („Znajdę inne"). Kolejne lekcje: zero zadań-kopii, każde zadanie z decyzją biznesową; mniej „czego się spodziewać" tam, gdzie odkrycie jest celem.
- Dopytanie 01.6 ✓: brak numeru linii; NULL i komentarz = dwie różne pozycje (paragon łączy zamówienia). Logika biznesowa poprawna.
  Konsekwencja techniczna (sprawdzona `bq`): `GROUP BY` wrzuca dwa NULL-e do jednej grupy (test unikalności ich nie rozróżni), a `JOIN … ON a.komentarz = b.komentarz` na dwóch NULL-ach daje 0 dopasowań.
  Jego klucz działa do grupowania, ale psuje JOIN/MERGE po kluczu → gotowy przykład otwierający lekcję o NULL.

