/*
 * ALEGRE — Dati del menu
 * ------------------------------------------------------------
 * Trascritti dalla carta attuale (foto fornite, novembre 2026).
 * Per aggiornare il menu basta modificare questo file.
 *
 * Campi:
 *   name   nome del piatto (resta in italiano anche nella versione EN)
 *   desc   ingredienti / descrizione
 *   price  prezzo in euro (numero)
 *   all    allergeni (numeri della legenda 1–14)
 *   sg     senza glutine      sl  senza lattosio
 *   frozen materia prima surgelata all'origine (asterisco in carta)
 *
 * ATTENZIONE: alcune indicazioni SG/SL e alcuni allergeni presenti in carta
 * sembrano incoerenti (es. piatti con latte [7] segnati "SL"). Sono riportati
 * fedelmente: vanno verificati con la cucina prima della pubblicazione.
 */
window.ALEGRE_MENU = {
  allergens: {
    1: { it: "Glutine", en: "Gluten" },
    2: { it: "Crostacei", en: "Crustaceans" },
    3: { it: "Uova", en: "Eggs" },
    4: { it: "Pesce", en: "Fish" },
    5: { it: "Arachidi", en: "Peanuts" },
    6: { it: "Soia", en: "Soy" },
    7: { it: "Latte", en: "Milk" },
    8: { it: "Frutta a guscio", en: "Tree nuts" },
    9: { it: "Sedano", en: "Celery" },
    10: { it: "Senape", en: "Mustard" },
    11: { it: "Sesamo", en: "Sesame" },
    12: { it: "Solfiti", en: "Sulphites" },
    13: { it: "Lupini", en: "Lupin" },
    14: { it: "Molluschi", en: "Molluscs" }
  },

  sections: [
    {
      id: "piccoli",
      side: "A",
      color: "yuzu",
      title: { it: "Piatti piccoli", en: "Small plates" },
      note: { it: "Da condividere, da assaggiare, da ordinare ancora.", en: "To share, to taste, to order again." },
      items: [
        { name: "Hummus", desc: "Insalata di germogli - pane madras", price: 5, all: [], sl: true, sg: true },
        { name: "Le crocchette di parmigiano al nero di carbone", desc: "Maionese di pomodoro - polvere di pomodoro", price: 7, all: [3, 6, 7], sl: true, sg: true },
        { name: "Caprese", desc: "Burrata - pomodoro camone sardo - pomodorino cherry giallo - piccadilly - cuore di palma - cetriolo", price: 10, all: [7], sg: true },
        { name: "Roast beef tonnato", desc: "Roast beef - salsa tonnata - furikake", price: 16, all: [10, 11], sl: true, sg: true },
        { name: "Sashimi di salmone", desc: "Gravlax di salmone curato - yogurt hand-made - olio al basilico - lamponi e biete", price: 16, all: [4, 7], sg: true },
        { name: "Tartare di tonno rosso", desc: "Tonno rosso - pistacchi - burrata - crema di avocado", price: 16, all: [], sl: true, sg: true },
        { name: "Tartare", desc: "Battuta di Fassona - nuvole di patate - olio verde", price: 18, all: [1, 10], sl: true },
        { name: "Verdi", desc: "Pak choi - edamame - spinacino - broccoli - pickles di peperoncino - grano saraceno", price: 8, all: [6], sl: true, sg: true, frozen: true },
        { name: "Verdure Alegres", desc: "Carote - zucchine - broccoli - cavolfiori", price: 7, all: [], sl: true, sg: true },
        { name: "Patata dolce", desc: "Alla piastra - stracciatella - habanero - nocciola", price: 7, all: [], sl: true, sg: true },
        { name: "Riso basmati e kefir", desc: "Riso basmati - foglie di kefir - lime - furikake", price: 6, all: [], sl: true, sg: true },
        { name: "Carpaccio di funghi e grana", desc: "Funghi italiani - scaglie di grana - sale maldon", price: 16, all: [7], sl: true, sg: true },
        { name: "Misticanza", desc: "Tsu - amaranto soffiato", price: 5, all: [], sl: true, sg: true }
      ]
    },
    {
      id: "grandi",
      side: "B",
      color: "tomato",
      title: { it: "Piatti grandi", en: "Large plates" },
      note: { it: "Le portate principali: mare, terra e contaminazioni.", en: "Main courses: sea, land and everything in between." },
      items: [
        { name: "Spaghetto alle vongole e bottarga", desc: "Vongole - dashi - bottarga - limone", price: 26, all: [1, 14], sl: true },
        { name: "Tagliolini ai funghi", desc: "Tagliolini - tartufo - porcini - cardoncelli - pioppini", price: 24, all: [1, 7], sl: true },
        { name: "Risotto allo yuzu", desc: "Stracciatella - nocciole - olio al basilico", price: 24, all: [7, 12], sl: true, sg: true },
        { name: "Gnocchi viola e pata negra", desc: "Gnocchi di patata viola dolce - fonduta di gorgonzola - pata negra croccante", price: 22, all: [3, 7], sl: true, sg: true },
        { name: "Ombrina", desc: "Ombrina - burro al kimchi - pak choi al lime", price: 26, all: [4, 7], sl: true, sg: true },
        { name: "Tonno rosso", desc: "Tataki di tonno rosso - guacamole - nido di patate dolci", price: 26, all: [4], sl: true, sg: true },
        { name: "Polipo", desc: "Basilico - crema di patate - polvere di garnicia", price: 25, all: [14], sl: true, sg: true },
        { name: "Petto d'anatra", desc: "Demi glace al cacao - lattuga baby scottata al miso", price: 30, all: [7, 12], sl: true, sg: true },
        { name: "Vacio USA", desc: "Bavetta USA - spinaci", price: 29, all: [], sl: true, sg: true },
        { name: "Filetto di manzo", desc: "Demi glace alla soia - crema di patate", price: 35, all: [6, 7], sl: true, sg: true },
        { name: "Pollo al tamarindo", desc: "Alioli di barbabietola - burro al tamarindo - amaranto soffiato", price: 18, all: [7], sl: true, sg: true },
        { name: "Coniglio", desc: "Coscia di coniglio - pastinaca - lenticchie - carote bby - olio al basilico", price: 24, all: [], sl: true, sg: true }
      ]
    },
    {
      id: "insalatone",
      side: "C",
      color: "basil",
      title: { it: "Insalatone", en: "Big salads" },
      note: { it: "Fresche, piene, colorate.", en: "Fresh, generous, colourful." },
      items: [
        { name: "Caesar", desc: "Pollo - iceberg - misticanza - parmigiano - salsa caesar - crostini", price: 18, all: [1, 7], sl: true },
        { name: "Bowl proteica", desc: "Uovo - orzo - farro - piselli - edamame - mais - verdure di stagione - dressing cocco e senape", price: 21, all: [1, 3, 10], sl: true, frozen: true },
        { name: "Mediterranea", desc: "Rucola - misticanza - burratina - pomodorini - semi - ravanelli - olive nere - vinaigrette all'aceto balsamico", price: 18, all: [7], sl: true, sg: true },
        { name: "Patagonia", desc: "Misticanza - spinaci - salmone affumicato - carote - dressing cocco e senape - semi di sesamo", price: 18, all: [4, 10, 11], sl: true, sg: true }
      ]
    },
    {
      id: "dolci",
      side: "D",
      color: "hibiscus",
      title: { it: "Dolci", en: "Desserts" },
      note: { it: "Il finale, con un ultimo colpo di scena.", en: "The finale, with one last twist." },
      items: [
        { name: "Torta Lisbona", desc: "Brownie cioccolato - mousse di cioccolato ruby - cacao - nocciole - gelato al cocco", price: 8, all: [7], sg: true },
        { name: "Tarta de queso vasca", desc: "Cheesecake spagnola", price: 7, all: [7], sg: true },
        { name: "Panna cotta", desc: "Infuso all'hibiscus - nocciole - menta - vaniglia", price: 7, all: [7], sg: true },
        { name: "Crema al caffè", desc: "Cioccolato - pistacchi", price: 7, all: [3, 7, 8], sg: true },
        { name: "Gelato Alegre", desc: "Gelato alla panna - popcorn salati - dulce de leche e miso", price: 6, all: [7], sg: true, frozen: true },
        { name: "Gelato al cocco", desc: "Croccante di semi - agave", price: 6, all: [7], sg: true, frozen: true },
        { name: "Macedonia", desc: "Frutta di stagione", price: 5, all: [], sl: true, sg: true }
      ]
    },
    {
      id: "bevande",
      side: "E",
      color: "indigo",
      title: { it: "Bevande", en: "Drinks" },
      items: [
        { name: "Acqua Panna 0,75", price: 3 },
        { name: "Acqua San Pellegrino 0,75", price: 3 },
        { name: "Gazzosa Lurisia", price: 4 },
        { name: "Estathé limone", price: 3.5 },
        { name: "Estathé pesca", price: 3.5 },
        { name: "Coca Cola", price: 3.5 },
        { name: "Coca Cola Zero", price: 3.5 },
        { name: "Spremuta d'arancia", price: 5 }
      ]
    },
    {
      id: "birre",
      side: "F",
      color: "lilac",
      title: { it: "Birre", en: "Beers" },
      items: [
        { name: "Menabrea", price: 5, all: [1] },
        { name: "Messina", price: 5, all: [1] },
        { name: "Ichnusa non filtrata", price: 5, all: [1] },
        { name: "IPA", price: 7, all: [1] }
      ]
    }
  ]
};
