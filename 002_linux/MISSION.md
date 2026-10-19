# Mission: Linux dla inżyniera danych

> Potwierdzona przez ucznia 2026-10-19 (01.1: „tak MISSION.md jest ok"). Misja nadrzędna: `../MISSION.md`.

## Why
Kontenery, WSL, maszyny w chmurze, workery Airflow — wszystko, na czym działają moje potoki, to Linux.
Chcę czuć się w terminalu jak u siebie, zamiast kopiować komendy, i rozumieć pojęcia, na których stoją sieci i Docker:
proces, plik, uprawnienia, strumienie, kod wyjścia, zmienne środowiskowe.

## Success looks like
- Poruszam się po systemie plików i wiem, gdzie co leży (`/etc`, `/var/log`, `/home`, `/tmp`, `/mnt/c` w WSL).
- Czytam i zmieniam uprawnienia (`ls -l`, `chmod`, `chown`, `sudo`) i rozumiem, dlaczego „Permission denied".
- Wiem, czym jest proces, PID, sygnał; znajduję i zatrzymuję proces (`ps`, `top`, `kill`), czytam usługę systemd (`systemctl`, `journalctl`).
- Składam potok `|`, przekierowuję `>`, `2>&1`, sprawdzam `$?` — i wiem, co z tego zobaczy Airflow.
- Ustawiam i czytam zmienne środowiskowe (`export`, `env`, `.env`, `PATH`) — tak jak trafiają sekrety do potoków.
- Piszę krótki, bezpieczny skrypt bash (`set -euo pipefail`) i przeszukuję logi (`grep`, `tail -f`, `less`).

## Constraints
- Od zera w kanonie (patrz `../network/learning-records/0007`). Zasady lekcji: `../CLAUDE.md`.
- Ćwiczenia działają na Ubuntu (dom) i w WSL2 (praca).

## Out of scope
- Administracja serwerami produkcyjnymi, kompilacja jądra, LVM/RAID, Vim jako cel sam w sobie.
