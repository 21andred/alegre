/* =========================================================
   ALEGRE MILANO — script principale
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Configurazione ---------- */
  // Link del sistema di prenotazione effettivo (TheFork, Sevenrooms, ecc.).
  // Se vuoto, i pulsanti "Prenota" portano alla sezione contatti.
  var BOOKING_URL = "";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Traduzioni ---------- */
  var I18N = {
    it: {
      "skip": "Vai al contenuto",
      "nav.concept": "Concept", "nav.space": "Spazi", "nav.food": "Cucina",
      "nav.menu": "Menu", "nav.contact": "Contatti",
      "cta.book": "Prenota", "cta.bookTable": "Prenota un tavolo", "cta.menu": "Scopri il menu",
      "cta.fullmenu": "Il menu completo",
      "hero.claim": "A different kind of dining experience.",
      "hero.scroll": "Scopri",

      "concept.label": "Il concept",
      "concept.title": "Non solo un ristorante. <em>Un luogo da <span class=\"brush\">vivere</span>.</em>",
      "concept.fun": "Fun dining è",
      "rot.1": "curiosità.", "rot.2": "convivialità.", "rot.3": "musica.", "rot.4": "sorpresa.", "rot.5": "leggerezza.",
      "concept.body": "La cura e la precisione della grande cucina, senza la sua rigidità. Ad Alegre si condivide, si assaggia, si resta un po' di più. Un ambiente sereno ma elevato, nato dentro MOYSA, dove la tavola incontra la musica e il design.",
      "pillar.food.t": "Una cucina senza confini",
      "pillar.food": "Riferimenti internazionali e sapori riconoscibili, in combinazioni inattese.",
      "pillar.exp.t": "Curato, mai rigido",
      "pillar.exp": "Qualità, scoperta e convivialità nello stesso gesto.",
      "pillar.music.t": "Nato dentro MOYSA",
      "pillar.music": "Un hub musicale e uno studio di registrazione come casa.",
      "pillar.space.t": "Natura e materia",
      "pillar.space": "Legno, spighe, luce calda e una terrazza tra verde e tecnologia.",

      "scene.label": "Una sera ad Alegre",
      "scene.title": "Si comincia a tavola. <em>Poi, si vedrà.</em>",
      "scene.body": "Un brindisi che si allunga, un piatto che passa di mano in mano, la musica che cresce piano. Ad Alegre la cena non ha un orario di fine: ha un ritmo. E a un certo punto, senza accorgertene, sei già dentro la serata.",
      "scene.soundOn": "Attiva l'audio", "scene.soundOff": "Disattiva l'audio",

      "spaces.label": "Gli spazi",
      "spaces.title": "Tre anime, <em>un indirizzo.</em>",
      "spaces.lead": "Ogni ambiente ha il suo ritmo. Scegli il tuo, o lasciati portare dalla serata.",
      "space.r.t": "Il Ristorante",
      "space.r": "Un ambiente sereno ma elevato, dove è nato il nostro concetto di cucina. Luce morbida, legno e una parete di spighe che accompagna la cena.",
      "space.r.note": "Pranzo e cena",
      "space.r.title": "Dove è nato <em>il Fun Dining.</em>",
      "space.r2": "Al centro del tavolo arrivano tanti piatti piccoli da condividere: si assaggia, si passa, si ordina ancora.",
      "space.d.t": "Il Dehor",
      "space.d": "La terrazza dove natura e tecnologia si incontrano. Il bancone è stampato in 3D con materiali recuperati: un dettaglio che racconta il nostro modo di guardare alla sostenibilità.",
      "space.d.note": "Aperitivo all'aperto",
      "space.d.title": "Natura e tecnologia, <em>all'aperto.</em>",
      "space.c.t": "Il Club",
      "space.c": "Uno spazio riservato, dove mixology, musica e le nostre tapas si uniscono tra le sale e i giardini.",
      "space.c.note": "Club privato",

      "food.label": "La cucina",
      "food.title": "Creatività <em>in ogni piatto.</em>",
      "food.lead": "Un viaggio senza confini: culture diverse, combinazioni inattese, una visione riconoscibile. Piatti piccoli da condividere e portate da gustare con calma.",
      "cat.piccoli": "Piatti piccoli", "cat.grandi": "Piatti grandi", "cat.dolci": "Dolci",

      "chef.label": "Lo chef",
      "chef.ph": "Ritratto in arrivo",
      "chef.quote": "Culture diverse, combinazioni inattese, una sola visione.",
      "chef.body": "Esperienze internazionali e un percorso fuori dagli schemi. La cucina di Matteo Gritti mette in dialogo tecniche e ingredienti di mondi lontani con sapori che riconosci al primo assaggio.",

      "moysa.title": "Born inside <em>MOYSA.</em>",
      "moysa.body": "Alegre vive dentro MOYSA, hub musicale e studio di registrazione di Milano: un luogo dove si incontrano artisti e produttori e dove si sperimenta. Lo stesso spirito arriva in tavola, con ritmo, improvvisazione e un pizzico di imprevedibilità.",
      "moysa.tag2": "Studio di registrazione",

      "moments.label": "I momenti",
      "moments.title": "Dal giorno <em>alla sera.</em>",
      "moments.lunch.time": "Mezzogiorno", "moments.lunch": "Pranzo",
      "moments.lunch.body": "Piatti piccoli da condividere, insalatone e portate per una pausa che vale il viaggio.",
      "moments.aperitivo.time": "Al tramonto",
      "moments.aperitivo.body": "In dehor, quando la città rallenta: un cocktail, qualcosa da assaggiare, la musica giusta.",
      "moments.dinner.time": "La sera", "moments.dinner": "Cena",
      "moments.dinner.body": "Il fun dining al completo, dal primo assaggio all'ultimo dolce. E poi, magari, il club.",

      "book.title": "Il tuo tavolo <em>ti aspetta.</em>",
      "book.lead": "Prenota online in pochi secondi, oppure scrivici per eventi e serate private.",
      "info.where": "Dove", "info.when": "Quando", "info.contact": "Contatti",
      "info.directions": "Indicazioni", "info.services": "Pranzo · Aperitivo · Cena",
      "footer.explore": "Esplora", "footer.inside": "dentro MOYSA",

      "todo.club": "Modalità di accesso al club da confermare",
      "todo.bio": "Biografia e ruolo da validare con lo chef",
      "todo.hours": "Orari e servizi attivi da confermare",
      "todo.hoursShort": "Orari da inserire",
      "todo.contacts": "Telefono, email e sistema di prenotazione da inserire",

      "menu.label": "La carta",
      "menu.title": "Il <em>menu.</em>",
      "menu.lead": "Tanti piatti piccoli da condividere al centro del tavolo, oppure una portata grande tutta per te. Le regole, qui, le scegli tu.",
      "filter.sg": "Senza glutine", "filter.sl": "Senza lattosio",
      "menu.empty": "Nessun piatto corrisponde ai filtri selezionati.",
      "menu.allergens": "Allergeni",
      "allergens.label": "Note",
      "allergens.title": "Allergeni <em>&amp; intolleranze.</em>",
      "allergens.note": "SG: senza glutine · SL: senza lattosio · * materia prima surgelata all'origine. In caso di allergie o intolleranze chiedi sempre al nostro staff prima di ordinare: ti aiuteremo a scegliere."
    },

    en: {
      "skip": "Skip to content",
      "nav.concept": "Concept", "nav.space": "Spaces", "nav.food": "Food",
      "nav.menu": "Menu", "nav.contact": "Contact",
      "cta.book": "Book", "cta.bookTable": "Book a table", "cta.menu": "Explore the menu",
      "cta.fullmenu": "The full menu",
      "hero.claim": "A different kind of dining experience.",
      "hero.scroll": "Discover",

      "concept.label": "The concept",
      "concept.title": "Not just a restaurant. <em>A place to <span class=\"brush\">experience</span>.</em>",
      "concept.fun": "Fun dining is",
      "rot.1": "curiosity.", "rot.2": "conviviality.", "rot.3": "music.", "rot.4": "surprise.", "rot.5": "lightness.",
      "concept.body": "All the care and precision of serious cooking, without the stiffness. At Alegre you share, you taste, you stay a little longer. A serene yet elevated space, born inside MOYSA, where the table meets music and design.",
      "pillar.food.t": "A cuisine without borders",
      "pillar.food": "International references and familiar flavours, in unexpected combinations.",
      "pillar.exp.t": "Crafted, never stiff",
      "pillar.exp": "Quality, discovery and conviviality in the same gesture.",
      "pillar.music.t": "Born inside MOYSA",
      "pillar.music": "A music hub and recording studio we call home.",
      "pillar.space.t": "Nature and texture",
      "pillar.space": "Wood, dried grasses, warm light and a terrace between greenery and technology.",

      "scene.label": "An evening at Alegre",
      "scene.title": "It starts at the table. <em>Then, we'll see.</em>",
      "scene.body": "A toast that lasts a little longer, a plate passed from hand to hand, music slowly rising. At Alegre dinner has no closing time, it has a rhythm. And at some point, without noticing, you're already part of the night.",
      "scene.soundOn": "Sound on", "scene.soundOff": "Sound off",

      "spaces.label": "The spaces",
      "spaces.title": "Three souls, <em>one address.</em>",
      "spaces.lead": "Every room has its own rhythm. Pick yours, or let the evening take you.",
      "space.r.t": "The Restaurant",
      "space.r": "A serene yet elevated room, where our way of cooking was born. Soft light, wood and a wall of wheat that sets the mood for dinner.",
      "space.r.note": "Lunch and dinner",
      "space.r.title": "Where Fun Dining <em>was born.</em>",
      "space.r2": "Lots of small plates land in the middle of the table, to share: you taste, pass them around, order again.",
      "space.d.t": "The Terrace",
      "space.d": "Where nature and technology meet. The bar counter is 3D-printed from reclaimed materials, a detail that speaks to how we think about sustainability.",
      "space.d.note": "Open-air aperitivo",
      "space.d.title": "Nature and technology, <em>open air.</em>",
      "space.c.t": "The Club",
      "space.c": "A private space where mixology, music and our tapas come together across the rooms and gardens.",
      "space.c.note": "Private club",

      "food.label": "The food",
      "food.title": "Creativity <em>on every plate.</em>",
      "food.lead": "A journey without borders: different cultures, unexpected combinations, one distinctive vision. Small plates to share and larger dishes to savour.",
      "cat.piccoli": "Small plates", "cat.grandi": "Large plates", "cat.dolci": "Desserts",

      "chef.label": "The chef",
      "chef.ph": "Portrait coming soon",
      "chef.quote": "Different cultures, unexpected combinations, one distinctive vision.",
      "chef.body": "International experience and an unconventional path. Matteo Gritti's cooking brings techniques and ingredients from distant worlds into conversation with flavours you recognise from the first bite.",

      "moysa.title": "Born inside <em>MOYSA.</em>",
      "moysa.body": "Alegre lives inside MOYSA, a music hub and recording studio in Milan: a place where artists and producers meet and ideas get tested. The same spirit reaches the table, with rhythm, improvisation and a touch of the unexpected.",
      "moysa.tag2": "Recording studio",

      "moments.label": "Moments",
      "moments.title": "From day <em>to night.</em>",
      "moments.lunch.time": "Midday", "moments.lunch": "Lunch",
      "moments.lunch.body": "Small plates to share, big salads and dishes that make a lunch break worth the trip.",
      "moments.aperitivo.time": "At sunset",
      "moments.aperitivo.body": "On the terrace as the city slows down: a cocktail, something to nibble, the right music.",
      "moments.dinner.time": "Evening", "moments.dinner": "Dinner",
      "moments.dinner.body": "The full fun dining experience, from the first bite to the last dessert. And then, perhaps, the club.",

      "book.title": "Your table <em>is waiting.</em>",
      "book.lead": "Book online in seconds, or get in touch for events and private evenings.",
      "info.where": "Where", "info.when": "When", "info.contact": "Contact",
      "info.directions": "Directions", "info.services": "Lunch · Aperitivo · Dinner",
      "footer.explore": "Explore", "footer.inside": "inside MOYSA",

      "todo.club": "Club access to be confirmed",
      "todo.bio": "Bio and title to be approved by the chef",
      "todo.hours": "Opening hours and services to be confirmed",
      "todo.hoursShort": "Opening hours TBC",
      "todo.contacts": "Phone, email and booking system TBC",

      "menu.label": "The menu",
      "menu.title": "The <em>menu.</em>",
      "menu.lead": "Lots of small plates to share in the middle of the table, or one large dish all to yourself. Here, you make the rules.",
      "filter.sg": "Gluten free", "filter.sl": "Lactose free",
      "menu.empty": "No dishes match the selected filters.",
      "menu.allergens": "Allergens",
      "allergens.label": "Notes",
      "allergens.title": "Allergens <em>&amp; intolerances.</em>",
      "allergens.note": "SG: gluten free · SL: lactose free · * raw ingredient frozen at source. If you have allergies or intolerances, please always ask our staff before ordering: we'll help you choose."
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

  /* ---------- Header + barra prenotazione ---------- */
  var header = document.querySelector(".site-header");
  var bookBar = document.querySelector(".book-bar");
  var isMenuPage = document.body.classList.contains("page-menu");
  var hero = document.querySelector(".hero");

  // Soglie calcolate solo al caricamento e al ridimensionamento, non a ogni scroll
  var headerLimit = 40, barLimit = 400, lastScrolled = null, lastBar = null;
  function measureHeader() {
    headerLimit = hero ? hero.offsetHeight - 90 : 40;
    barLimit = window.innerHeight * 0.6;
  }
  function onScroll() {
    var y = window.scrollY;
    if (header && !isMenuPage) {
      var sc = y > headerLimit;
      if (sc !== lastScrolled) { lastScrolled = sc; header.classList.toggle("is-scrolled", sc); }
    }
    if (bookBar && !isMenuPage) {
      var bv = y > barLimit;
      if (bv !== lastBar) { lastBar = bv; bookBar.classList.toggle("is-visible", bv); }
    }
  }
  measureHeader();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { measureHeader(); onScroll(); });
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

  /* ---------- Luce calda che segue il cursore (hero) ---------- */
  var glow = document.querySelector(".hero__glow");
  if (hero && glow && !reduceMotion) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      glow.style.setProperty("--gx", ((e.clientX - r.left) / r.width * 100) + "%");
      glow.style.setProperty("--gy", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  }

  /* ---------- Parola che ruota ---------- */
  var rot = document.querySelector(".rotator");
  if (rot && !reduceMotion) {
    var idx = 0;
    setInterval(function () {
      var words = rot.querySelectorAll("span");
      words[idx].classList.remove("is-on");
      idx = (idx + 1) % words.length;
      words[idx].classList.add("is-on");
    }, 2200);
  }

  /* ---------- Parallasse leggera ---------- */
  var par = document.querySelector("[data-parallax]");
  if (par && !reduceMotion) {
    var parSection = par.closest("section");
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var r = parSection.getBoundingClientRect();
        if (r.bottom > 0 && r.top < window.innerHeight) {
          var p = (r.top + r.height) / (window.innerHeight + r.height);
          par.style.transform = "translateY(" + ((p - 0.5) * 12) + "%)";
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Scena video guidata dallo scroll ----------
     Fasi (progresso 0→1 della sezione):
     0.02–0.18  la linea divide lo schermo
     0.10–0.26  compare il testo         0.80–0.94  svanisce
     0.20–0.36  compare il video (play)  0.76–0.90  svanisce (pausa) */
  var ramp = function (p, a, b) { return Math.min(1, Math.max(0, (p - a) / (b - a))); };
  var scenes = Array.prototype.map.call(document.querySelectorAll(".scene"), function (el) {
    return { el: el, video: el.querySelector("video"), wasHidden: true };
  });

  // Lettura di tutte le posizioni prima, scrittura degli stili poi (evita ricalcoli di layout).
  function measureScene(sc) {
    var r = sc.el.getBoundingClientRect();
    var vh = window.innerHeight;
    var range = sc.el.offsetHeight - vh;
    return {
      p: range > 0 ? Math.min(1, Math.max(0, -r.top / range)) : 0,
      onScreen: r.bottom > 0 && r.top < vh,
      near: r.bottom > -vh && r.top < vh * 2.5,
      pinned: r.top <= 1 && r.bottom >= vh - 1
    };
  }

  // Su mobile il video è visibile e parte appena il riquadro entra nello schermo
  // (niente riquadro nero mentre la scena sale); il testo continua a comparire in dissolvenza.
  var mobileMQ = window.matchMedia("(max-width: 960px)");

  function applyScene(sc, m) {
    var p = m.p;
    var mobile = mobileMQ.matches;
    var split = ramp(p, 0.02, 0.18);
    // Mobile: il testo compare e poi resta, uscendo dallo schermo insieme al video.
    var text = mobile ? ramp(p, 0.02, 0.14)
                      : Math.min(ramp(p, 0.10, 0.26), 1 - ramp(p, 0.80, 0.94));
    var vid = mobile ? 1 : Math.min(ramp(p, 0.20, 0.36), 1 - ramp(p, 0.76, 0.90));
    var key = split.toFixed(3) + "|" + text.toFixed(3) + "|" + vid.toFixed(3);
    if (key !== sc.last) {
      sc.last = key;
      var st = sc.el.style;
      st.setProperty("--split", split.toFixed(3));
      st.setProperty("--text", text.toFixed(3));
      st.setProperty("--video", vid.toFixed(3));
    }
    var video = sc.video;
    if (!video) return;
    // precarica il video quando la scena si avvicina, così è pronto quando compare
    if (m.near && !sc.primed) { sc.primed = true; video.preload = "auto"; try { video.load(); } catch (e) {} }

    // Mobile: 1 secondo di nero dopo l'ingresso della scena, poi il video compare in dissolvenza e parte.
    if (mobile) {
      if (m.onScreen) {
        if (!sc.live && !sc.timer) {
          sc.timer = setTimeout(function () {
            sc.timer = null; sc.live = true;
            try { video.currentTime = 0; } catch (e) {}
            var pr = video.play(); if (pr && pr.catch) pr.catch(function () {});
            sc.el.classList.add("is-live");
          }, 1000);
        }
      } else {
        if (sc.timer) { clearTimeout(sc.timer); sc.timer = null; }
        if (sc.live) { sc.live = false; sc.el.classList.remove("is-live"); }
        if (!video.paused) video.pause();
      }
      return;
    }
    if (sc.live || sc.timer) { clearTimeout(sc.timer); sc.timer = null; sc.live = false; sc.el.classList.remove("is-live"); }

    if (m.onScreen && vid > 0.02) {
      if (sc.wasHidden) { try { video.currentTime = 0; } catch (e) {} sc.wasHidden = false; }
      if (video.paused) { var pr = video.play(); if (pr && pr.catch) pr.catch(function () {}); }
    } else {
      if (!video.paused) video.pause();
      if (vid === 0) sc.wasHidden = true;
    }
  }

  var headerHidden = false;
  function updateScenes() {
    var metrics = scenes.map(measureScene);
    var pinned = false;
    scenes.forEach(function (sc, i) {
      var m = metrics[i];
      if (m.pinned) pinned = true;
      // le scene lontane dallo schermo vengono aggiornate solo una volta, poi ignorate
      if (!m.near && sc.idle) return;
      sc.idle = !m.near;
      applyScene(sc, m);
    });
    if (header && pinned !== headerHidden && !document.body.classList.contains("menu-open")) {
      headerHidden = pinned;
      header.classList.toggle("is-hidden", pinned);
    }
  }

  if (scenes.length) {
    if (reduceMotion) {
      scenes.forEach(function (sc) { if (sc.video) { sc.video.controls = true; sc.video.removeAttribute("loop"); } });
    } else {
      var sceneTick = false;
      window.addEventListener("scroll", function () {
        if (sceneTick) return; sceneTick = true;
        requestAnimationFrame(function () { updateScenes(); sceneTick = false; });
      }, { passive: true });
      window.addEventListener("resize", updateScenes);
      updateScenes();
    }

    scenes.forEach(function (sc) {
      var soundBtn = sc.el.querySelector(".scene__sound");
      var video = sc.video;
      if (!soundBtn || !video) return;
      soundBtn.addEventListener("click", function () {
        video.muted = !video.muted;
        var on = !video.muted;
        soundBtn.setAttribute("aria-pressed", String(on));
        var lbl = soundBtn.querySelector("[data-i18n]");
        lbl.setAttribute("data-i18n", on ? "scene.soundOff" : "scene.soundOn");
        lbl.innerHTML = t(on ? "scene.soundOff" : "scene.soundOn");
        if (on && video.paused && !reduceMotion) video.play();
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals() {
    var els = document.querySelectorAll(".reveal:not(.is-in), .img-reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Menu ---------- */
  var filters = { sg: false, sl: false };

  function fmtPrice(p) {
    var s = Number.isInteger(p) ? String(p) : p.toFixed(1);
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
      return '<a href="#' + s.id + '">' + esc(s.title[lang]) + "</a>";
    }).join("");

    var html = "";
    data.sections.forEach(function (s) {
      var visible = 0;
      var items = s.items.map(function (it) {
        var show = (!filters.sg || it.sg) && (!filters.sl || it.sl);
        if (show) visible++;
        var meta = "";
        if (it.sg) meta += '<span class="tag">SG</span>';
        if (it.sl) meta += '<span class="tag">SL</span>';
        if (it.all && it.all.length) {
          var names = it.all.map(function (a) { return data.allergens[a][lang]; }).join(", ");
          meta += '<span class="all" title="' + esc(names) + '">' + t("menu.allergens") + " " + it.all.join(" · ") + "</span>";
        }
        return '<li class="menu-item"' + (show ? "" : " hidden") + ">" +
          '<h3 class="menu-item__name">' + esc(it.name) + (it.frozen ? "<sup>*</sup>" : "") + "</h3>" +
          '<span class="menu-item__price">' + fmtPrice(it.price) + "</span>" +
          (it.desc ? '<p class="menu-item__desc">' + esc(it.desc) + "</p>" : "") +
          (meta ? '<div class="menu-item__meta">' + meta + "</div>" : "") +
          "</li>";
      }).join("");

      html += '<section class="menu-section" id="' + s.id + '" aria-labelledby="t-' + s.id + '">' +
        '<div class="wrap">' +
        '<div class="menu-section__head">' +
        '<h2 class="menu-section__title" id="t-' + s.id + '">' + esc(s.title[lang]) + "</h2>" +
        (s.note ? '<p class="menu-section__note">' + esc(s.note[lang]) + "</p>" : "") +
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
    lastActive = null;
    highlightTab();
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
  function highlightTab() {
    var tabs = document.querySelectorAll("#menu-tabs a");
    if (!tabs.length) return;
    var current = null;
    document.querySelectorAll(".menu-section").forEach(function (sec) {
      if (sec.getBoundingClientRect().top < 220) current = sec.id;
    });
    if (current === lastActive) return;
    lastActive = current;
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("href") === "#" + current;
      tab.classList.toggle("is-active", on);
      if (on && tab.parentElement.scrollWidth > tab.parentElement.clientWidth) {
        tab.parentElement.scrollTo({ left: tab.offsetLeft - 20, behavior: "smooth" });
      }
    });
  }
  if (document.getElementById("menu-root")) window.addEventListener("scroll", highlightTab, { passive: true });

  /* ---------- Varie ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  applyLang(lang);
  observeReveals();
})();
