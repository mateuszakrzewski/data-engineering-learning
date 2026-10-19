# Punkt startowy SQL: ziarno przed składnią, na TheLook w BigQuery

SQL zaczynamy od pytania „co oznacza jeden wiersz?", a nie od pełnej składni, bo misja domeny to weryfikacja SQL od AI —
a najczęstszy cichy błąd (JOIN mnożący wiersze, liczenie pozycji zamiast zamówień) wynika z nieznajomości ziarna. Uczeń pisze SQL z AI
i nie jest biegły w składni (network LR-0003), ale zna hurtownie koncepcyjnie, więc pojęcie ziarna ma na czym się oprzeć.

## Implications
- Środowisko fazy 1: konsola BigQuery na jego projekcie `datapiperejtan` (ma też `bq` lokalnie) — TheLook bez instalacji, te same dane co projekt portfolio (../LR-0003).
  Fakty do lekcji weryfikuję `bq` przed napisaniem (najpierw `--dry_run`).
- `orders` (zamówienie) vs `order_items` (pozycja) to stała para przykładów aż do lekcji o JOIN; `num_of_item` daje gotowy test ziarna.
- Most do `017_data_quality`: „0 wierszy = sukces, kod 0" — literówka w filtrze nie wywala zadania w Airflow.
- Po odpowiedziach na 0001 ustalić realny poziom: jeśli 01.3/01.6 pewne i quiz ≥ 4/5, lekcja 0002 może łączyć agregacje z pierwszym JOIN-em.
