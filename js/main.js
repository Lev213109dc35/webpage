(function () {
  "use strict";

  var SITE = window.SITE;
  var WORKS = window.WORKS || [];
  var STORAGE_KEY = "lang";
  var LANGS = ["hu", "en"];
  var lang = "hu";

  // ---- helpers -------------------------------------------------------------
  function storedLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      return LANGS.indexOf(v) !== -1 ? v : null;
    } catch (e) { return null; }
  }
  function storeLang(v) {
    try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* private mode */ }
  }
  // A text value is either a plain string or { hu: "...", en: "..." }.
  function t(value) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    return value[lang] != null ? value[lang] : (value.en || value.hu || "");
  }
  function ui(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, SITE.ui[lang]) || "";
  }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // ---- renderers -----------------------------------------------------------
  function renderTimeline(list, items) {
    list.textContent = "";
    items.forEach(function (it) {
      var li = el("li", "entry");
      li.appendChild(el("p", "entry-period", t(it.period)));
      var body = el("div", "entry-body");
      body.appendChild(el("h3", null, t(it.title)));
      if (it.subtitle) body.appendChild(el("p", "entry-sub", t(it.subtitle)));
      if (it.text) body.appendChild(el("p", null, t(it.text)));
      li.appendChild(body);
      list.appendChild(li);
    });
  }

  function renderSkills(dl) {
    dl.textContent = "";
    SITE.skills.forEach(function (group) {
      var row = el("div", "skill-row");
      row.appendChild(el("dt", null, t(group.label)));
      var dd = el("dd");
      var ul = el("ul", "chips");
      group.items.forEach(function (item) { ul.appendChild(el("li", null, t(item))); });
      dd.appendChild(ul);
      row.appendChild(dd);
      dl.appendChild(row);
    });
  }

  function renderWorks(ul) {
    ul.textContent = "";
    WORKS.forEach(function (w) {
      var li = el("li", "work");
      var head = el("div", "work-head");
      head.appendChild(el("h3", null, t(w.title)));
      if (w.year) head.appendChild(el("span", "work-year", w.year));
      li.appendChild(head);
      if (w.text) li.appendChild(el("p", null, t(w.text)));
      if (w.tags && w.tags.length) {
        var tags = el("ul", "chips chips-small");
        w.tags.forEach(function (tag) { tags.appendChild(el("li", null, t(tag))); });
        li.appendChild(tags);
      }
      if (w.file) {
        var a = el("a", "work-link", ui("open") + " →");
        a.href = w.file;
        if (/^https?:/i.test(w.file)) { a.target = "_blank"; a.rel = "noopener"; }
        li.appendChild(a);
      }
      ul.appendChild(li);
    });
  }

  function render() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = ui(n.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (n) {
      n.setAttribute("aria-label", ui(n.getAttribute("data-i18n-aria")));
    });

    var name = lang === "en" ? SITE.nameEn : SITE.name;
    document.querySelectorAll('[data-site="name"]').forEach(function (n) { n.textContent = name; });
    document.querySelectorAll('[data-site="photo-alt"]').forEach(function (n) { n.alt = name; });
    document.querySelectorAll('[data-site="email"]').forEach(function (n) {
      n.textContent = SITE.email;
      n.href = "mailto:" + SITE.email;
    });

    // One CV button per place, pointing at the file for the current language.
    var cvFile = SITE.cv[lang] || SITE.cv.en || SITE.cv.hu;
    var label = SITE.cv[lang] ? ui("cvButton") : ui("cvButtonFallback");
    document.querySelectorAll(".cv-link").forEach(function (a) {
      a.href = cvFile;
      a.setAttribute("download", cvFile.split("/").pop());
    });
    document.querySelectorAll("[data-cv-label]").forEach(function (n) {
      // The header button stays short; the "(English)" note goes on the larger buttons.
      var inHeader = n.closest(".site-header");
      n.textContent = inHeader ? ui("cvButton") : label;
      n.parentNode.title = SITE.cv[lang] ? "" : ui("cvButtonFallback");
    });

    document.querySelector('[data-render="about"]').textContent = t(SITE.about);
    renderTimeline(document.querySelector('[data-render="education"]'), SITE.education);
    renderTimeline(document.querySelector('[data-render="experience"]'), SITE.experience);
    renderSkills(document.querySelector('[data-render="skills"]'));
    renderWorks(document.querySelector('[data-render="works"]'));
    document.querySelectorAll("[data-works-only]").forEach(function (n) { n.hidden = WORKS.length === 0; });

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    document.getElementById("primary-nav").setAttribute("aria-label", lang === "en" ? "Main menu" : "Főmenü");
    updateMenuLabel();
    updateCompact();

    document.documentElement.lang = lang;
    document.title = name + (lang === "en" ? " – CV" : " – Önéletrajz");
  }

  function setLang(next) {
    if (LANGS.indexOf(next) === -1 || next === lang) return;
    lang = next;
    storeLang(lang);
    render();
  }

  // ---- mobile menu ---------------------------------------------------------
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");

  function menuOpen() { return header.classList.contains("menu-open"); }
  function updateMenuLabel() {
    toggle.setAttribute("aria-label", ui(menuOpen() ? "menuClose" : "menuOpen"));
  }
  function setMenu(open) {
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    updateMenuLabel();
  }

  toggle.addEventListener("click", function () { setMenu(!menuOpen()); });
  document.getElementById("primary-nav").addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuOpen()) { setMenu(false); toggle.focus(); }
  });
  // ---- compact header --------------------------------------------------------
  // Use the menu button below 1000px, and also whenever the links would not fit
  // between the name and the actions (e.g. longer Hungarian labels). This is
  // what keeps the links from ever sliding under the HU/EN switch.
  var nav = document.getElementById("primary-nav");
  function linksFit() {
    var items = nav.querySelectorAll("li:not([hidden])");
    var needed = 0;
    items.forEach(function (li) { needed += li.getBoundingClientRect().width; });
    needed += Math.max(0, items.length - 1) * (parseFloat(getComputedStyle(nav.firstElementChild).columnGap) || 0);
    return needed <= nav.clientWidth;
  }
  function updateCompact() {
    var compact = window.innerWidth < 1000;
    if (!compact) {
      header.classList.remove("compact");   // measure the full-width layout
      compact = !linksFit();
    }
    header.classList.toggle("compact", compact);
    if (!compact && menuOpen()) setMenu(false);
  }
  window.addEventListener("resize", updateCompact);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateCompact);

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  // ---- start: Hungarian unless the visitor chose English before -----------
  lang = storedLang() || "hu";
  render();
})();
