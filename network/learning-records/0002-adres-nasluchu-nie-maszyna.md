# Usługa nasłuchuje na adresie, nie „na maszynie"

Podczas ćwiczeń z lekcji 01 użytkownik dostał `Connection refused` na `127.0.0.1:53`, mimo że
`systemd-resolved` na jego maszynie działał — bo nasłuchiwał na `127.0.0.53`, nie na `127.0.0.1`.
(Błąd był mój: podałem złą komendę weryfikacyjną. Wynik okazał się lepszy od planowanego ćwiczenia.)

Z tego wyszła zasada mocniejsza niż `0.0.0.0` vs `127.0.0.1` z samej lekcji: **cały zakres `127.0.0.0/8`
to pętla zwrotna i są to realnie różne adresy**. Usługa związana z jednym nie odpowiada na drugim.

## Evidence
Użytkownik sam zestawił dwa wyniki `nc` i zgłosił, że oba dają `refused` — czyli zauważył,
że moja predykcja się nie sprawdziła, zamiast przyjąć ją na wiarę.

## Implications
- Fundament pod lekcję o Dockerze/WSL jest już położony: „kontener nie widzi `localhost` hosta"
  to ta sama zasada, tylko przez granicę namespace'u sieciowego. Można się na to powołać, nie tłumacząc od zera.
- Użytkownik ma już odruch „sprawdź w `ss -tlnp`, na jakim adresie to naprawdę stoi" — kolejne lekcje
  mogą tego wymagać, zamiast przypominać.
- Wprowadzone przy okazji, na razie tylko do rozpoznawania (nie do egzekwowania):
  zapis `/8` jako zakres adresów, `[::1]` jako pętla zwrotna IPv6, port 53 jako DNS.
- Rozróżnienie **odmowa (`refused`, natychmiast) vs cisza (timeout)** zostało wprowadzone i zilustrowane
  na żywym przykładzie (GitHub milczy na porcie 444). To jest gotowy rdzeń lekcji 02.
