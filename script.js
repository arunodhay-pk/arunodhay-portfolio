(function () {
  var D = window.PORTFOLIO;
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  if (!D) { document.body.insertAdjacentHTML("afterbegin", "<p style='padding:20px'>data.js failed to load.</p>"); return; }

  // Escape text so edits in data.js can't break the page
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function telHref(p) { return "tel:" + String(p).replace(/[^+\d]/g, ""); }

  // ---------- Render from data.js ----------
  document.title = D.name + " — " + D.headline.split("|")[0].trim();
  $("location").textContent = D.location;
  $("name").textContent = D.name;
  $("headline").textContent = D.headline;
  $("subheadline").textContent = D.subheadline;
  $("resume-link").href = D.resume;
  $("quick-links").innerHTML =
    '<li><a href="mailto:' + esc(D.email) + '">✉ ' + esc(D.email) + '</a></li>' +
    '<li><a href="' + telHref(D.phone) + '">☎ ' + esc(D.phone) + '</a></li>' +
    '<li><a href="' + esc(D.linkedin) + '" target="_blank" rel="noopener noreferrer">in LinkedIn</a></li>';

  $("metrics").innerHTML = D.metrics.map(function (m) {
    return '<article class="card metric reveal"><strong>' + esc(m.value) + '</strong><h3>' + esc(m.title) + '</h3><p>' + esc(m.text) + '</p></article>';
  }).join("");

  $("filters").innerHTML = D.filters.map(function (f, i) {
    return '<button class="chip' + (i === 0 ? ' active' : '') + '" data-filter="' + esc(f.key) + '">' + esc(f.label) + '</button>';
  }).join("");

  $("projects-grid").innerHTML = D.projects.map(function (p) {
    return '<article class="card project reveal" data-category="' + esc(p.categories.join(" ")) + '">' +
      '<span class="org">' + esc(p.org) + '</span><h3>' + esc(p.title) + '</h3><dl>' +
      '<dt>Problem</dt><dd>' + esc(p.problem) + '</dd>' +
      '<dt>Solution</dt><dd>' + esc(p.solution) + '</dd>' +
      '<dt>Result</dt><dd>' + esc(p.result) + '</dd></dl></article>';
  }).join("");

  $("timeline").innerHTML = D.experience.map(function (e) {
    return '<li class="reveal"><span class="date">' + esc(e.dates) + '</span><h3>' + esc(e.role) + '</h3><p>' + esc(e.company) + ' · ' + esc(e.place) + '</p></li>';
  }).join("");

  $("skills-grid").innerHTML = D.skills.map(function (g) {
    return '<div class="card reveal"><h3>' + esc(g.group) + '</h3><ul class="tags">' +
      g.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul></div>';
  }).join("");

  $("certs").innerHTML = D.certifications.map(function (c) {
    return '<li class="reveal"><span class="badge">★</span><div>' + esc(c.name) + '<small>' + esc(c.date) + '</small></div></li>';
  }).join("");

  $("availability").textContent = "● " + D.availability;
  $("linkedin-btn").href = D.linkedin;
  $("phone-btn").href = telHref(D.phone);
  $("phone-btn").textContent = D.phone;
  $("email-link").href = "mailto:" + D.email;
  $("email-link").textContent = D.email;
  $("footer-name").textContent = D.name;
  $("year").textContent = new Date().getFullYear();

  // ---------- Theme toggle ----------
  $("theme-toggle").addEventListener("click", function () {
    var next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---------- Mobile menu ----------
  var menuBtn = $("menu-toggle"), links = $("nav-links");
  function setMenu(open) {
    links.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
  }
  menuBtn.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
  links.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // ---------- Project filters ----------
  var chips = document.querySelectorAll(".chip");
  var cards = document.querySelectorAll(".project");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      var f = chip.dataset.filter;
      cards.forEach(function (card) {
        var show = f === "all" || card.dataset.category.split(" ").indexOf(f) !== -1;
        card.classList.toggle("hidden", !show);
        if (show) card.classList.add("visible");
      });
    });
  });

  // ---------- Scroll reveal ----------
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---------- Copy email ----------
  var status = $("copy-status");
  $("copy-email").addEventListener("click", function () {
    function done(ok) {
      status.textContent = ok ? "Email copied to clipboard!" : "Copy failed — " + D.email;
      setTimeout(function () { status.textContent = ""; }, 2500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(D.email).then(function () { done(true); }, function () { done(false); });
    } else {
      var t = document.createElement("textarea");
      t.value = D.email; document.body.appendChild(t); t.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(t); done(ok);
    }
  });
})();
