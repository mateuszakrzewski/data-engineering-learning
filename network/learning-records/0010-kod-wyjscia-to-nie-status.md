---
Status: rozwiązane (2026-10-14; transfer na dig) — zastosował 0 vs -f w scenariuszu Airflow (03.7)
---

# Utożsamia kod wyjścia programu z kodem statusu HTTP

Zapytany o kod wyjścia (`$?`) dla `curl https://api.github.com/user` i tej samej komendy z `-f`, odpowiedział:
„Linia 4 dostanie 401, a piąta 403". Dwa błędy naraz: (1) kod wyjścia to dla niego kod statusu HTTP,
(2) flaga po stronie klienta miałaby zmienić odpowiedź serwera.

## Evidence
Lekcja 03 i glosariusz mówiły to wprost („Kod statusu to nie kod wyjścia"), więc to nie brak informacji,
tylko brak modelu: nie widzi **dwóch osobnych rozmów** — serwer → curl i curl → powłoka. Pasuje do
[[0007-brak-kanonu-informatycznego]]: „kod wyjścia" to pojęcie z kanonu systemów operacyjnych, nie sieci.

## Implications
- Uczyć jako **dwa kanały na jednym diagramie**: `GitHub --(HTTP 401)--> curl --(exit 0 / 22)--> powłoka / Airflow`.
  Orkiestrator nigdy nie widzi statusu HTTP, widzi tylko kod wyjścia.
- To jest rdzeń ćwiczenia 03.7 (Airflow + wygasły token). Bez tego rozróżnienia 03.7 nie ma sensu —
  sprawdzić, czy odpowie na nie poprawnie po tym wyjaśnieniu.
- Ten sam wzorzec co [[0006-strzalki-kierunek-nie-warstwa]]: zlewa dwie rzeczy, które różnią się tym,
  **kto z kim rozmawia**. Pytanie „kto mówi i do kogo?" jest dla niego uniwersalnym kluczem.

## Update 2026-10-14
Transfer na nowe narzędzie: zapytany z pamięci o kod `dig` po `NXDOMAIN` — „kod wyjścia to 0, bo dig dostanie odpowiedź". Poprawnie i z mechanizmem,
bez podpowiedzi. Rozróżnienie dwóch kanałów uznaję za opanowane; wracać już tylko okazjonalnie (np. `psql`/`pg_isready` w skryptach).
