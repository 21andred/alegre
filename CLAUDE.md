# Alegre — note per chi lavora sul progetto

Sito statico (HTML/CSS/JS, nessuna build), pubblicato su Netlify dal branch
`claude/festive-brahmagupta-65dtpr`. Vedi README.md per struttura e cose da completare.

## Regole stabilite con il cliente

- **Video: taglio sempre centrato.** Se un video deve essere ritagliato per riempire uno spazio,
  il taglio deve essere uguale sopra e sotto (e a destra e sinistra): la parte centrale del video
  resta sempre al centro. Mai tagliare solo sopra o solo sotto. In pratica: video `position:
  absolute; inset: 0` nel suo riquadro, `object-fit: cover`, `object-position: 50% 50%`,
  `transform-origin: 50% 50%`, e il riquadro non deve poter crescere sulle dimensioni del video
  (es. `grid-template-rows: minmax(0, 1fr)`, `min-height: 0`).
- Dopo ogni modifica a CSS/JS incrementare `?v=` nei link di `index.html` e `menu.html`.
- Direzione visiva: lusso caldo e sobrio con tocco giocoso (logo a pennello, scrittura a mano).
  Niente stili colorati/psichedelici.
- **Palette: solo sei colori** (e loro trasparenze): nero legno `#14110E`, avorio `#F2ECE2`,
  bianco `#FFFFFF`, sabbia `#A58C73`, grano `#D6B88A`, blu notte `#2E3A70`. Non aggiungerne altri.
- Caratteri: Instrument Serif (titoli, frasi), Manrope (testi, menu, pulsanti), Patrick Hand SC
  (etichette). Nella home: menu e Prenota in Manrope, frase in Instrument Serif.
- Non inventare fatti (premi, orari, ruoli, primati): segnarli come "da confermare".
