# Kolejność ścieżki: dwa tory, Linux → Docker przed powrotem do sieci, Python przed Gitem

Ścieżka jest dwutorowa: tor A (fundament IT) i tor B (dane), z angielskim w tle. Najwyżej dwie domeny naraz, bo pamięć robocza ucznia
jest mała, a przeplatanie dwóch *różnych* torów daje spacing bez mieszania podobnych pojęć.

## Evidence
- `network/` wstrzymane po lekcji 04 z wyraźnym sygnałem: 04.3 — przypadki „program na laptopie" 2/2, „program w kontenerze" 0/3
  (`network/learning-records/0011`, `0012`). Brakuje modelu kontenera i procesu, nie wiedzy sieciowej.
- Luki z kanonu (proces, stdout/stderr, `$?`, pipe — `network/LR-0007`, `LR-0010`) to materiał Linuksa.
- Uczeń sam zdecydował: „przechodzę do nauki Linuxa i Dockera".

## Implications
- Tor A: Linux → Docker → **lekcja-most w `network/`** (powtórka 04.3/LR-0011 z nowym modelem kontenera) → Python → Git → API → Airflow → chmura → IaC.
- **Zmiana 2026-10-15 (decyzja ucznia):** Python przeniesiony z fazy 4 do fazy 3, przed Gita. Powód: DAG-i w Airflow i kod na Cloud Run
  to Python, a Python w DE potrzebuje głównie Linuksa (pliki, env, kody wyjścia, venv). Git w fazie 4 ma już własny kod do wersjonowania.
- Tor B: SQL od fazy 1, bo jest niezależny od terminala (pgexercises w przeglądarce, ewentualnie worksheet Snowflake w pracy); od fazy 2 Postgres w Dockerze łączy oba tory.
- Git codziennie w pracy, ale bez Linuksa (pliki, ścieżki, edytor, powłoka) uczyłby się go jak zaklęć — dlatego dopiero faza 4, po Pythonie.
  **Wyjątek**: jeśli Git zacznie realnie przeszkadzać w pracy, przesunąć wcześniej (reguła 4 w `NOTES.md` → Rytm).
- dbt po modelowaniu i Snowflake: dbt bez rozumienia ziarna i wymiarów to tylko „SQL w plikach".
