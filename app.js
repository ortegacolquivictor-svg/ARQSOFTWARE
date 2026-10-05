/* =====================================================
   EDITA SOLO ESTA SECCIÓN
   ===================================================== */
const PERFIL = {
  name: "Victor Ruben Ortega Colqui",
  headline: "Estudiante de Ingeniería de Sistemas y desarrollador backend Java.",
  uni: "Universidad Peruana Los Andes",
  cycle: "VIII ciclo",
  about: "Escribe aquí 2 o 3 frases sobre ti: qué estudias, qué te interesa del desarrollo backend y qué tipo de oportunidad buscas (prácticas, empleo o proyectos).",
};

/* Frases que se escriben solas en el encabezado */
const FRASES = ["Desarrollador backend Java", "Arquitectura de software", "APIs REST con Spring Boot"];

const CONTACTO = [
  { icon: "bi-envelope",  label: "tu-correo@ejemplo.com", url: "mailto:tu-correo@ejemplo.com" },
  { icon: "bi-linkedin",  label: "LinkedIn",              url: "https://linkedin.com/in/tu-usuario" },
  { icon: "bi-github",    label: "GitHub",                url: "https://github.com/tu-usuario" },
  { icon: "bi-file-earmark-person", label: "Descargar CV", url: "cv.pdf" },
];

const HABILIDADES = [
  ["bi-cup-hot","Java"], ["bi-diagram-3","Spring Boot"], ["bi-database","PostgreSQL"],
  ["bi-box","Docker"], ["bi-git","Git y GitHub"], ["bi-braces-asterisk","API REST"],
  ["bi-diagram-2","UML"], ["bi-layers","Arquitectura en capas"],
];

/* Cada semana: [etiqueta, título, descripción, nombre PDF 1, nombre PDF 2]
   Archivos esperados:  semana-01/img1.png, img2.png, img3.png, pdf1.pdf, pdf2.pdf  */
const IMG_EXT = "png";
const UNIDADES = [
  { n: "Unidad I", t: "Conceptos e historias", w: [
    ["Introducción", "Introducción a la arquitectura", "Describe aquí qué trabajaste esta semana.", "Resumen", "Mapa mental"],
    ["Especificaciones", "Requerimientos y estándares", "Describe aquí qué trabajaste esta semana.", "Requerimientos", "Estándares"],
    ["Sistemas", "Análisis del sistema", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Historias de usuario", "Historias de usuario", "Describe aquí qué trabajaste esta semana.", "Historias", "Entregable"],
  ]},
  { n: "Unidad II", t: "Modelamiento avanzado", w: [
    ["POO", "Programación orientada a objetos", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Avance 50%", "Avance del proyecto", "Describe aquí qué trabajaste esta semana.", "Avance", "Documento 2"],
    ["Modelado", "Modelado UML", "Describe aquí qué trabajaste esta semana.", "Modelado", "UML"],
    ["Entrega", "Entrega de la unidad", "Describe aquí qué trabajaste esta semana.", "Entrega final", "Documento 2"],
  ]},
  { n: "Unidad III", t: "Patrones y estilos", w: [
    ["Patrones", "Patrones de diseño", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Capas", "Arquitectura en capas", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Avance 75%", "Avance del proyecto", "Describe aquí qué trabajaste esta semana.", "Avance", "Documento 2"],
    ["SOA", "Microservicios y SOA", "Describe aquí qué trabajaste esta semana.", "Documentación", "Documento 2"],
  ]},
  { n: "Unidad IV", t: "Calidad y despliegue", w: [
    ["Calidad", "Atributos de calidad", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Pruebas", "Pruebas de software", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Seguridad", "Seguridad", "Describe aquí qué trabajaste esta semana.", "Documento 1", "Documento 2"],
    ["Final", "Proyecto final", "Describe aquí qué trabajaste esta semana.", "Manual técnico", "Documento 2"],
  ]},
];
/* ===================== FIN DE LA SECCIÓN EDITABLE ===================== */

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ph = (t) => "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="#e8f1f8"/><text x="400" y="260" text-anchor="middle" font-family="sans-serif" font-size="30" fill="#52677b">${t}</text></svg>`);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Contenido ---------- */
document.querySelectorAll("[data-k]").forEach(el => el.textContent = PERFIL[el.dataset.k]);
$("#year").textContent = new Date().getFullYear();

$("#skills").innerHTML = HABILIDADES.map(([i, n]) => `<span class="skill"><i class="bi ${i}"></i>${esc(n)}</span>`).join("");

$("#links").innerHTML = CONTACTO.map(c =>
  `<a class="btn btn-outline-light me-2 mb-2" href="${esc(c.url)}" target="_blank" rel="noopener"><i class="bi ${c.icon} me-2"></i>${esc(c.label)}</a>`).join("");

let wk = 0;
$("#unitTabs").innerHTML = UNIDADES.map((u, i) =>
  `<li class="nav-item"><button class="nav-link ${i ? "" : "active"}" data-bs-toggle="tab" data-bs-target="#u${i}" role="tab">${esc(u.n)}<small>${esc(u.t)}</small></button></li>`).join("");

$("#unitPanes").innerHTML = UNIDADES.map((u, i) => `<div class="tab-pane fade ${i ? "" : "show active"}" id="u${i}" role="tabpanel">` +
  u.w.map(([tag, title, desc, p1, p2]) => {
    wk++;
    const n = String(wk).padStart(2, "0"), dir = `semana-${n}`;
    const imgs = [1, 2, 3].map(k =>
      `<div class="col-4"><img class="shot" src="${dir}/img${k}.${IMG_EXT}" alt="Semana ${n}, imagen ${k}" loading="lazy" onerror="this.onerror=null;this.src=ph('Imagen ${k}')"></div>`).join("");
    return `<article class="week"><div class="num">${n}</div><div>
      <span class="tag">${esc(tag)}</span><h3>${esc(title)}</h3><p>${esc(desc)}</p>
      <div class="row g-2 g-md-3 mb-2">${imgs}</div>
      <div class="pdfs"><a class="btn btn-outline-primary btn-sm" href="${dir}/pdf1.pdf" target="_blank"><i class="bi bi-file-earmark-pdf me-1"></i>${esc(p1)}</a>
      <a class="btn btn-outline-primary btn-sm" href="${dir}/pdf2.pdf" target="_blank"><i class="bi bi-file-earmark-pdf me-1"></i>${esc(p2)}</a></div>
    </div></article>`;
  }).join("") + `</div>`).join("");

/* ---------- Imagen ampliada ---------- */
const modal = new bootstrap.Modal("#imgModal");
document.addEventListener("click", e => {
  const im = e.target.closest(".shot");
  if (im) { $("#modalImg").src = im.src; $("#modalImg").alt = im.alt; modal.show(); }
});

/* ---------- Partículas ---------- */
(function () {
  const canvas = $("#particles");
  const ctx = canvas.getContext("2d");
  const hero = canvas.parentElement;
  const COLOR_DOT = "rgba(242,169,0,.85)";   // color de los puntos
  const COLOR_LINE = "0,170,240";            // color de las líneas (RGB)
  const DIST = 120;                          // distancia máxima para unir puntos
  let w, h, parts = [], mouse = { x: null, y: null }, running = true;

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = hero.clientWidth; h = hero.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(90, Math.floor(w * h / 14000));   // más pequeño = más partículas
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5,
      r: Math.random() * 1.8 + .8
    }));
  }

  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = COLOR_DOT; ctx.fill();
    }
    for (let i = 0; i < parts.length; i++) {
      const a = parts[i];
      for (let j = i + 1; j < parts.length; j++) {
        const b = parts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < DIST) {
          ctx.strokeStyle = `rgba(${COLOR_LINE},${.35 * (1 - d / DIST)})`;
          ctx.lineWidth = 1; ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      if (mouse.x !== null) {
        const d = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (d < 160) {
          ctx.strokeStyle = `rgba(242,169,0,${.5 * (1 - d / 160)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
    }
    if (!reduceMotion) requestAnimationFrame(frame);
  }

  hero.addEventListener("mousemove", e => {
    const r = hero.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = null; });
  addEventListener("resize", resize);

  // Pausa la animación cuando el hero no se ve (ahorra batería)
  new IntersectionObserver(([e]) => {
    const was = running; running = e.isIntersecting;
    if (running && !was) frame();
  }).observe(hero);

  resize(); frame();
})();

/* ---------- Texto que se escribe solo ---------- */
(function () {
  const el = $("#typed");
  if (reduceMotion) { el.textContent = FRASES[0]; return; }
  let fi = 0, ci = 0, borrando = false;
  (function type() {
    const f = FRASES[fi];
    el.textContent = f.slice(0, ci);
    if (!borrando && ci === f.length) { borrando = true; return setTimeout(type, 1500); }
    if (borrando && ci === 0) { borrando = false; fi = (fi + 1) % FRASES.length; }
    ci += borrando ? -1 : 1;
    setTimeout(type, borrando ? 40 : 80);
  })();
})();

/* ---------- Barra de progreso y navbar ---------- */
addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.width = (scrollY / max * 100) + "%";
  $(".navbar").classList.toggle("scrolled", scrollY > 10);
}, { passive: true });

/* ---------- Aparición al hacer scroll ---------- */
(function () {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .15 });
  document.querySelectorAll(".sec-title,.sec-sub,.skill,.info-row,.week,#links a").forEach(el => {
    el.classList.add("reveal");
    if (el.matches(".skill,#links a")) {
      const idx = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = Math.min(idx, 8) * 70 + "ms";
    }
    io.observe(el);
  });
})();