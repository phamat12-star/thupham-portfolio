/* Draft renderer. Reads everything from window.PORTFOLIO (data.js). */
(function () {
  "use strict";
  var D = window.PORTFOLIO;
  // Show projects in the order set by each project's `order` field.
  D.projects = D.projects.slice().sort(function (a, b) { return a.order - b.order; });
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmt(v, dec) {
    return Number(v).toLocaleString("en-US", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  }
  function num(k) {
    // Renders "−25%", "+10%", "130K+" etc. Count-up runs on data-count.
    var pre = esc(k.prefix || ""), suf = esc(k.suffix || "");
    return pre + '<span data-count="' + k.value + '" data-dec="' + (k.dec || 0) + '">' + fmt(k.value, k.dec) + "</span>" + suf;
  }
  function pending(text) {
    return '<div class="pending"><b>To add:</b> ' + esc(text) + "</div>";
  }
  function $(id) { return document.getElementById(id); }

  /* ---------- Home ---------- */
  if ($("hero-intro")) {
    var P = D.person;
    $("hero-intro").textContent = P.intro;
    $("cv-link").setAttribute("href", P.cvFile);
    $("hero-contact").innerHTML =
      '<a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a> · <a href="tel:' + esc(P.phone) + '">' + esc(P.phoneDisplay) + '</a> · <span>' + esc(P.location) + "</span>";

    $("hero-stats").innerHTML = D.stats.map(function (s) {
      return '<div class="stat"><div class="num">' + num(s) + '</div><div class="lbl">' + esc(s.label) + '</div><div class="note">' + esc(s.note) + "</div></div>";
    }).join("");

    $("expertise-grid").innerHTML = D.expertise.map(function (x) {
      return '<article class="card reveal"><div class="no">' + esc(x.no) + "</div><h3>" + esc(x.title) + "</h3><p class=\"muted\">" + esc(x.desc) + "</p><ul>" +
        x.skills.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul></article>";
    }).join("");

    $("work-grid").innerHTML = D.projects.map(function (p) {
      // `card` overrides the home-page card only; the project page keeps the full data.
      var f = p.facts || {};
      var c = p.card || {};
      var thumb = p.cover
        ? '<img src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" loading="lazy" width="800" height="450">'
        : '<span class="thumb-empty">Images to add</span>';
      var metrics = (c.results || p.results.slice(0, 3)).map(function (r) {
        return '<div class="m"><div class="v">' + num(r) + '</div><div class="l">' + esc(r.label) + "</div></div>";
      }).join("");
      return '<a class="work reveal" href="project.html?id=' + esc(p.id) + '">' +
        '<div class="thumb">' + thumb + '<span class="cat">' + esc(p.category) + '</span><span class="big-no">' + esc(p.no) + "</span></div>" +
        '<div class="body">' +
          '<div class="meta">' + [c.company || f.company, f.period, f.role ? "Role: " + f.role : ""].filter(Boolean).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
          "<h3>" + esc(c.title || p.title) + "</h3>" +
          '<div class="tags">' + (c.tags || p.tags).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
          '<div class="metrics">' + metrics + "</div>" +
          '<span class="cta">View case study →</span>' +
        "</div></a>";
    }).join("");

    $("tools").innerHTML = Object.keys(D.tools).map(function (k) {
      return '<div class="reveal"><h4>' + esc(k) + "</h4><p>" + D.tools[k].map(esc).join(" · ") + "</p></div>";
    }).join("");

  }

  function moreCard(m) {
    var imgs = '<div class="v-imgs three">' + m.images.map(function (im) {
      return '<button type="button" class="zoom" data-full="' + esc(im.src) + '" aria-label="Enlarge: ' + esc(im.alt) + '"><img src="' + esc(im.src) + '" alt="' + esc(im.alt) + '" loading="lazy"></button>';
    }).join("") + "</div>";
    return '<article class="work reveal">' +
      '<div class="mc-left"><div class="thumb"><img src="' + esc(m.cover) + '" alt="' + esc(m.title) + '" loading="lazy" width="800" height="500"></div>' +
      '<div class="body"><div class="meta">' + m.meta.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
      "<h3>" + esc(m.title) + "</h3>" +
      '<div class="tags">' + m.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div></div></div>" +
      '<div class="mc-right"><div class="metrics">' + m.results.map(function (r) { return '<div class="m"><div class="v">' + num(r) + '</div><div class="l">' + esc(r.label) + "</div></div>"; }).join("") + "</div>" +
      imgs + "</div></article>";
  }

  /* ---------- Project page (case study layout) ---------- */
  if ($("project")) {
    var id = new URLSearchParams(window.location.search).get("id");
    var idx = -1;
    D.projects.forEach(function (x, i) { if (x.id === id) idx = i; });
    var p = D.projects[idx];
    var root = $("project");

    if (!p) {
      root.innerHTML = '<p class="crumb"><a href="index.html#work">← Back to all work</a></p><h1>Project not found</h1>';
    } else {
      document.title = p.title + " · Thu Pham (Shu)";
      var f = p.facts || {};
      var others = D.projects.filter(function (x) { return x.id !== p.id; });

      var facts = '<div class="facts">' +
        (f.company ? '<div><span>Company</span>' + esc(f.company) + "</div>" : "") +
        (f.role ? '<div><span>My role</span>' + esc(f.role) + "</div>" : "") +
        (f.period ? '<div><span>Timeline</span>' + esc(f.period) + "</div>" : "") +
        "</div>";

      var timeline = p.timeline && p.timeline.length
        ? '<div class="timeline-3">' + p.timeline.map(function (t) {
            return '<div class="tl"><div class="when">' + esc(t.when) + "</div><p>" + esc(t.what) + "</p></div>";
          }).join("") + "</div>"
        : pending("the campaign timeline (months, key moments).");

      var campaign = p.campaignResults && p.campaignResults.length
        ? '<div class="table-wrap stack"><table class="kpi-table"><thead><tr><th>Activity</th><th>Organic views</th><th>Engagements</th><th>Participants</th></tr></thead><tbody>' +
          p.campaignResults.map(function (r) {
            return "<tr><th>" + esc(r.name) + '</th><td data-label="Organic views">' + esc(r.views) + '</td><td data-label="Engagements">' + esc(r.engagements) + '</td><td data-label="Participants">' + esc(r.people) + "</td></tr>";
          }).join("") + "</tbody></table></div>" +
          (p.caseNote ? '<p class="note-small">' + esc(p.caseNote) + "</p>" : "")
        : "";

      var visualCards = function (list) {
        return list.map(function (v) {
          if (v.strip) {
            var statsHtml = v.strip.panels.filter(function (pn) { return pn.type === "stats"; }).map(function (pn) {
              return '<div class="strip-stats"><div class="v-stats">' + pn.stats.map(function (s) {
                return '<div class="v-stat' + (s.wide ? ' wide' : '') + '"><div class="v">' + esc(s.value) + '</div><div class="l">' + esc(s.label) + "</div></div>";
              }).join("") + '</div><a class="visit-btn" href="' + esc(pn.href) + '" target="_blank" rel="noopener">' + esc(pn.label) + " ↗</a></div>";
            }).join("");
            var panels = v.strip.panels.filter(function (pn) { return pn.type !== "stats"; }).map(function (pn) {
              return '<div class="strip-cell ' + esc(pn.cls) + '"><button type="button" class="zoom" data-full="' + esc(pn.src) + '" aria-label="Enlarge: ' + esc(pn.alt) + '"><img src="' + esc(pn.src) + '" alt="' + esc(pn.alt) + '" loading="lazy"></button></div>';
            }).join("");
            var groups = v.strip.groups.map(function (g) {
              return '<div class="link-group"><button type="button" class="zoom lg-zoom" data-full="' + esc(g.img.src) + '" aria-label="Enlarge: ' + esc(g.img.alt) + '"><img class="lg-img" src="' + esc(g.img.src) + '" alt="' + esc(g.img.alt) + '" loading="lazy"></button><div><h4>' + esc(g.title) + '</h4><ul>' + g.links.map(function (l) {
                return '<li><a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a></li>";
              }).join("") + "</ul></div></div>";
            }).join("");
            return '<article class="visual-card strip-card"><div class="strip-top"><div class="vtext"><h3>' + esc(v.title) + '</h3><div class="vnote">' + esc(v.note) + "</div>" + (v.lines && v.lines.length ? '<div class="vlines">' + v.lines.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + "</div>" : "") + statsHtml + '</div><div class="strip-row">' + panels + '</div></div><div class="strip-row strip-links">' + groups + "</div></article>";
          }
            var imgs = v.images
              ? '<div class="v-imgs' + (v.mosaic ? " mosaic" : v.grid2 ? " grid2" : v.stack ? " one" : v.lean ? " lean" : v.leanR ? " lean-r" : v.images.length === 4 ? " four" : "") + (v.leadWide ? " lead-wide" : "") + (v.wide ? " wide" : "") + (v.rowImages ? " row" : "") + (v.collage ? " collage" : "") + '">' + v.images.map(function (im) {
                  return '<button type="button" class="zoom" data-full="' + esc(im.src) + '" aria-label="Enlarge: ' + esc(im.alt) + '"><img src="' + esc(im.src) + '" alt="' + esc(im.alt) + '" loading="lazy"></button>';
                }).join("") + "</div>"
              : "";
            var stats = v.stats.length
              ? '<div class="v-stats' + (v.statsRow ? " one-row" : "") + '">' + v.stats.map(function (s) {
                  return '<div class="v-stat' + (s.wide ? ' wide' : '') + '"><div class="v">' + esc(s.value) + '</div><div class="l">' + esc(s.label) + "</div></div>";
                }).join("") + "</div>"
              : "";
            var items = !v.list.length ? "" : '<div class="v-list"><div class="vt">' + esc(v.listTitle) + "</div><ul>" + v.list.map(function (it) {
              var text = it.href ? '<a href="' + esc(it.href) + '" target="_blank" rel="noopener">' + esc(it.text) + " ↗</a>" : esc(it.text);
              return "<li><span>" + text + '</span><span class="vm">' + esc(it.meta) + "</span></li>";
            }).join("") + "</ul></div>";
            var btn = v.button ? '<a class="visit-btn" href="' + esc(v.button.href) + '" target="_blank" rel="noopener">' + esc(v.button.label) + "</a>" : "";
            var lines = v.lines && v.lines.length ? '<div class="vlines">' + v.lines.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + "</div>" : "";
            var winners = v.winners && v.winners.length ? '<div class="winner-row">' + v.winners.map(function (w) {
              return '<div class="winner-item"><button type="button" class="zoom" data-full="' + esc(w.src) + '" aria-label="Enlarge: ' + esc(w.alt) + '"><img src="' + esc(w.src) + '" alt="' + esc(w.alt) + '" loading="lazy"></button><div><a class="winner-title" href="' + esc(w.href) + '" target="_blank" rel="noopener">' + esc(w.title) + ' ↗</a><p class="winner-eng">' + esc(w.line1) + '</p><p class="winner-sub">' + esc(w.line2) + "</p></div></div>";
            }).join("") + "</div>" : "";
            var acts = v.acts && v.acts.length ? '<div class="act-row">' + v.acts.map(function (a) {
              return '<div class="act-item"><button type="button" class="zoom" data-full="' + esc(a.src) + '" aria-label="Enlarge: ' + esc(a.alt) + '"><img src="' + esc(a.src) + '" alt="' + esc(a.alt) + '" loading="lazy"></button><a class="act-link" href="' + esc(a.href) + '" target="_blank" rel="noopener">' + esc(a.title) + " ↗</a>" + (a.meta ? '<p class="act-meta">' + esc(a.meta) + "</p>" : "") + "</div>";
            }).join("") + "</div>" : "";
            var links = v.links && v.links.length ? '<div class="vlinks">' + v.links.map(function (l) { return '<a class="visit-btn" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>"; }).join("") + "</div>" : "";
            return '<article class="visual-card' + (v.images && v.images.length && !v.rowImages ? " has-imgs" : "") + '"><div class="vtext"><h3>' + esc(v.title) + '</h3><div class="vnote">' + esc(v.note) + "</div>" + lines + stats + items + links + btn + "</div>" + imgs + winners + acts + "</article>";
        }).join("");
      };
      var gallery = p.visuals
        ? '<div class="visuals">' + visualCards(p.visuals) + "</div>"
        : p.gallery.length
        ? '<div class="gallery">' + p.gallery.map(function (g) {
            return '<figure><button type="button" class="zoom" data-full="' + esc(g.src) + '" aria-label="Enlarge: ' + esc(g.alt) + '"><img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy"></button><figcaption><span>' + esc(g.caption) + '</span></figcaption><a class="visit-btn" href="' + esc(g.link) + '" target="_blank" rel="noopener">View post ↗</a></figure>';
          }).join("") + "</div>"
        : pending("project images, exported from Canva as PNG or JPG, with the source link for each.");

      var featuredBody = p.featured
        ? '<div class="feat-grid"><div class="feat-text"><p class="lead">' + esc(p.featured.overview) + "</p>" +
          (p.featured.sponsor ? '<p class="sponsor"><b>Sponsor:</b> ' + esc(p.featured.sponsor) + "</p>" : "") + "</div>" +
          (p.featured.image ? '<div class="feat-fig"><button type="button" class="zoom" data-full="' + esc(p.featured.image.src) + '" aria-label="Enlarge: ' + esc(p.featured.image.alt) + '"><img src="' + esc(p.featured.image.src) + '" alt="' + esc(p.featured.image.alt) + '" loading="lazy"></button></div>' : "") +
          "</div>" + (p.featured.button ? '<a class="visit-btn" href="' + esc(p.featured.button.href) + '" target="_blank" rel="noopener">' + esc(p.featured.button.label) + "</a>" : "")
        : "";
      var stat = function (r) { return '<div class="r"><div class="v">' + num(r) + '</div><div class="l">' + esc(r.label) + "</div></div>"; };
      var resultsHtml = (p.overviewResults ? "" : '<div class="results">' + p.results.map(stat).join("") + "</div>") +
        (p.featured && p.featured.results ? '<h3 class="res-h">' + esc(p.featured.title) + ' results</h3><div class="results">' + p.featured.results.map(function (r) { return '<div class="r"><div class="v">' + esc(r.value) + '</div><div class="l">' + esc(r.label) + "</div></div>"; }).join("") + "</div>" : "") + campaign;

      var testimonialHtml = p.testimonial
        ? '<div class="tm-grid"><button type="button" class="zoom tm-zoom" data-full="' + esc(p.testimonial.image.src) + '" aria-label="Enlarge: ' + esc(p.testimonial.image.alt) + '"><img src="' + esc(p.testimonial.image.src) + '" alt="' + esc(p.testimonial.image.alt) + '" loading="lazy"></button><div class="tm-text"><p class="tm-heading">' + esc(p.testimonial.heading) + '</p><blockquote class="tm-quote">“' + esc(p.testimonial.quote) + '”</blockquote><p class="tm-name"><b>' + esc(p.testimonial.name) + '</b> · ' + esc(p.testimonial.role) + '</p><p class="tm-body">' + esc(p.testimonial.text) + '</p></div></div>'
        : "";
      var seoHtml = p.seoArticles
        ? '<div class="seo-list">' + p.seoArticles.map(function (a) {
            return '<article class="seo-item"><p class="seo-client">' + esc(a.client) + '</p><h3>' + esc(a.title) + '</h3><p class="seo-type">' + esc(a.type) + '</p><a class="seo-more" href="' + esc(a.href) + '" target="_blank" rel="noopener">Read more ↗</a></article>';
          }).join("") + "</div>"
        : "";
      var learnings = p.learnings && p.learnings.length
        ? "<ol class=\"learn\">" + p.learnings.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ol>"
        : pending("2–3 lessons from this project.");

      var insight = p.insight
        ? '<blockquote class="insight">“' + esc(p.insight) + "”</blockquote>"
        : pending("a member quote or a behaviour insight that explains why the approach worked.");

      /* Strategy blocks (IMC-style case study), only when p.strategy exists */
      var S = p.strategy;
      var strategyBlocks = [];
      if (S) {
        var allocRows = function (list) {
          return '<div class="alloc">' + list.map(function (a) {
            return '<div class="al-row"><span class="al-l">' + esc(a.l) + '</span><span class="al-bar"><i style="width:' + Math.min(100, a.v) + '%"></i></span><span class="al-v">' + esc(String(a.v).replace(".", ",")) + "%</span></div>";
          }).join("") + "</div>";
        };
        if (S.objectives) strategyBlocks.push({ key: "objectives", title: "Campaign objectives", html: '<div class="obj">' + S.objectives.map(function (o) {
          return '<div><small>' + esc(o.k) + "</small><p>" + esc(o.t) + "</p></div>";
        }).join("") + "</div>" });
        if (S.audience) strategyBlocks.push({ key: "audience", title: "Target audience & insight", html: '<div class="persona">' + S.audience.map(function (a) {
          return '<div><small>' + esc(a.tag) + "</small><b>" + esc(a.name) + "</b><p>" + esc(a.desc) + "</p></div>";
        }).join("") + "</div>" + (S.insight ? '<blockquote class="insight">“' + esc(S.insight) + '”<small>Consumer insight</small></blockquote>' : "") });
        if (S.approach) strategyBlocks.push({ key: "approach", title: "Strategic approach", html: '<div class="approach">' + S.approach.map(function (a, i) {
          return '<div><small>' + String(i + 1).padStart(2, "0") + "</small><b>" + esc(a.t) + "</b><p>" + esc(a.d) + "</p></div>";
        }).join("") + "</div>" });
        if (S.bigIdea) strategyBlocks.push({ key: "bigidea", title: "Big idea", html: '<div class="bigidea"><small>Big idea</small><h3>' + esc(S.bigIdea.title) + "</h3><p>" + esc(S.bigIdea.desc) + "</p>" +
          (S.bigIdea.chips ? '<div class="kf">' + S.bigIdea.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>" : "") + "</div>" });
        if (S.channels) strategyBlocks.push({ key: "channels", title: "Channel architecture", html: '<div class="layers">' + S.channels.map(function (c) {
          return '<div><div class="ly-n">' + esc(c.count) + '</div><b>' + esc(c.layer) + "</b><p>" + esc(c.goal) + '</p><span class="ly-k">KPI · ' + esc(c.kpi) + "</span></div>";
        }).join("") + "</div>" });
        if (S.phases) strategyBlocks.push({ key: "phases", title: "Roll-out", html: '<div class="phases">' + S.phases.map(function (ph) {
          return '<div><small>' + esc(ph.when) + "</small><b>" + esc(ph.t) + "</b><p>" + esc(ph.d) + "</p></div>";
        }).join("") + "</div>" });
        if (S.budget || S.kpis) {
          var B = S.budget;
          var budgetHtml = B ? '<div class="budget"><div class="bt"><small>' + esc(B.note) + "</small><b>" + esc(B.total) + "</b></div>" + allocRows(B.alloc) +
            (B.sub ? '<div class="bsub"><small>' + esc(B.subTitle) + "</small>" + allocRows(B.sub) + "</div>" : "") + "</div>" : "";
          var kpiHtml = S.kpis ? (S.kpiTitle ? '<p class="kpi-cap">' + esc(S.kpiTitle) + "</p>" : "") + '<div class="table-wrap stack"><table class="kpi-table"><thead><tr><th>Metric</th><th>Target</th><th>Actual</th><th>Assessment</th></tr></thead><tbody>' +
            S.kpis.map(function (k) { return "<tr><th>" + esc(k.m) + '</th><td data-label="Target">' + esc(k.target) + '</td><td data-label="Actual"><b>' + esc(k.actual) + '</b></td><td data-label="Assessment">' + esc(k.eval) + "</td></tr>"; }).join("") + "</tbody></table></div>" : "";
          strategyBlocks.push({ key: "budget", title: "Budget & KPI framework", html: budgetHtml + kpiHtml });
        }
      }
      var flowHtml = S ? '<div class="flow">' + ["Business problem", "Consumer insight", "Strategic solution", "Execution", "Measurable results"].map(function (f, i) {
        return "<div><small>0" + (i + 1) + "</small><b>" + f + "</b></div>";
      }).join("") + "</div>" : "";
      var challengeHtml = Array.isArray(p.challenge)
        ? '<ol class="nlist">' + p.challenge.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ol>"
        : p.challenge ? "<p>" + esc(p.challenge) + "</p>" : pending("the business challenge in one paragraph.");

      var hidden = p.hideSections || [];
      var blocks = [
        { key: "overview", title: "Overview", html: '<p class="lead">' + esc(p.context) + "</p>" + (p.chips ? '<div class="kf">' + p.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + "</div>" : "") + (p.brief ? '<p class="brief"><b>Brief:</b> ' + esc(p.brief) + "</p>" : "") + (p.overviewCover ? '<div class="ov-grid"><button type="button" class="zoom ov-zoom" data-full="' + esc(p.cover) + '" aria-label="Enlarge: ' + esc(p.title) + '"><img class="ov-cover" src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" width="1312" height="816" loading="lazy"></button>' + (p.overviewResults ? '<div class="results">' + p.results.map(stat).join("") + "</div>" : "") + "</div>" : "") + (p.overviewButton ? '<a class="visit-btn" href="' + esc(p.overviewButton.href) + '" target="_blank" rel="noopener">' + esc(p.overviewButton.label) + "</a>" : "") },
        { key: "challenge", title: S ? "Business challenge" : "Challenge", html: challengeHtml },
        { key: "insight", title: "Consumer insight", html: insight }
      ].concat(strategyBlocks).concat([
        { key: "actions", title: "What I did", html: '<ul class="bullets">' + p.actions.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>" },
        p.featured ? { key: "featured", title: p.featured.title, html: featuredBody } : null,
        { key: "timeline", title: "Timeline", html: timeline },
        { key: "results", title: "Results", html: resultsHtml },
        { key: "visuals", title: "Visuals", html: gallery },
        p.testimonial ? { key: "testimonial", title: "Testimonial", html: testimonialHtml } : null,
        p.seoArticles ? { key: "seo", title: "SEO writing", html: seoHtml } : null,
        { key: "learnings", title: S ? "Key learnings" : "Learnings", html: learnings }
      ]).filter(Boolean).filter(function (s) { return hidden.indexOf(s.key) === -1; });

      var body = blocks.map(function (s, i) {
        return '<section class="cs"><h2><span class="cs-no">' + String(i + 1).padStart(2, "0") + "</span> " + esc(s.title) + "</h2>" + s.html + "</section>";
      }).join("");

      var more = (p.id === "mastr-mode" && D.moreProjects)
        ? '<section class="cs"><h2><span class="cs-no">06</span> More social projects</h2><div class="work-grid">' + D.moreProjects.map(moreCard).join("") + "</div></section>"
        : "";

      root.innerHTML =
        '<p class="crumb"><a href="index.html#work">← All work</a></p>' +
        (p.pageCover ? '<img class="proj-cover" src="' + esc(p.cover) + '" alt="' + esc(p.title) + '" width="1312" height="816">' : "") +
        '<section class="proj-hero"><p class="eyebrow">Case study ' + esc(p.no) + "</p><h1>" + esc(p.title) + "</h1>" +
        '<div class="tags">' + p.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
        facts + "</section>" +
        flowHtml +
        body +
        more +
        '<h2 class="next-head">Other projects</h2><div class="next-grid">' + others.map(function (o) {
          var bg = o.cover ? '<i class="bgimg" style="background-image:url(\'' + esc(o.cover) + '\')"></i>' : "";
          return '<a class="next-card" href="project.html?id=' + esc(o.id) + '">' + bg + '<span>Project · ' + esc(o.no) + "</span><strong>" + esc(o.title) + " →</strong></a>";
        }).join("") + "</div>" +
        '<p><a class="btn ghost back" href="index.html#work">← Back to all work</a></p>';
    }
  }

  /* ---------- Lightbox: click a visual to enlarge it ---------- */
  function openLightbox(src, alt) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(alt) + '">';
    box.addEventListener("click", function () { box.remove(); });
    document.body.appendChild(box);
  }
  document.addEventListener("click", function (e) {
    var z = e.target.closest ? e.target.closest(".zoom") : null;
    if (z) openLightbox(z.getAttribute("data-full"), z.querySelector("img").getAttribute("alt"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll(".lightbox").forEach(function (b) { b.remove(); });
  });

  /* ---------- Count-up (skipped for reduced motion) ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = parseInt(el.getAttribute("data-dec") || "0", 10);
    if (reduce) return;
    var start = null, dur = 1200;
    function step(t) {
      if (!start) start = t;
      var k = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(target * eased, dec);
      if (k < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target, dec);
    }
    el.textContent = fmt(0, dec);
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          if (!en.target.__counted) { en.target.__counted = true; countUp(en.target); }
          cio.unobserve(en.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); rio.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { rio.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("in"); });
  }

  /* ---------- Reading progress + active nav ---------- */
  var bar = $("progress");
  window.addEventListener("scroll", function () {
    if (!bar) return;
    var h = document.documentElement;
    var pct = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1);
    bar.style.transform = "scaleX(" + pct.toFixed(3) + ")";
  }, { passive: true });

  var links = document.querySelectorAll(".nav-links a[href^='#']");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  if ("IntersectionObserver" in window && sections.length) {
    var nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { nio.observe(s); });
  }
})();
