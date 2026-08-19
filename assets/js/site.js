const accents = {
  work:  { color: "#b5502c", soft: "rgba(181,80,44,0.12)" },
  write: { color: "#3f7d43", soft: "rgba(63,125,67,0.12)" },
  photo: { color: "#d98600", soft: "rgba(217,134,0,0.12)" }
};

const root = document.documentElement;
const body = document.body;
const navLinks = document.querySelectorAll(".navlink");
const isHome = body.dataset.home === "true";

function setAccent(facet) {
  const a = accents[facet];
  if (!a) return;
  root.style.setProperty("--accent", a.color);
  root.style.setProperty("--accent-soft", a.soft);
  body.dataset.facet = facet;
}

function setSpy(id) {
  navLinks.forEach((l) => l.classList.toggle("active", l.dataset.spy === id));
}

setAccent(body.dataset.facet || "work");

if (isHome) {
  const sections = document.querySelectorAll("header.hero, section[id], footer#contact");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id || "work";
      const facet = entry.target.dataset.facet || "work";
      setAccent(facet);
      setSpy(id);
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
  sections.forEach((s) => observer.observe(s));
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(img) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("open");
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("open");
}

document.querySelectorAll(".photo-grid img").forEach((img) => {
  img.addEventListener("click", () => openLightbox(img));
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

const toggle = document.querySelector(".nav-toggle");
const navlinks = document.getElementById("navlinks");
if (toggle && navlinks) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    navlinks.classList.toggle("open", !open);
  });
  navlinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      navlinks.classList.remove("open");
    });
  });
}

document.querySelectorAll('a[href*="#"]').forEach((link) => {
  const url = new URL(link.href, window.location.href);
  if (url.pathname.replace(/\/$/, "") !== window.location.pathname.replace(/\/$/, "")) return;
  if (!url.hash) return;
  const target = document.querySelector(url.hash);
  if (!target) return;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
    history.pushState(null, "", url.hash);
  });
});

if (location.hash) {
  const target = document.querySelector(location.hash);
  if (target) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: target.offsetTop - 70 });
    });
  }
}
