# Ścieżka nauki Data Engineeringu — zasady dla każdej sesji

Ten katalog to jedna, spójna ścieżka nauki. Katalog główny = **nadzorca** (plan, rytm, konsultacje).
Podkatalogi (`network/`, `002_linux/`, `005_sql/`, …) = **workspace'y domenowe** w formacie skilla `/teach`
(MISSION.md, NOTES.md, RESOURCES.md, lessons/, reference/, learning-records/).

## Gdzie co jest
- `MISSION.md` — misja nadrzędna. Misje domenowe są jej podzbiorem.
- `NOTES.md` — rytm, kolejność torów, **stan domen**, dziennik konsultacji. Czytaj na początku każdej sesji.
- `roadmap.html` — mapa ścieżki dla ucznia. Aktualizuj, gdy zmienia się stan domeny.
- `learning-records/` — decyzje i wnioski **międzydomenowe**. Wnioski jednej domeny idą do jej `learning-records/`.
- `assets/` — wspólne komponenty (lesson.css, quiz.css, quiz.js). Lekcje w `NNN_domena/lessons/` linkują `../../assets/…`.
  `network/` ma historyczną własną kopię w `network/assets/` — tam zostaje.

## Zasady stałe dla każdej lekcji (od ucznia, mają pierwszeństwo)
1. **Pojęcia wyjaśniane w lekcji, przy pierwszym użyciu**, pełnym zdaniem. Glosariusz to archiwum do powtórek, nie odsyłacz.
2. **Nie zakładać wiedzy.** Jeśli lekcja na czymś się opiera, mówię to wprost, zanim z tego skorzystam.
3. **Przewidywanie tylko na tym, co już wyjaśnione** lub opanowane. O nowościach: „uruchom i obserwuj".
4. **Komendy po jednej**, każda z: co robi · na co patrzeć w wyniku · czego się spodziewać (przykładowy wynik).
5. **Rozwijać każdą komendę i flagę**: od czego skrót, co znaczy każda litera, co znaczy każda kolumna wyniku.
6. **Retrieval dawkowany**: 1–3 elementy, z podpowiedzią przy pierwszych powtórkach, rozłożony na kolejne lekcje.
7. **Sekcja „Odpowiedz w czacie"** z numerowanymi zadaniami (`NN.k`). Nic oczekiwanego nie chowa się w notce.
   Uczeń odpowiada w czacie, nauczyciel zapisuje: cytaty dosłownie + ocena osobno w `NOTES.md` domeny.
8. **Przycisk „Skopiuj dla nauczyciela"** — daje go `assets/quiz.js`; nie wyłączać.
9. Krótko: jedna namacalna wygrana na lekcję. Przykłady z jego stacku (Snowflake, **Airflow 3.2.2**, Postgres, S3, Git, WSL)
   i z domeny **e-commerce i marketingu** (zamówienia, klienci, kanały, lejek), najlepiej na danych TheLook z projektu (LR-0003).
   Logistyka (8 lat doświadczenia) jako fulfillment: wysyłka, dostawa, zwroty.
10. Język polski; terminy techniczne po angielsku. Nie zasypywać formularzami — pytać krótko, w czacie.
11. **Nowa lekcja = nowa sesja.** Wszystko ważne musi trafić do repo przed końcem sesji.
12. **Zadania uczą decyzji, nie przepisywania** (od ucznia, 2026-10-17). Żadnych zadań „wklej liczbę, którą podałem w lekcji".
    Zadanie = wyprowadź, porównaj, zdecyduj albo wyjaśnij — na przypadku biznesowym. Jeśli zadanie wymaga reguły lub wzoru, **lekcja go uczy wcześniej**.
    Przykładowy wynik przy komendzie (zasada 4) służy orientacji; zadanie nie może polegać na jego odtworzeniu.
13. **Środowiska:** prywatne konto BigQuery (TheLook, syntetyczne dane) — tak. Firmowe BQ/Snowflake i ich źródła — nigdy nie podpinać do prywatnego sprzętu.
    Pytania „z pracy" tylko koncepcyjne (opisz, nie uruchamiaj).

## Protokół sesji
**Konsultacja (katalog główny, `/teach konsultacja`):**
1. Przeczytaj `NOTES.md` (stan domen, dziennik), potem `NOTES.md` → `## Postępy` i najnowsze learning-records aktywnych domen.
2. Zadaj **rozgrzewkę: 2–3 pytania z pamięci** z wcześniejszych lekcji, najlepiej z *innej* domeny niż dzisiejsza (spacing + interleaving).
3. Zdecyduj wg reguł z `NOTES.md` → `## Rytm`: który tor, który katalog, która lekcja. Powiedz to wprost z komendą startu.
4. Zapisz wpis w `NOTES.md` → `## Dziennik konsultacji` (data, wynik rozgrzewki, decyzja).

**Lekcja domenowa (w podkatalogu, `cd NNN_domena && claude` → `/teach lesson NNNN`):**
1. Przeczytaj `../NOTES.md` (sekcje Rytm i Stan domen) i `NOTES.md` domeny.
2. Po lekcji: aktualizuj `NOTES.md` domeny (Dziennik, Postępy, Profil), learning-records domeny,
   **oraz wiersz domeny w `../NOTES.md` → `## Stan domen`** (ostatnia lekcja, data, co otwarte).
3. Gdy lekcja dotyka innej domeny (np. Docker → sieci), dopisz to do `## Mosty` w `../NOTES.md`.
