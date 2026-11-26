(function () {
  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  if (!window.PORTFOLIO) { document.body.insertAdjacentHTML("afterbegin", "<p style='padding:20px'>data.js failed to load.</p>"); return; }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function telHref(p) { return "tel:" + String(p).replace(/[^+\d]/g, ""); }
  function getEmail() {
    var D = window.PORTFOLIO;
    if (D.email_b64) {
      try { return atob(D.email_b64); } catch (e) {}
    }
    return D.email || "";
  }

  // ---------- Scroll reveal ----------
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 }) : null;
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
      if (io) io.observe(el); else el.classList.add("visible");
    });
  }

  // ---------- Render from window.PORTFOLIO (callable repeatedly) ----------
  function render() {
    var D = window.PORTFOLIO;
    document.title = D.name + " — " + D.headline.split("|")[0].trim();
    $("location").textContent = D.location;
    $("name").textContent = D.name;
    $("headline").textContent = D.headline;
    $("subheadline").textContent = D.subheadline;
    $("resume-link").href = D.resume;

    var quickHtml = '<li><a href="' + esc(D.linkedin) + '" target="_blank" rel="noopener noreferrer">in LinkedIn</a></li>';
    if (D.phone) {
      quickHtml += '<li><a href="' + telHref(D.phone) + '">☎ ' + esc(D.phone) + '</a></li>';
    }
    if (getEmail()) {
      quickHtml += '<li><a href="#contact" id="hero-email-btn">✉ Reveal Email</a></li>';
    }
    $("quick-links").innerHTML = quickHtml;

    var heroEmailBtn = $("hero-email-btn");
    if (heroEmailBtn) {
      heroEmailBtn.addEventListener("click", function (e) {
        var em = getEmail();
        if (!em) return;
        if (this.dataset.revealed !== "1") {
          e.preventDefault();
          this.textContent = "✉ " + em;
          this.href = "mailto:" + em;
          this.dataset.revealed = "1";
        }
      });
    }

    $("metrics").innerHTML = D.metrics.map(function (m) {
      return '<article class="card metric reveal"><strong>' + esc(m.value) + '</strong><h3>' + esc(m.title) + '</h3><p>' + esc(m.text) + '</p></article>';
    }).join("");
    $("filters").innerHTML = D.filters.map(function (f, i) {
      return '<button class="chip' + (i === 0 ? ' active' : '') + '" data-filter="' + esc(f.key) + '">' + esc(f.label) + '</button>';
    }).join("");
    $("projects-grid").innerHTML = D.projects.map(function (p) {
      return '<article class="card project reveal" data-category="' + esc((p.categories || []).join(" ")) + '">' +
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

    if (D.phone) {
      $("phone-btn").style.display = "";
      $("phone-btn").href = telHref(D.phone);
      $("phone-btn").textContent = D.phone;
    } else {
      $("phone-btn").style.display = "none";
    }

    $("email-link").href = "#contact";
    $("email-link").textContent = "Reveal Email Address";
    $("email-link").dataset.revealed = "";

    $("footer-name").textContent = D.name;
    $("year").textContent = new Date().getFullYear();
    observeReveals();
  }
  render();

  $("email-link").addEventListener("click", function (e) {
    var em = getEmail();
    if (!em) return;
    if (this.dataset.revealed !== "1") {
      e.preventDefault();
      this.textContent = em;
      this.href = "mailto:" + em;
      this.dataset.revealed = "1";
    }
  });

  // ---------- Project filters (delegated, survives re-render) ----------
  $("filters").addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
    chip.classList.add("active");
    var f = chip.dataset.filter;
    document.querySelectorAll(".project").forEach(function (card) {
      var show = f === "all" || card.dataset.category.split(" ").indexOf(f) !== -1;
      card.classList.toggle("hidden", !show);
      if (show) card.classList.add("visible");
    });
  });

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

  // ---------- Copy email ----------
  var status = $("copy-status");
  $("copy-email").addEventListener("click", function () {
    var email = getEmail();
    function done(ok) {
      status.textContent = ok ? "Email copied to clipboard!" : "Copy failed — " + email;
      setTimeout(function () { status.textContent = ""; }, 2500);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
    } else {
      var t = document.createElement("textarea");
      t.value = email; document.body.appendChild(t); t.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(t); done(ok);
    }
  });

  // =====================================================
  // Hidden admin resume updater
  // Opens via 5 taps on #name within 2s, or ?admin=true
  // =====================================================
  var GEMINI_MODELS = ["gemini-3.1-flash-lite", "gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-3.8-flash"];
  var REPO = "arunodhay-pk/arunodhay-portfolio", BRANCH = "main";
  var modal = $("admin-modal"), logEl = $("admin-log"), busy = false;

  function ls(k, v) {
    try { if (v === undefined) return localStorage.getItem(k) || ""; localStorage.setItem(k, v); } catch (e) { return ""; }
  }
  function openAdmin() {
    $("admin-gemini").value = ls("gemini_api_key");
    $("admin-github").value = ls("github_pat");
    modal.hidden = false;
  }
  function closeAdmin() { if (!busy) modal.hidden = true; }
  function log(msg) { logEl.textContent += msg + "\n"; logEl.scrollTop = logEl.scrollHeight; }

  var taps = [];
  $("name").addEventListener("click", function () {
    var now = Date.now();
    taps.push(now);
    taps = taps.filter(function (t) { return now - t <= 2000; });
    if (taps.length >= 5) { taps = []; openAdmin(); }
  });
  if (new URLSearchParams(location.search).get("admin") === "true") openAdmin();
  $("admin-close").addEventListener("click", closeAdmin);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeAdmin(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAdmin(); });

  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(String(r.result).split(",")[1]); };
      r.onerror = function () { reject(new Error("Could not read file")); };
      r.readAsDataURL(file);
    });
  }
  function utf8ToBase64(str) {
    var bytes = new TextEncoder().encode(str), bin = "";
    for (var i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    return btoa(bin);
  }

  // ---- PDF.js: extract text in the browser (fast), fall back to raw PDF if unavailable ----
  var PDFJS_URL = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
  var PDFJS_WORKER = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  function loadPdfJs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = PDFJS_URL;
      s.onload = function () {
        if (!window.pdfjsLib) return reject(new Error("pdfjsLib missing after load"));
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
        resolve(window.pdfjsLib);
      };
      s.onerror = function () { reject(new Error("Could not load PDF.js")); };
      document.head.appendChild(s);
    });
  }
  async function extractPdfText(file) {
    var lib = await loadPdfJs();
    var pdf = await lib.getDocument({ data: await file.arrayBuffer() }).promise;
    var out = [];
    for (var i = 1; i <= pdf.numPages; i++) {
      var content = await (await pdf.getPage(i)).getTextContent();
      var line = "";
      content.items.forEach(function (it) { line += it.str + (it.hasEOL ? "\n" : " "); });
      out.push(line);
    }
    return out.join("\n").replace(/[ \t]+\n/g, "\n").trim();
  }

  async function callGemini(key, pdfB64, resumeText) {
    var useText = !!resumeText;
    var prompt = "You are updating a personal portfolio website's data. Below is the CURRENT data as JSON; it is the exact schema template " +
      "(same keys, same structure, same value types). " + (useText ? "Read the RESUME TEXT below" : "Read the attached resume PDF") +
      " and return the updated JSON, revising sections " +
      "(headline, subheadline, linkedin, metrics, projects, experience, skills, certifications) to reflect the new resume. " +
      "Keep `resume` exactly \"assets/Arunodhay_PK.pdf\", keep `phone` as \"\", and keep `email_b64` unchanged for anti-spam privacy. " +
      "Keep `filters` and each project's `categories` values consistent with filter keys. " +
      "Do not invent facts that are not in the resume. Return ONLY valid JSON, no markdown, no commentary." +
      (useText ? "\n\nRESUME TEXT:\n" + resumeText : "") +
      "\n\nCURRENT DATA:\n" + JSON.stringify(window.PORTFOLIO);
    var parts = useText ? [{ text: prompt }] : [{ inline_data: { mime_type: "application/pdf", data: pdfB64 } }, { text: prompt }];

    async function request(model, genConfig) {
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, 45000);
      try {
        var r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + encodeURIComponent(key), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: ctrl.signal,
          body: JSON.stringify({ contents: [{ parts: parts }], generationConfig: genConfig })
        });
        return { res: r, body: await r.json().catch(function () { return {}; }) };
      } catch (err) {
        if (err.name === "AbortError") return { res: { ok: false, status: 408 }, body: { error: { message: "Timed out after 45s" } } };
        throw new Error("Gemini network error: " + err.message);
      } finally {
        clearTimeout(timer);
      }
    }

    var res, body, lastErr = "";
    for (var m = 0; m < GEMINI_MODELS.length; m++) {
      var model = GEMINI_MODELS[m];
      log("Trying " + model + "...");
      var r1 = await request(model, { responseMimeType: "application/json", thinkingConfig: { thinkingBudget: 0 } });
      if (r1.res.status === 400 && /thinking[\s_-]*(config|level|budget)/i.test((r1.body.error && r1.body.error.message) || "")) {
        r1 = await request(model, { responseMimeType: "application/json", thinkingConfig: { thinkingLevel: "minimal" } });
      }
      if (r1.res.status === 400 && /thinking[\s_-]*(config|level|budget)/i.test((r1.body.error && r1.body.error.message) || "")) {
        r1 = await request(model, { responseMimeType: "application/json" });
      }
      res = r1.res; body = r1.body;
      if (res.ok) break;
      lastErr = "Gemini error " + res.status + " (" + model + "): " + ((body.error && body.error.message) || "request failed");
      if (res.status === 503 || res.status === 429 || res.status === 404 || res.status === 408) {
        log(model + " unavailable (" + res.status + "), trying next...");
        continue;
      }
      throw new Error(lastErr);
    }
    if (!res || !res.ok) throw new Error(lastErr || "All Gemini models failed.");

    var cand = body.candidates && body.candidates[0];
    if (!cand || !cand.content || !cand.content.parts) {
      throw new Error("Gemini returned no content" + (cand && cand.finishReason ? " (finishReason: " + cand.finishReason + ")" : ""));
    }
    var text = cand.content.parts.filter(function (p) { return !p.thought; })
      .map(function (p) { return p.text || ""; }).join("");
    if (!text.trim()) throw new Error("Gemini returned no text after filtering thought parts");
    text = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
    var data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      throw new Error("Could not parse Gemini JSON (" + err.message + "). Response began: " + text.slice(0, 120));
    }
    var req = ["name", "headline", "subheadline", "linkedin", "metrics", "filters", "projects", "experience", "skills", "certifications"];
    req.forEach(function (k) { if (data[k] == null) throw new Error("Gemini JSON missing: " + k); });
    data.resume = "assets/Arunodhay_PK.pdf";
    data.phone = "";
    data.email_b64 = window.PORTFOLIO.email_b64 || "";
    delete data.email;
    return data;
  }

  async function ghPut(token, path, contentB64, message) {
    var url = "https://api.github.com/repos/" + REPO + "/contents/" + path;
    var headers = { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
    var get = await fetch(url + "?ref=" + BRANCH, { headers: headers, cache: "no-store" });
    var sha;
    if (get.ok) sha = (await get.json()).sha;
    else if (get.status !== 404) throw new Error("GitHub GET " + path + " failed: " + get.status);
    var put = await fetch(url, {
      method: "PUT", headers: Object.assign({ "Content-Type": "application/json" }, headers),
      body: JSON.stringify({ message: message, content: contentB64, branch: BRANCH, sha: sha })
    });
    if (!put.ok) {
      var b = await put.json().catch(function () { return {}; });
      throw new Error("GitHub PUT " + path + " failed: " + put.status + " " + (b.message || ""));
    }
  }

  $("admin-publish").addEventListener("click", async function () {
    if (busy) return;
    var gKey = $("admin-gemini").value.trim(), pat = $("admin-github").value.trim(), file = $("admin-file").files[0];
    logEl.textContent = "";
    if (!gKey || !pat || !file) { log("Please enter both keys and choose a PDF."); return; }
    if (file.type && file.type !== "application/pdf" && !/\.pdf$/i.test(file.name)) { log("File must be a PDF."); return; }
    ls("gemini_api_key", gKey); ls("github_pat", pat);
    busy = true; $("admin-publish").disabled = true;
    try {
      log("Reading PDF...");
      var pdfB64 = await fileToBase64(file);
      log("Extracting text from PDF...");
      var resumeText = "";
      try {
        resumeText = await extractPdfText(file);
        if (resumeText) log("Extracted " + resumeText.length + " characters.");
        else log("No text found in PDF; falling back to sending the raw PDF.");
      } catch (err) {
        log("PDF text extraction failed (" + err.message + "); falling back to sending the raw PDF.");
      }
      log("Parsing resume with Gemini...");
      var data = await callGemini(gKey, pdfB64, resumeText);
      window.PORTFOLIO = data; render();
      log("Page updated locally.");
      log("Updating data.js...");
      await ghPut(pat, "data.js", utf8ToBase64("window.PORTFOLIO = " + JSON.stringify(data, null, 2) + ";\n"), "Update portfolio data from new resume");
      log("Uploading PDF...");
      await ghPut(pat, "assets/Arunodhay_PK.pdf", pdfB64, "Update resume PDF");
      log("Published! Live site refreshes in ~60 seconds.");
    } catch (err) {
      log("ERROR: " + err.message);
    } finally {
      busy = false; $("admin-publish").disabled = false;
    }
  });
})();
        
