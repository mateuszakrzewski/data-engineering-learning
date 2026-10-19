# Ziarno i klucz biznesowy zna z praktyki — lekcje mogą od nich startować

W 01.6 uczeń sam opisał ziarno tabeli sprzedaży z pracy: jeden wiersz = pozycja paragonu z rabatem, klucz biznesowy = `id_paragonu, id_produktu, procent_rabatu_do_produktu, komentarz`,
i powiązał go z weryfikacją unikalności. Ziarno nie jest dla niego nowym pojęciem, tylko nową nazwą na coś, co już robi.

## Evidence
- 01.6 (cytat w `NOTES.md` → lesson 0001); quiz 01.4: 5/5; 01.3 — cztery poprawne `order_id` z wieloma pozycjami.

## Implications
- Lekcja o JOIN może zakładać ziarno i iść szybciej: od razu „sprawdź unikalność klucza przed i po JOIN” (`COUNT(*)` vs `COUNT(DISTINCT …)`).
- Jego klucz zawiera wolny tekst (`komentarz`) — gotowy, własny przykład do lekcji o NULL (NULL w kluczu, porównania `=` z NULL) i o deduplikacji (`ROW_NUMBER`).
