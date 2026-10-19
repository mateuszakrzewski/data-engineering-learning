# Rozumie różnicę: odmowa vs cisza

Użytkownik samodzielnie, własnymi słowami, opisał w `notes.txt` mechanizm timeoutu na porcie 444:

> „timeout. Nie zwraca failed, ani odmowy dostępu, żeby nie było wiadomo, że coś za tym jest.
> Firewall połyka połączenie"

To jest pełne, poprawne wyjaśnienie — łącznie z **intencją** takiego zachowania (nieujawnianie
istnienia serwera), której mu nie podałem w tej formie.

## Evidence
Notatka powstała zanim omówiłem ten przypadek — sam zinterpretował ciszę jako wynik, a nie jako brak wyniku.

## Implications
- Rozróżnienie `refused` (natychmiast, problem usługi/portu) vs `timeout` (cisza, problem drogi/firewalla)
  jest **opanowane**. Nie trzeba go uczyć od zera — można na nim budować.
- Odblokowuje to lekcje o firewallach, security groups w GCP i o tym, dlaczego kontener „nie widzi" bazy.
- Warto promować oba terminy do `GLOSSARY.md`, gdy powstanie.
- Ma odruch zapisywania obserwacji i wyciągania z nich reguł — to dokładnie postawa, którą
  chcemy wzmacniać. Warto mu to nazwać wprost.
