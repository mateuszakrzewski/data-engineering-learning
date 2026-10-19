# Repo Airflow w pracy leży w /mnt/c — dwa widoki tych samych plików

W 01.5 uczeń wyprowadził, że repo z Airflow, na którym pracuje w WSL, leży na dysku Windows: otwiera je z Eksploratora Windows
(„Otwórz w Cursor"), więc w WSL to `/mnt/c/…`. Napisał przy tym „w Dockerze leży on więc pod /mnt/c" — zlewa widok z WSL z widokiem z kontenera.

## Evidence
> repo otwieram wybierając 'otwórz w cursor' z menu kontekstowego po kliknięciu prawym przyciskiem na katalog z repo. W Dockerze leży on więc pod /mnt/c/..

Rozumowanie od sposobu otwierania do ścieżki — poprawne. Pomylone miejsca: w WSL `/mnt/c/…`, w kontenerze ten sam katalog jest pod `/opt/airflow/dags` (bind mount z compose).

## Implications
- Realny, potencjalny ból z pracy: Docker Desktop zaleca trzymać bind-mountowany kod po stronie Linuksa — z `/mnt/c` dostęp jest wolniejszy,
  a zdarzenia o zmianie plików (inotify) nie docierają do kontenera ([Docker Desktop — WSL best practices](https://docs.docker.com/desktop/features/wsl/best-practices/)).
  Nie zakładać, że to u niego coś psuje — sprawdzić koncepcyjnie (zasada 13: nic nie uruchamiać na firmowym sprzęcie bez jego decyzji).
- Model do zbudowania w bloku Docker: **jeden plik, kilka ścieżek** — Windows `C:\…`, WSL `/mnt/c/…`, kontener `/opt/airflow/dags/…`.
  Pokrewne: network LR-0011 („nazwę rozwiązuje maszyna, na której działa program") — ścieżkę też interpretuje maszyna, na której działa program.
- Lekcja 0002 (uprawnienia): pliki z `/mnt/c` mają uprawnienia „udawane" przez WSL — dobry przykład, jeśli zapyta, czemu `chmod` tam nie działa jak w domu. *(zweryfikować w docs WSL przed użyciem)*
