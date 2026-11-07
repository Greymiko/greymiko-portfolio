const $ = (id) => document.getElementById(id);
function el(tag, props = {}, kids = []) {
  const n = Object.assign(document.createElement(tag), props);
  [].concat(kids).forEach((k) => n.append(k));
  return n;
}
const driveView = (id) => "https://drive.google.com/file/d/" + id + "/view";
const drivePreview = (id) => "https://drive.google.com/file/d/" + id + "/preview";

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = $("nav");
menuBtn.addEventListener("click", () => {
  menuBtn.setAttribute("aria-expanded", nav.classList.toggle("open"));
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

// Active nav link while scrolling
const links = [...nav.querySelectorAll("a")];

// Sliding highlight that follows the mouse across the navigation
const ind = el("span", { className: "nav-ind" });
nav.prepend(ind);
function moveTo(a) {
  if (!a || getComputedStyle(ind).display === "none") return;
  ind.style.opacity = 1;
  ind.style.width = a.offsetWidth + "px";
  ind.style.height = a.offsetHeight + "px";
  ind.style.transform = "translate(" + a.offsetLeft + "px," + a.offsetTop + "px)";
  links.forEach((l) => l.classList.toggle("hot", l === a));
}
function rest() {
  const cur = links.find((l) => l.hasAttribute("aria-current"));
  if (cur) moveTo(cur);
  else { ind.style.opacity = 0; links.forEach((l) => l.classList.remove("hot")); }
}
links.forEach((a) => {
  a.addEventListener("mouseenter", () => moveTo(a));
  a.addEventListener("focus", () => moveTo(a));
  a.addEventListener("blur", rest);
});
nav.addEventListener("mouseleave", rest);
window.addEventListener("load", rest);
window.addEventListener("resize", rest);

// Light that follows the mouse across the hero
const hero = document.querySelector(".hero");
if (!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches)) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", e.clientX - r.left + "px");
    hero.style.setProperty("--my", e.clientY - r.top + "px");
  });
}
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => (a.getAttribute("href") === "#" + en.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));
    });
    rest();
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main > section").forEach((s) => io.observe(s));
}

// Promo video
$("promo-title").textContent = PROMO.title;
$("promo-desc").textContent = PROMO.desc;
$("promo-frame").src = drivePreview(PROMO.id);

// Portfolio gallery
const ALL = "All Works";
const grid = $("grid");
const filterBox = $("filters");
const viewer = $("viewer");
const zoomBtn = $("v-zoom");
const scroller = viewer.querySelector(".v-scroll");

function card(w) {
  if (w.type === "video") {
    return el("figure", { className: "item" }, [
      el("div", { className: "video" }, el("iframe", { src: drivePreview(w.id), title: w.title, loading: "lazy", allow: "fullscreen", allowFullscreen: true })),
      el("figcaption", {}, [
        el("b", { textContent: w.title }),
        el("a", { href: driveView(w.id), target: "_blank", rel: "noopener noreferrer", textContent: "Open on Google Drive" })
      ])
    ]);
  }
  const b = el("button", { className: "item", type: "button" }, [
    el("img", { src: w.thumb, alt: w.title, width: w.w, height: w.h, loading: "lazy" }),
    el("span", { className: "cap" }, [el("b", { textContent: w.title }), el("small", { textContent: w.categories.join(", ") })])
  ]);
  b.setAttribute("aria-label", "View " + w.title);
  b.addEventListener("click", () => openViewer(w));
  return b;
}

function render(filter) {
  grid.replaceChildren(...WORKS.filter((w) => filter === ALL || w.categories.includes(filter)).map(card));
}

function openViewer(w) {
  setZoom(false);
  $("v-title").textContent = w.title;
  $("v-img").src = w.src;
  $("v-img").alt = w.title;
  $("v-meta").textContent = w.categories.join(", ") + (w.desc ? " | " + w.desc : "");
  viewer.showModal();
}
function setZoom(on) {
  scroller.classList.toggle("zoomed", on);
  zoomBtn.setAttribute("aria-pressed", on);
}
zoomBtn.addEventListener("click", () => setZoom(!scroller.classList.contains("zoomed")));
$("v-img").addEventListener("click", () => setZoom(!scroller.classList.contains("zoomed")));
$("v-full").addEventListener("click", () => {
  const img = $("v-img");
  if (img.requestFullscreen) img.requestFullscreen().catch(() => {});
});
$("v-close").addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (e) => { if (e.target === viewer) viewer.close(); });

const present = CATEGORIES.filter((c) => WORKS.some((w) => w.categories.includes(c)));
[ALL, ...present].forEach((name, i) => {
  const b = el("button", { type: "button", textContent: name });
  b.setAttribute("aria-pressed", i === 0);
  b.addEventListener("click", () => {
    filterBox.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    grid.classList.add("swap");
    setTimeout(() => { render(name); grid.classList.remove("swap"); }, 200);
  });
  filterBox.append(b);
});
render(ALL);

// Contact form: opens the visitor's email app with the message filled in
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("f-name").value, from = $("f-mail").value;
  const body = $("f-msg").value + "\n\nFrom: " + name + " (" + from + ")";
  location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent("Portfolio message from " + name) + "&body=" + encodeURIComponent(body);
});

$("year").textContent = new Date().getFullYear();
