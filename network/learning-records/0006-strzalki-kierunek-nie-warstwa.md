---
Status: rozwiązane w ćwiczeniu 03.1 (2026-09-24) — do jednej powtórki rozłożonej w czasie
---

# Nieporozumienie: `>` i `<` to kierunek, nie „warstwa HTTP"

W zadaniu otwartym z lekcji 02 użytkownik rozwinął znaki z `curl -v` tak:

> `'>'` - Odpowiedź z HTTP. Podaje jakie parametry przyjmuje header
> `'<'` - Odpowiedź z HTTP. Treść odpowiedzi, ale nie potrafię tego rozwinąć bardziej

Obie linie nazwał **odpowiedzią**. Tymczasem `>` to nagłówki, które **on wysyła**, a `<` to nagłówki,
które **odbiera**. Zapamiętał poprawnie *warstwę* (oba to HTTP), zgubił *kierunek*.
Dodatkowo `<` to nagłówki odpowiedzi, a nie jej treść — body nie ma żadnego znaku.

## Evidence
Jego własny wklejony output zawiera dowód, którego nie połączył z definicją:
`> User-Agent: curl/8.5.0` — `curl` opisuje **sam siebie**, więc ta linia nie mogła przyjść od GitHuba.

## Implications
- **Źródło błędu jest w mojej lekcji, nie w jego czytaniu.** W tabeli dałem kolumnę „Warstwa"
  i wpisałem w nią „HTTP — Twoje żądanie" / „HTTP — odpowiedź serwera". Kierunek był schowany
  w dopisku, a rzuca się w oczy słowo HTTP. Kolejne materiały mają mieć **osobną kolumnę „Kierunek"**.
- Mnemonik do wprowadzenia i egzekwowania: strzałka pokazuje, w którą stronę lecą bajty
  względem Twojego terminala. `>` wychodzi ode mnie, `<` przychodzi do mnie.
- To nie jest drobiazg kosmetyczny: cała diagnostyka „czyja to wina" opiera się na kierunku.
  Nagłówek `Authorization` w `>` to problem po mojej stronie; kod `401` w `<` to werdykt serwera.
  Bez kierunku nie da się użyć `curl -v` do rozstrzygania winy — a to jest cel misji.
- Rozróżnienie **nagłówki odpowiedzi (`<`) vs body (bez znaku)** wchodzi jako osobny punkt
  do lekcji o HTTP. On sam napisał „nie potrafię tego rozwinąć bardziej" — to jawna prośba.
