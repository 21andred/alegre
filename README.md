# Alegre — sito web

Sito del ristorante **Alegre**, fun dining dentro MOYSA · Via Giacomo Watt 32, Milano.

Sito statico (HTML/CSS/JS, nessuna build). Per vederlo in locale:

```bash
python3 -m http.server 8000   # poi apri http://localhost:8000
```

## Struttura

| File | Contenuto |
|---|---|
| `index.html` | Homepage: apertura · scene video degli spazi · richiamo catering · prenota |
| `concept.html` | Concept: fun dining, pilastri, momenti della giornata |
| `cucina.html` | Cucina: piatti signature e chef (palette blu, bianco, rosa anguria) |
| `moysa.html` | MOYSA: il legame con l'hub musicale |
| `catering.html` | Catering: artisti e concerti, eventi e presentazioni, aziende; modulo preventivo (Netlify Forms) |
| `grazie.html` | Pagina di conferma dopo l'invio del modulo |
| `menu.html` | Menu completo con sezioni, filtri SG/SL e legenda allergeni |
| `assets/css/style.css` | Sistema visivo (palette, tipografia, componenti, responsive) |
| `assets/js/main.js` | Traduzioni IT/EN, header, menu mobile, animazioni, rendering menu |
| `assets/js/menu-data.js` | **Dati del menu**: modificare qui piatti, prezzi, allergeni |

## Direzione visiva

Lusso caldo e sobrio, con un tratto giocoso. Palette presa da logo e spazi: blu notte
`#2e3a70` e sabbia `#a58c73` del logo, nero legno, avorio carta, grano, velluto bordeaux
e rame. Titoli in Instrument Serif, testi in Manrope, etichette in Patrick Hand SC (richiama
la scrittura a mano della carta e del logo). Il logo è in `assets/img/` come PNG trasparente
usato in maschera, quindi si ricolora via CSS.

## Da completare prima della pubblicazione

- [ ] Link del sistema di prenotazione → `BOOKING_URL` in `assets/js/main.js`
- [ ] Orari, telefono, email, Instagram (segnaposto gialli tratteggiati nella pagina)
- [ ] Fotografie ad alta risoluzione (le attuali sono ricavate da screenshot, max 1170px) e ritratto dello chef
- [ ] Logo ufficiale in SVG vettoriale
- [ ] Modalità di accesso al club
- [ ] Bio dello chef approvata
- [ ] Verifica allergeni e indicazioni SG/SL con la cucina (vedi nota in `menu-data.js`)
- [ ] Traduzione EN delle descrizioni dei piatti

## Aggiornamenti e cache

Dopo ogni modifica a CSS o JS incrementare il numero `?v=` nei link di `index.html` e `menu.html`
(es. `style.css?v=5` → `?v=6`), così i browser scaricano subito la versione nuova.

## Modulo preventivo (catering)

Il modulo in `catering.html` usa **Netlify Forms** (`data-netlify="true"`). Su Netlify:
Project configuration → Forms → abilitare *Form detection*, poi rifare un deploy.
Le richieste compaiono nella sezione Forms; da lì si attivano le notifiche email.
