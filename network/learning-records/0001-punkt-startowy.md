---
Status: częściowo superseded by LR-0003
---

# Punkt startowy: inżynier danych bez podstaw sieciowych

> **Uwaga:** twierdzenie o biegłości w Pythonie było moim błędnym założeniem, nie deklaracją
> użytkownika. Sprostowane w [[0003-nie-jest-techniczny]]. Reszta rekordu pozostaje aktualna.

Użytkownik jest inżynierem danych — samoukiem — który deklaruje
**zero podstaw teoretycznych z sieci**. Chce nauczyć się podstaw sieci i HTTP jako fundamentu pod
API, Linuksa i wystawianie baz danych dla potoków. Sam formułuje to jako brak, który blokuje
prawidłowe budowanie potoków — czyli motywacja jest praktyczna, nie akademicka.

## Implications
- Nie można zakładać znajomości niczego: warstw, IP, portów, DNS, TCP. Każdy termin wprowadzamy jawnie.
- ~~Ale **można** zakładać biegłość w Pythonie~~ — **nieprawda**, patrz [[0003-nie-jest-techniczny]].
  Aktualne zostaje tylko to, że przykłady mają być osadzone w connection stringach, API i potokach,
  nie w abstrakcyjnych „hostach A i B".
- Poziom abstrakcji trzymamy nisko i praktycznie; teoria (model OSI itp.) wchodzi tylko tam, gdzie
  bezpośrednio tłumaczy obserwowalne zachowanie.
- Odrzucił formularz wielokrotnego wyboru i odpowiedział własnymi słowami — preferuje rozmowę
  nad ankietę. Patrz [[NOTES.md]].
