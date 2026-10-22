# Zadania z podpunktami: uczeń odpowiada na sedno, podpunkty giną

W 02.3, 03.2, 03.4 i 03.5 uczeń trafnie odpowiadał na główne pytanie, ale pomijał części typu „podaj liczbę wierszy", „popraw", „w którą stronę".
03.4 miało cztery podpunkty (a–d) mimo LR-0004 („jedno pytanie = jedna prośba") — to mój błąd w projekcie zadania, nie tylko jego nawyk.
Przy okazji 03.4 wyszedł prawdziwy błąd rozumienia: policzył `AVG(sale_price)` jako AOV, uzasadniając to bezpieczeństwem złączenia — pomylił „czy JOIN zmienia ziarno" z „czy metryka pasuje do pytania".

## Evidence
- Cytaty w `NOTES.md` → lesson 0002 (02.3) i lesson 0003 (03.2, 03.4, 03.5), 2026-10-21/22.
- 03.4 (d): mocny osąd biznesowy (wolumen, koszt pozyskania klienta) — gdy pytanie jest otwarte i biznesowe, odpowiada pełnie.

## Implications
- Jedno zadanie = jedna prośba, maksymalnie dwie, z których druga wynika z pierwszej. Liczby, które mają weryfikować fakt, zbierać w osobnym, krótkim zadaniu albo w quizie.
- Metryka i złączenie to dwa osobne kroki sprawdzania SQL od AI: (1) ziarno po złączeniu, (2) czy licznik i mianownik odpowiadają pytaniu. Uczyć jako dwa pytania kontrolne.
- AOV vs średnia cena pozycji: retrieval w 0004 bez podpowiedzi, w nowej formie (np. recenzja AI, które liczy AOV przez `AVG`).
