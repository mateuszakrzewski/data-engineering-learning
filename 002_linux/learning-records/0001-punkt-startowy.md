# Punkt startowy Linuksa: terminal tak, model systemu nie

Uczeń przychodzi do Linuksa po 4 lekcjach sieci (wstrzymane 2026-10-14). Używał już `ss`, `dig`, `curl`, `getent`, `docker`, `$?`,
ale jako narzędzi do konkretnego pytania — bez mapy systemu, w którym działają. Lekcja 0001 zaczyna więc od mapy (drzewo, FHS, ścieżki),
a nie od komend, które już widział.

## Evidence
- `../network/learning-records/0007` — luka w kanonie (proces, stdout, pipe) nazwana przez niego samego.
- `../network/learning-records/0012` — lekcje muszą być samowystarczalne; ta lekcja jest pierwszą pisaną od początku wg tych zasad.
- `$?` i „0 = sukces" opanowane (network LR-0010) — można na tym budować (w 0001: `ls /Etc` → 2, retrieval `getent` → 2).

## Implications
- Kolejność domeny: system plików → uprawnienia → proces → strumienie → zmienne środowiskowe → logi/skrypt (plan w `NOTES.md`).
- Każda lekcja Linuksa kotwiczona w jego pracy (Airflow 3.2.2 w Dockerze, WSL, S3/AWS CLI, `.env`) i, gdzie się da, w mostach do sieci.
- Po odpowiedziach na 0001 zweryfikować: czy mapa była za łatwa (wtedy szybciej do uprawnień) czy pojęcia ścieżek wymagają powtórki.
