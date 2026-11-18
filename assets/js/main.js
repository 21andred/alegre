/* =========================================================
   ALEGRE — script principale
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Configurazione ---------- */
  // Inserire qui il link del sistema di prenotazione effettivo
  // (es. TheFork, Sevenrooms, OpenTable, Plateform…). Se vuoto, i pulsanti
  // "Prenota" portano alla sezione contatti della homepage.
  var BOOKING_URL = "";

  /* ---------- Traduzioni ---------- */
  var I18N = {
    it: {
      "skip": "Vai al contenuto",
      "nav.concept": "Concept", "nav.food": "Food", "nav.space": "Space",
      "nav.experiences": "Experiences", "nav.menu": "Menu", "nav.contact": "Contatti",
      "cta.book": "Prenota un tavolo", "cta.discover": "Scopri Alegre", "cta.menu": "Esplora il menu",
      "cta.menu.short": "Menu", "cta.home": "Home",
      "cta.fullmenu": "Ascolta tutto l'album: il menu completo →",
      "hero.claim": "A <em>different</em> kind of dining experience.",

      "concept.eyebrow": "Side A · The concept",
      "concept.title": "Not just a restaurant. <em>A place to experience.</em>",
      "concept.lead": "Fun dining: la cura del fine dining, senza le sue regole. Qualità, scoperta e convivialità, nello stesso piatto.",
      "concept.body": "Alegre nasce dentro MOYSA, un hub musicale e studio di registrazione milanese. Qui la cucina è il cuore, mentre musica, design e persone ne allargano il significato. È un posto per pranzare, fare aperitivo o restare a cena, senza formalità.",
      "pillar.food": "Una cucina senza confini: riferimenti internazionali, sapori riconoscibili, combinazioni inattese.",
      "pillar.experience": "Fun dining: curato, ma non rigido. Coinvolgente, ma mai artificioso.",
      "pillar.music": "Il legame con MOYSA: la musica è nel nostro DNA, fin dal primo giorno.",
      "pillar.space": "Materiali, vegetazione e una terrazza dove natura e tecnologia si incontrano.",
      "pillar.moments": "Pranzo, aperitivo, cena: ogni momento della giornata ha il suo ritmo.",

      "food.eyebrow": "Side B · The food",
      "food.title": "Creativity <em>on every plate.</em>",
      "food.lead": "A journey without borders. Culture diverse, combinazioni inattese, una visione riconoscibile.",
      "cat.piccoli": "Piatti piccoli", "cat.grandi": "Piatti grandi", "cat.dolci": "Dolci",
      "dish.pollo": "Un ingrediente familiare, trasformato: dolce, acido e tostato insieme.",
      "dish.gnocchi": "Una preparazione che conosci, con ingredienti dal carattere deciso.",
      "dish.crocchette": "Nere fuori, filanti dentro. Il primo assaggio da condividere.",
      "dish.pannacotta": "Un finale fatto di profumi e contrasti: floreale, fresco, tostato.",

      "chef.eyebrow": "The chef",
      "chef.quote": "“Different cultures, unexpected combinations, one distinctive vision.”",
      "chef.body": "Esperienze internazionali e un percorso fuori dagli schemi. La cucina di Matteo mette in dialogo tecniche e ingredienti di mondi diversi con sapori che riconosci al primo assaggio.",

      "space.eyebrow": "Side C · The space",
      "space.title": "Designed <em>to inspire.</em>",
      "space.lead": "Un ambiente moderno e una terrazza in cui verde, materiali e tecnologia convivono. Da guardare con calma, tra un piatto e l'altro.",
      "space.terrace": "La terrazza", "space.room": "La sala", "space.materials": "Materiali", "space.details": "Dettagli",

      "moysa.eyebrow": "Side D · The sound",
      "moysa.title": "Born inside <em>MOYSA.</em>",
      "moysa.lead": "Alegre vive dentro MOYSA, hub musicale e studio di registrazione di Milano.",
      "moysa.body": "Un luogo dove si creano dischi, si incontrano artisti e produttori, si sperimenta. Lo stesso spirito arriva in tavola: improvvisazione, ritmo e un pizzico di imprevedibilità.",
      "moysa.chip2": "Studio di registrazione", "moysa.chip3": "Aperto a tutti",

      "exp.eyebrow": "Side E · Experiences",
      "exp.title": "One place, <em>three rhythms.</em>",
      "exp.lunch.time": "Mezzogiorno", "exp.aperitivo.time": "Al tramonto", "exp.dinner.time": "La sera",
      "exp.lunch.body": "Piatti piccoli da condividere, insalatone e portate veloci, anche per una pausa di lavoro.",
      "exp.aperitivo.body": "In terrazza, quando la città rallenta. Un drink, qualcosa da assaggiare, buona musica.",
      "exp.dinner.body": "Il fun dining al completo: dal primo piatto piccolo all'ultimo dolce, il menu suona dall'inizio alla fine.",

      "book.eyebrow": "Encore",
      "book.title": "Your table <em>is waiting.</em>",
      "book.lead": "Prenota online in pochi secondi, oppure passa a trovarci in Via Watt.",
      "info.where": "Dove", "info.when": "Quando", "info.contact": "Contatti",
      "info.directions": "Indicazioni →", "info.services": "Pranzo · Aperitivo · Cena",

      "todo.bio": "Biografia completa da validare con lo chef",
      "todo.hours": "Orari e servizi attivi da confermare (colazione inclusa?)",
      "todo.hoursShort": "Orari da inserire",
      "todo.contacts": "Telefono · email · Instagram da inserire",
      "todo.booking": "Sistema di prenotazione da collegare",

      "menu.eyebrow": "The full album · tracklist",
      "menu.title": "The <em>menu.</em>",
      "menu.lead": "Sei lati, un solo disco. Ordina tanti piatti piccoli da condividere, oppure vai dritto alle portate grandi.",
      "filter.sg": "Senza glutine", "filter.sl": "Senza lattosio",
      "menu.empty": "Nessun piatto corrisponde ai filtri selezionati.",
      "menu.side": "Lato",
      "allergens.eyebrow": "Liner notes",
      "allergens.title": "Allergeni <em>&amp; note.</em>",
      "allergens.note": "SG: senza glutine · SL: senza lattosio · * materia prima surgelata all'origine. Per allergie e intolleranze chiedi sempre al nostro staff prima di ordinare: ti aiuteremo a scegliere.",
      "badge.all": "Allergeni"
    },

    en: {
      "skip": "Skip to content",
      "nav.concept": "Concept", "nav.food": "Food", "nav.space": "Space",
      "nav.experiences": "Experiences", "nav.menu": "Menu", "nav.contact": "Contact",
      "cta.book": "Book a table", "cta.discover": "Discover Alegre", "cta.menu": "Explore the menu",
      "cta.menu.short": "Menu", "cta.home": "Home",
      "cta.fullmenu": "Play the whole album: full menu →",
      "hero.claim": "A <em>different</em> kind of dining experience.",

      "concept.eyebrow": "Side A · The concept",
      "concept.title": "Not just a restaurant. <em>A place to experience.</em>",
      "concept.lead": "Fun dining: all the care of fine dining, none of its rules. Quality, discovery and conviviality on the same plate.",
      "concept.body": "Alegre was born inside MOYSA, a music hub and recording studio in Milan. Food is the heart of it, while music, design and people widen its meaning. Come for lunch, stay for aperitivo, linger over dinner, no formalities.",
      "pillar.food": "A cuisine without borders: international references, familiar flavours, unexpected combinations.",
      "pillar.experience": "Fun dining: carefully crafted, never stiff. Engaging, never contrived.",
      "pillar.music": "Our bond with MOYSA: music has been in our DNA since day one.",
      "pillar.space": "Materials, greenery and a terrace where nature and technology meet.",
      "pillar.moments": "Lunch, aperitivo, dinner: every time of day has its own rhythm.",

      "food.eyebrow": "Side B · The food",
      "food.title": "Creativity <em>on every plate.</em>",
      "food.lead": "A journey without borders. Different cultures, unexpected combinations, one distinctive vision.",
      "cat.piccoli": "Small plates", "cat.grandi": "Large plates", "cat.dolci": "Desserts",
      "dish.pollo": "A familiar ingredient, transformed: sweet, sour and toasty all at once.",
      "dish.gnocchi": "A dish you know, with ingredients of bold character.",
      "dish.crocchette": "Black outside, molten inside. The first bite to share.",
      "dish.pannacotta": "A finale of scents and contrasts: floral, fresh, toasted.",

      "chef.eyebrow": "The chef",
      "chef.quote": "“Different cultures, unexpected combinations, one distinctive vision.”",
      "chef.body": "International experience and an unconventional path. Matteo's cooking brings techniques and ingredients from different worlds into conversation with flavours you recognise from the first bite.",

      "space.eyebrow": "Side C · The space",
      "space.title": "Designed <em>to inspire.</em>",
      "space.lead": "A modern room and a terrace where greenery, materials and technology live together. Take it in slowly, between one plate and the next.",
      "space.terrace": "The terrace", "space.room": "The room", "space.materials": "Materials", "space.details": "Details",

      "moysa.eyebrow": "Side D · The sound",
      "moysa.title": "Born inside <em>MOYSA.</em>",
      "moysa.lead": "Alegre lives inside MOYSA, a music hub and recording studio in Milan.",
      "moysa.body": "A place where records are made, artists and producers meet, ideas get tested. The same spirit reaches the table: improvisation, rhythm and a touch of the unexpected.",
      "moysa.chip2": "Recording studio", "moysa.chip3": "Open to everyone",

      "exp.eyebrow": "Side E · Experiences",
      "exp.title": "One place, <em>three rhythms.</em>",
      "exp.lunch.time": "Midday", "exp.aperitivo.time": "At sunset", "exp.dinner.time": "Evening",
      "exp.lunch.body": "Small plates to share, big salads and quicker courses, perfect for a work break too.",
      "exp.aperitivo.body": "On the terrace, as the city slows down. A drink, something to nibble, good music.",
      "exp.dinner.body": "The full fun dining experience: from the first small plate to the last dessert, the menu plays start to finish.",

      "book.eyebrow": "Encore",
      "book.title": "Your table <em>is waiting.</em>",
      "book.lead": "Book online in seconds, or come and find us in Via Watt.",
      "info.where": "Where", "info.when": "When", "info.contact": "Contact",
      "info.directions": "Directions →", "info.services": "Lunch · Aperitivo · Dinner",

      "todo.bio": "Full bio to be approved by the chef",
      "todo.hours": "Opening hours and services to be confirmed (breakfast too?)",
      "todo.hoursShort": "Opening hours TBC",
      "todo.contacts": "Phone · email · Instagram TBC",
      "todo.booking": "Booking system to be connected",

      "menu.eyebrow": "The full album · tracklist",
      "menu.title": "The <em>menu.</em>",
      "menu.lead": "Six sides, one record. Order lots of small plates to share, or go straight for the large ones.",
      "filter.sg": "Gluten free", "filter.sl": "Lactose free",
      "menu.empty": "No dishes match the selected filters.",
      "menu.side": "Side",
      "allergens.eyebrow": "Liner notes",
      "allergens.title": "Allergens <em>&amp; notes.</em>",
      "allergens.note": "SG: gluten free · SL: lactose free · * raw ingredient frozen at source. If you have allergies or intolerances, please always ask our staff before ordering: we'll help you choose.",
      "badge.all": "Allergens"
    }
  };

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  var lang = store.get("alegre-lang") ||
    ((navigator.language || "it").toLowerCase().indexOf("it") === 0 ? "it" : "en");

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.it[key] || ""; }

  function applyLang(next) {
    lang = next === "en" ? "en" : "it";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    store.set("alegre-lang", lang);
    if (window.ALEGRE_MENU) renderMenu();
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* ---------- Header ---------- */
  var header = document.querySelector(".site-header");
  var isMenuPage = document.body.classList.contains("page-menu");
  function onScroll() {
    if (!header || isMenuPage) return;
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector(".menu-toggle");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? (lang === "it" ? "Chiudi il menu" : "Close menu") : (lang === "it" ? "Apri il menu" : "Open menu"));
    }
    document.body.style.overflow = open ? "hidden" : "";
  }
  if (toggle) toggle.addEventListener("click", function () { setMenu(!document.body.classList.contains("menu-open")); });
  document.querySelectorAll(".mobile-nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------- Prenotazione ---------- */
  if (BOOKING_URL) {
    document.querySelectorAll("[data-booking]").forEach(function (a) {
      a.href = BOOKING_URL; a.target = "_blank"; a.rel = "noopener";
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals(root) {
    var els = (root || document).querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Menu ---------- */
  var filters = { sg: false, sl: false };

  function fmtPrice(p) {
    var s = Number.isInteger(p) ? String(p) : p.toFixed(2).replace(/0$/, "");
    return (lang === "it" ? s.replace(".", ",") : s) + " €";
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  function renderMenu() {
    var root = document.getElementById("menu-root");
    var tabs = document.getElementById("menu-tabs");
    var data = window.ALEGRE_MENU;
    if (!root || !data) return;

    tabs.innerHTML = data.sections.map(function (s) {
      return '<a class="pill" href="#' + s.id + '"><b>' + s.side + "</b>" + esc(s.title[lang]) + "</a>";
    }).join("");

    var html = "";
    data.sections.forEach(function (s) {
      var n = 0;
      var items = s.items.map(function (it) {
        n++;
        var show = (!filters.sg || it.sg) && (!filters.sl || it.sl);
        var meta = "";
        if (it.sg) meta += '<span class="badge badge--sg">SG</span>';
        if (it.sl) meta += '<span class="badge badge--sl">SL</span>';
        if (it.all && it.all.length) {
          var names = it.all.map(function (a) { return data.allergens[a][lang]; }).join(", ");
          meta += '<span class="badge badge--all" title="' + esc(names) + '">' + t("badge.all") + " " + it.all.join(" · ") + "</span>";
        }
        return '<li class="menu-item"' + (show ? "" : " hidden") + ">" +
          '<span class="menu-item__no">' + String(n).padStart(2, "0") + "</span>" +
          '<h3 class="menu-item__name">' + esc(it.name) + (it.frozen ? "<sup>*</sup>" : "") + "</h3>" +
          '<span class="menu-item__price">' + fmtPrice(it.price) + "</span>" +
          (it.desc ? '<p class="menu-item__desc">' + esc(it.desc) + "</p>" : "") +
          (meta ? '<div class="menu-item__meta">' + meta + "</div>" : "") +
          "</li>";
      }).join("");

      var visible = s.items.some(function (it) { return (!filters.sg || it.sg) && (!filters.sl || it.sl); });

      html += '<section class="menu-section" id="' + s.id + '" data-color="' + s.color + '" aria-labelledby="t-' + s.id + '">' +
        '<div class="wrap">' +
        '<div class="menu-section__head">' +
        '<div class="side-disc" aria-hidden="true">' + s.side + "</div>" +
        '<h2 class="menu-section__title" id="t-' + s.id + '">' + esc(s.title[lang]) + "</h2>" +
        (s.note ? '<p class="menu-section__note">' + esc(s.note[lang]) + "</p>" : "<p class=\"menu-section__note\">" + t("menu.side") + " " + s.side + "</p>") +
        "</div>" +
        '<ul class="menu-list">' + items + (visible ? "" : '<li class="menu-empty">' + t("menu.empty") + "</li>") + "</ul>" +
        "</div></section>";
    });
    root.innerHTML = html;

    var list = document.getElementById("allergen-list");
    if (list) {
      list.innerHTML = Object.keys(data.allergens).map(function (k) {
        return "<li><b>" + k + "</b>" + esc(data.allergens[k][lang]) + "</li>";
      }).join("");
    }
    highlightTab(true);
  }

  document.querySelectorAll("[data-filter]").forEach(function (b) {
    b.addEventListener("click", function () {
      var f = b.getAttribute("data-filter");
      filters[f] = !filters[f];
      b.setAttribute("aria-pressed", String(filters[f]));
      renderMenu();
    });
  });

  var lastActive = null;
  function highlightTab(force) {
    var tabs = document.querySelectorAll("#menu-tabs .pill");
    if (!tabs.length) return;
    var current = null;
    document.querySelectorAll(".menu-section").forEach(function (sec) {
      if (sec.getBoundingClientRect().top < 200) current = sec.id;
    });
    if (current === lastActive && force !== true) return;
    lastActive = current;
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("href") === "#" + current;
      tab.classList.toggle("is-active", on);
      if (on && tab.parentElement.scrollWidth > tab.parentElement.clientWidth) {
        tab.parentElement.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" });
      }
    });
  }
  if (document.getElementById("menu-root")) window.addEventListener("scroll", highlightTab, { passive: true });

  /* ---------- Varie ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  applyLang(lang);
  observeReveals();
})();
