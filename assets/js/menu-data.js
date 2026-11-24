/*
 * ALEGRE — Dati del menu (Menu inverno 2026)
 * Trascritti dal PDF "MENU_INVERNO_2026_NUOVO". Per aggiornare il menu basta modificare questo file.
 * Campi: name, desc, price (€), all (allergeni 1–14), sg (senza glutine), sl (senza lattosio),
 * frozen (materia prima surgelata, asterisco in carta).
 * Indicazioni SG/SL e allergeni riportati fedelmente dalla carta.
 */
window.ALEGRE_MENU = {
  "allergens": {
    "1": {
      "it": "Glutine",
      "en": "Gluten"
    },
    "2": {
      "it": "Crostacei",
      "en": "Crustaceans"
    },
    "3": {
      "it": "Uova",
      "en": "Eggs"
    },
    "4": {
      "it": "Pesce",
      "en": "Fish"
    },
    "5": {
      "it": "Arachidi",
      "en": "Peanuts"
    },
    "6": {
      "it": "Soia",
      "en": "Soy"
    },
    "7": {
      "it": "Latte",
      "en": "Milk"
    },
    "8": {
      "it": "Frutta a guscio",
      "en": "Tree nuts"
    },
    "9": {
      "it": "Sedano",
      "en": "Celery"
    },
    "10": {
      "it": "Senape",
      "en": "Mustard"
    },
    "11": {
      "it": "Sesamo",
      "en": "Sesame"
    },
    "12": {
      "it": "Solfiti",
      "en": "Sulphites"
    },
    "13": {
      "it": "Lupini",
      "en": "Lupin"
    },
    "14": {
      "it": "Molluschi",
      "en": "Molluscs"
    }
  },
  "sections": [
    {
      "id": "antipasti",
      "title": {
        "it": "Antipasti",
        "en": "Starters"
      },
      "note": {
        "it": "Da condividere, da assaggiare, da ordinare ancora.",
        "en": "To share, to taste, to order again."
      },
      "items": [
        {
          "name": "Crocchette alla carbonara",
          "desc": "Con maionese al pepe nero",
          "price": 7,
          "all": [
            1,
            3,
            7,
            10,
            12
          ]
        },
        {
          "name": "Bao alla milanese",
          "desc": "Panino al vapore asiatico - cotoletta di sovracoscia di pollo impanata in cereali al mais - rucola - tsu - maionese piccante di pomodori",
          "price": 8,
          "all": [
            1,
            3,
            7,
            10,
            12
          ]
        },
        {
          "name": "Tartare e uovo",
          "desc": "Battuta di fassona - tuorlo marinato - misticanza",
          "price": 18,
          "all": [
            3,
            10,
            12
          ],
          "sg": true,
          "sl": true
        },
        {
          "name": "Ceviche di ricciola",
          "desc": "Leche de tigre e sesamo",
          "price": 18,
          "all": [
            4,
            6,
            11,
            12
          ]
        },
        {
          "name": "Ribs di mais",
          "desc": "Sale alle alghe e maionese chipotle",
          "price": 7,
          "all": [
            1,
            3,
            10
          ],
          "sl": true
        },
        {
          "name": "Milanese di melanzana",
          "desc": "Con rucola, pomodorini, Parmigiano e sour cream",
          "price": 15,
          "all": [
            1,
            3,
            6,
            7,
            12
          ]
        }
      ]
    },
    {
      "id": "primi",
      "title": {
        "it": "Primi",
        "en": "Pasta & risotto"
      },
      "note": {
        "it": "Paste e risotti, tra tradizione e contaminazioni.",
        "en": "Pasta and risotto, between tradition and twists."
      },
      "items": [
        {
          "name": "Spaghetti alle cozze",
          "desc": "Aglio, olio, peperoncino, cozze e mollica di pane fritta",
          "price": 18,
          "all": [
            1,
            12,
            14
          ]
        },
        {
          "name": "Risotto con crema di zucca",
          "desc": "Mandarino, pepe timut e caffè",
          "price": 18,
          "all": [
            6,
            7,
            9,
            12
          ]
        },
        {
          "name": "Gnocchi artigianali",
          "desc": "Funghi di stagione e carpaccio di porcini",
          "price": 21,
          "all": [
            1,
            3,
            6,
            7,
            11
          ]
        },
        {
          "name": "Guiso di lenticchie e chorizo",
          "price": 15,
          "all": [
            1,
            3,
            6,
            7,
            11
          ]
        }
      ]
    },
    {
      "id": "secondi",
      "title": {
        "it": "Secondi",
        "en": "Mains"
      },
      "note": {
        "it": "Terra e mare, alla brace e alla piastra.",
        "en": "Land and sea, grilled and seared."
      },
      "items": [
        {
          "name": "Controfiletto di Black Angus argentino",
          "desc": "Con chimichurri e scarola ripassata",
          "price": 29,
          "all": [
            12
          ],
          "sg": true,
          "sl": true
        },
        {
          "name": "Tonno rosso",
          "desc": "Tataki di tonno rosso - purè di patate dolci e sesamo",
          "price": 26,
          "all": [
            4,
            11,
            12
          ],
          "sg": true,
          "sl": true
        },
        {
          "name": "Filetto di pescato mediterraneo",
          "desc": "Alla piastra e coleslaw",
          "price": 26,
          "all": [
            3,
            4,
            10,
            12
          ],
          "sg": true,
          "sl": true
        },
        {
          "name": "Petto di pollo arrosto",
          "desc": "Insalatina di cavolo rosso marinato",
          "price": 18,
          "all": [
            12
          ],
          "sg": true,
          "sl": true
        }
      ]
    },
    {
      "id": "contorni",
      "title": {
        "it": "Contorni",
        "en": "Sides"
      },
      "items": [
        {
          "name": "Riso basmati",
          "price": 6,
          "sg": true,
          "sl": true
        },
        {
          "name": "Patate dolci",
          "desc": "Parmigiano - tajin",
          "price": 5,
          "all": [
            1,
            7,
            12
          ]
        },
        {
          "name": "Verdi",
          "desc": "Pak choi, broccoli, cavolo romanesco, cavolfiore, pickles di peperoncino",
          "price": 9,
          "all": [
            12
          ]
        },
        {
          "name": "Spinaci gratinati",
          "desc": "Al Parmigiano e kosho di agrumi",
          "price": 7,
          "all": [
            7,
            12
          ]
        },
        {
          "name": "Patate rustiche al rosmarino",
          "price": 7
        }
      ]
    },
    {
      "id": "insalatone",
      "title": {
        "it": "Insalatone",
        "en": "Big salads"
      },
      "note": {
        "it": "Fresche, piene, colorate.",
        "en": "Fresh, generous, colourful."
      },
      "items": [
        {
          "name": "Caesar",
          "desc": "Pollo - iceberg - misticanza - Parmigiano - salsa caesar - crostini",
          "price": 18,
          "all": [
            1,
            3,
            4,
            7,
            10
          ]
        },
        {
          "name": "Bowl proteica",
          "desc": "Tonno - uova sode - orzo - piselli - edamame - mais - verdure di stagione - dressing cocco e senape",
          "price": 21,
          "all": [
            1,
            3,
            4,
            6,
            10
          ],
          "sl": true,
          "frozen": true
        },
        {
          "name": "Ciro's salad",
          "desc": "Misticanza - pollo - avocado - pomodorini - Parmigiano",
          "price": 20,
          "all": [
            3,
            7,
            10,
            11
          ],
          "sg": true
        },
        {
          "name": "Insalata autunnale",
          "desc": "Con zucca arrosto, feta, cavolo nero e semi di zucca tostati",
          "price": 14,
          "all": [
            7,
            10,
            12
          ]
        }
      ]
    },
    {
      "id": "dolci",
      "title": {
        "it": "Dolci",
        "en": "Desserts"
      },
      "note": {
        "it": "Il finale, con un ultimo colpo di scena.",
        "en": "The finale, with one last twist."
      },
      "items": [
        {
          "name": "Cremoso alla nocciola",
          "desc": "Biscuit al cacao e dulce de leche",
          "price": 8,
          "all": [
            1,
            3,
            7,
            8
          ]
        },
        {
          "name": "Tiramisù",
          "price": 8,
          "all": [
            1,
            3,
            7
          ]
        },
        {
          "name": "Panettone al cioccolato",
          "desc": "E mousse di mascarpone",
          "price": 10,
          "all": [
            1,
            3,
            7,
            8
          ]
        },
        {
          "name": "Ananas fresco",
          "price": 5
        },
        {
          "name": "Bowl di frutti di bosco",
          "price": 8
        }
      ]
    },
    {
      "id": "bevande",
      "title": {
        "it": "Bevande",
        "en": "Drinks"
      },
      "items": [
        {
          "name": "Acqua",
          "price": 3
        },
        {
          "name": "Soft drinks",
          "price": 3.5
        },
        {
          "name": "Calice di vino",
          "price": 6
        },
        {
          "name": "Birre",
          "price": 5
        },
        {
          "name": "Amaro",
          "price": 5
        },
        {
          "name": "Caffè",
          "price": 2
        },
        {
          "name": "Caffè macchiato",
          "price": 2
        },
        {
          "name": "Cappuccino",
          "price": 2.5
        }
      ]
    }
  ]
};
