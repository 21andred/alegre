# Alegre — sito web

Sito del ristorante **Alegre**, fun dining dentro MOYSA · Via Giacomo Watt 32, Milano.

Sito statico (HTML/CSS/JS, nessuna build). Per vederlo in locale:

```bash
python3 -m http.server 8000   # poi apri http://localhost:8000
```

## Struttura

| File | Contenuto |
|---|---|
| `index.html` | Homepage: Hero · Concept · Food · Chef · Space · MOYSA · Experiences · Prenota |
| `menu.html` | Menu completo con sezioni, filtri SG/SL e legenda allergeni |
| `assets/css/style.css` | Sistema visivo (palette, tipografia, componenti, responsive) |
| `assets/js/main.js` | Traduzioni IT/EN, header, menu mobile, animazioni, rendering menu |
| `assets/js/menu-data.js` | **Dati del menu**: modificare qui piatti, prezzi, allergeni |

## Concept visivo

"The restaurant as a record": dal legame con MOYSA, il sito usa il linguaggio del disco:
lati (Side A, B…), tracklist, vinile, equalizzatori. Palette satura (yuzu, hibiscus,
tomato, basil, indigo) su base crema; titoli in Fraunces, testi in Space Grotesk.

## Da completare prima della pubblicazione

- [ ] Link del sistema di prenotazione → `BOOKING_URL` in `assets/js/main.js`
- [ ] Orari, telefono, email, Instagram (segnaposto gialli tratteggiati nella pagina)
- [ ] Fotografie: piatti, chef, sala, terrazza (oggi illustrazioni segnaposto)
- [ ] Logo ufficiale in SVG (oggi wordmark tipografico)
- [ ] Bio dello chef approvata
- [ ] Verifica allergeni e indicazioni SG/SL con la cucina (vedi nota in `menu-data.js`)
- [ ] Traduzione EN delle descrizioni dei piatti
