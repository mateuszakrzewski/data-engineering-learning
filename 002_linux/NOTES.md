# NOTES — 002_linux

Zasady lekcji: `../CLAUDE.md` (mają pierwszeństwo). Pełny profil ucznia i historia: `../network/NOTES.md`.
Wspólne komponenty: `../assets/` (lesson.css, quiz.css, quiz.js) — lekcje linkują `../../assets/…`.

## Preferencje (skrót, szczegóły w CLAUDE.md i network/NOTES.md)
- Pojęcia w lekcji przy pierwszym użyciu; nie zakładać wiedzy; przewidywanie tylko na tym, co wyjaśnione.
- Komendy po jednej: co robi · na co patrzeć · czego się spodziewać. Rozwijać skróty i flagi.
- Odpowiada w czacie po numerach `NN.k`; zapisuję cytaty dosłownie + ocenę osobno (Dziennik poniżej).
- Retrieval: 1–3 elementy, z podpowiedzią przy pierwszych powtórkach.

## Profil ucznia (Linux)
- Terminalem się posługuje (w sieciach: `ss`, `dig`, `curl`, `getent`, `docker`, `$?`), ale bez modelu systemu pod spodem.
- Zna już: `$?` i „0 = sukces" (network LR-0010, zamknięty), `/etc/hosts` i `/etc/resolv.conf` (network 04), `2>&1` mechanicznie (network 03.6 — konsekwencja ✗).
- Mosty do łatania tutaj: proces/PID, stdout/stderr, pipe, zmienne środowiskowe (network LR-0007).

## Plan domeny (wstępny, 5–6 lekcji + punkt kontrolny)
1. 0001 Gdzie co leży — drzewo, FHS, ścieżki, pliki ukryte ✅ zamknięta 2026-10-19
2. Uprawnienia — `ls -l` kolumna po kolumnie, `chmod`, `sudo`, „Permission denied" (np. `.env`, klucz SSH, wolumen Dockera)
3. Proces — program vs proces, PID, `ps`, `kill`, sygnały (most: `ss -p` z sieci)
4. Strumienie — stdin/stdout/stderr, `>`, `2>&1`, `|`, `$?` → co widzi Airflow (domknąć network 03.6)
5. Zmienne środowiskowe — `export`, `env`, `PATH`, `.env` (sekrety w potokach)
6. Logi i skrypt — `grep`, `tail -f`, `less`, `set -euo pipefail`
→ punkt kontrolny (mieszany test bez podpowiedzi, ≥ 80%). systemd/`journalctl` — przy lekcji 3 lub 6.

## Working notes
- (2026-10-15) Lekcja 0001 wydana. Fakty zweryfikowane na LEGION (Ubuntu 24.04.4): `ls /` z `*.usr-is-merged`; `/var/log` z rotacją
  (`auth.log.1`, `.2.gz`); `ls /Etc` → kod 2 (man ls: „serious trouble"); `getent` nieznana nazwa → kod 2 (man getent).
  W `~` ma `.aws`, `.docker`, `.bashrc` (zawartości nie czytałem). Airflow 3.2.2 compose: `./dags|logs|config|plugins` → `/opt/airflow/…` (docs).
  MISSION.md był szkicem — potwierdzenie w 01.1.
- 01.5: repo Airflow w pracy leży w `/mnt/c` (LR-0002). Wracać do tego przy uprawnieniach (lekcja 2) i w bloku Docker (bind mount).

## Postępy
| Lekcja | Data | Quiz / trening | Opanowane | Otwarte |
|---|---|---|---|---|
| 0001 gdzie co leży | 2026-10-15 → 10-19 | 01.3: 6/6 · 01.4 ✓ (z podpowiedzią) · 01.2 ✓ · 01.5 ✓ — **zamknięta** | mapa FHS; ścieżka względna vs bezwzględna; `..` | WSL vs kontener: dwa widoki tych samych plików (LR-0002) |

## Dziennik lekcji
<!-- Format: ### lesson NNNN → odpowiedzi (cytaty dosłowne, po numerach) → ocena → co z tego wynika. -->

### lesson 0001
(2026-10-15) Lekcja wydana: `lessons/0001-gdzie-co-lezy.html`. Ściąga `reference/mapa-systemu-plikow.html`, glosariusz `reference/glossary.html`.
Czekam na odpowiedzi 01.1–01.5.

**01.3 — trening „gdzie szukać?"** (2026-10-19, przez przycisk „Skopiuj dla nauczyciela")
> Linux 01 · Gdzie co leży — quiz: 6/6
> 01.3·1  [/var/log ✓]  Chcesz sprawdzić, kto ostatnio użył sudo na maszynie. Gdzie szukasz?
> 01.3·2  [/tmp ✓]  Skrypt robi pośredni zrzut zamówień do CSV, który po wysyłce do S3 nie jest już potrzeb…
> 01.3·3  [/opt/airflow/dags ✓]  Airflow 3.2.2 z oficjalnego compose. Gdzie w kontenerze leżą pliki DAG-ów?
> 01.3·4  [/mnt/c/Users ✓]  Jesteś w WSL i chcesz otworzyć plik z pulpitu Windows. Od czego zaczyna się ścieżka?
> 01.3·5  [~/.aws ✓]  AWS CLI nie widzi Twoich kluczy do S3. Który katalog sprawdzasz (pamiętając o ls -a)?
> 01.3·6  [/var ✓]  Stoisz w /var/log i wpisujesz cd ... Co wypisze potem pwd?

*Ocena:* 6/6. Zastrzeżenie: to rozpoznawanie (wybór z 3) tuż po lekcji — fluency, nie jeszcze storage. Mapa katalogów wygląda na
łatwą dla niego → kandydat na szybsze przejście do uprawnień. Test trwałości: za kilka dni 1 pytanie bez opcji (np. „gdzie Airflow w kontenerze trzyma logi?").

*Zmiana zadań (2026-10-19), wg nowych zasad 12–13 z `../CLAUDE.md`:* 01.2 „wklej wynik pwd/ls /Etc" → zadanie na decyzję
(`cd var/log` z `~` — względna vs bezwzględna, wyjaśnij i popraw). 01.5 → tylko opis, nic nie uruchamiać w pracy.
Czekam na 01.1, 01.2, 01.4, 01.5.

**01.4 — z pamięci: kod wyjścia `getent` dla nieznanej nazwy** (2026-10-19; wynik quizu wkleił ponownie — bez zmian, 6/6)
> Kod wyjścia tej komendy to 2.

*Ocena:* ✓, ale z podpowiedzią w treści pytania („ten sam co `ls /Etc`”), więc to przypomnienie z podpowiedzią, nie swobodne.
Brak uzasadnienia — nie wiadomo, czy pamięta znaczenie („nie znaleziono klucza”), czy tylko liczbę z podpowiedzi.
Następnym razem bez podpowiedzi i z pytaniem „co to znaczy dla potoku?”. Czekam na 01.1, 01.2, 01.5.

**Zbiorcze odpowiedzi 01.1, 01.2, 01.4, 01.5** (2026-10-19) — dosłownie:
> 01.1 tak MISSION.md jest ok
> 01.2 Kolega podał względną ścieżkę do katalogu zamiast bezweględnej. Stoi w swoim katalogu domowym a nie root, więc w jego katalofu domowym nie ma podkatalogów 'var/log'
> 01.4 - '2'
> 01.5 repo otwieram wybierając 'otwórz w cursor' z menu kontekstowego po kliknięciu prawym przyciskiem na katalog z repo. W Dockerze leży on więc pod /mnt/c/..

*Ocena:*
- 01.1 ✓ — misja potwierdzona, zdjęty dopisek SZKIC z MISSION.md.
- 01.2 ✓ mechanizm — sam wyprowadził: ścieżka względna liczy się od `~`, a tam nie ma `var/log`. Poprawki nie zapisał wprost
  (`cd /var/log` — dodać `/` na początku); wynika z odpowiedzi, dopowiedziałem. Terminologia: „root" użył w sensie korzenia `/` —
  rozróżniłem: korzeń `/` vs użytkownik `root` i jego dom `/root` (to było w tabeli lekcji).
- 01.4 ✓ (ten sam wynik co wyżej).
- 01.5 ✓ rozumowanie — od sposobu otwierania (Eksplorator Windows → Cursor) doszedł do tego, że repo leży na dysku C:, czyli w WSL `/mnt/c/…`.
  Zlał „w WSL" z „w Dockerze": w WSL repo to `/mnt/c/…`, a w kontenerze ten sam katalog jest podpięty pod `/opt/airflow/dags`. Dwa widoki tych samych plików.
  **Realne znalezisko z pracy → LR-0002.**

*Wniosek z lekcji 0001:* mapa i ścieżki opanowane na poziomie lekcji (quiz 6/6, 01.2 z mechanizmem). Lekcja zamknięta.
Spacing: w lekcji 0002 jedno pytanie bez opcji (np. „gdzie w kontenerze Airflow są logi?") + ścieżka względna w nowym przypadku.

