# Linux — Resources

Kręgosłup ścieżki: `../RESOURCES.md`. Tu źródła szczegółowe dla domeny.

## Knowledge
- [William Shotts — _Learning the Shell_ (linuxcommand.org)](https://linuxcommand.org/lc3_learning_the_shell.php)
  Krótkie lekcje webowe, skrót książki TLCL. Use for: główne źródło lekcji startowych (Navigation, A Guided Tour, Permissions, Job Control, I/O Redirection).
- [William Shotts — _The Linux Command Line_ (darmowy PDF)](https://linuxcommand.org/tlcl.php)
  Systematyczny podręcznik od zera. Use for: pogłębienie każdej lekcji; rozdziały 2–3 → lekcja 01.
- [Filesystem Hierarchy Standard 3.0 (Linux Foundation)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)
  Norma układu katalogów. Use for: autorytatywne „co gdzie leży". Lokalnie: `man hier`.
- [Microsoft Learn — Working across file systems (WSL)](https://learn.microsoft.com/en-us/windows/wsl/filesystems)
  `/mnt/c`, wydajność, wielkość liter. Use for: wszystko, co różni WSL w pracy od Ubuntu w domu.
- [Apache Airflow 3.2.2 — Running Airflow in Docker](https://airflow.apache.org/docs/apache-airflow/3.2.2/howto/docker-compose/index.html)
  Montowania `./dags|logs|config|plugins` → `/opt/airflow/…`, `AIRFLOW_UID`. Use for: kotwice z pracy (ścieżki, uprawnienia wolumenów).
- [AWS CLI — Configuration and credential file settings](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
  `~/.aws/config`, `~/.aws/credentials`. Use for: pliki ukryte, uprawnienia, zmienne środowiskowe z sekretami.
- [MIT — _The Missing Semester_](https://missing.csail.mit.edu/) — shell, środowisko, skrypty. Use for: lekcje 4–6.

## Wisdom (Communities)
- [r/linuxquestions](https://www.reddit.com/r/linuxquestions/) i [Unix & Linux Stack Exchange](https://unix.stackexchange.com/) — pytania „dlaczego tak działa". Preferencja ucznia: nieustalona.
