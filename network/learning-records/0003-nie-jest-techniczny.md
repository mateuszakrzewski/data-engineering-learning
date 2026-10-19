# Sprostowanie: koncepcyjny inżynier danych, nie programista

Użytkownik sprostował moje założenie z [[0001-punkt-startowy]]: **nie jest biegły w Pythonie ani SQL-u**.
Kod pisze i recenzuje z pomocą AI. Jego realna kompetencja jest **koncepcyjna** — rozumie, jak powinny
być budowane hurtownie, jakie są założenia i warstwy, ale nie jest techniczny w implementacji.
Naukę Pythona i SQL-a świadomie wydzielił do osobnego katalogu, żeby najpierw zbudować fundament sieciowy.

## Evidence
Sam z siebie skorygował opis w `MISSION.md`, którego nie prosiłem go o weryfikację — czyta materiały
workspace'u krytycznie, nie tylko lekcje.

## Implications
- **Nie kotwiczyć przykładów w kodzie aplikacyjnym.** Kotwica to: connection string, plik konfiguracyjny,
  wynik terminala, komunikat błędu, diagram. Jeśli kod musi się pojawić — rozebrać linijka po linijce,
  tak jak rozbieramy flagi komend.
- **Można** odwoływać się do pojęć architektonicznych (warstwy hurtowni, źródła, potoki) — tam ma grunt.
- Jego deklaracja „sieci to podstawa wszystkiego, więc najpierw one" potwierdza misję i kolejność.
  Nie ma potrzeby uzasadniać mu, po co się tego uczy — motywacja jest ustabilizowana.
- **Niespodziewana synergia z [[0002-adres-nasluchu-nie-maszyna]]:** skoro pracuje z kodem przez AI,
  to umiejętność *weryfikowania* cudzego outputu jest dla niego kluczowa. Zasada „nie kopiuj komendy,
  której flag nie umiesz rozwinąć" (patrz [[NOTES.md]]) nie jest tylko dydaktyką — to jego
  bezpośrednia kompetencja zawodowa. Warto to wzmacniać w każdej lekcji.
