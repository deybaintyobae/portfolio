/* ============================================================
   JOHN VINCENT B. MADERAZO — Nursing Portfolio script.js
   ============================================================ */

// ── AOS (Animate on Scroll) ──────────────────────────────
const aosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in-view");
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll("[data-aos]")
  .forEach((el) => aosObserver.observe(el));

// ── SCROLL TO PAGE ────────────────────────────────────────
function scrollToPage(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── LIGHTBOX ──────────────────────────────────────────────
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

// Make all portfolio images open in lightbox on click
document
  .querySelectorAll(
    ".about-photo-img, .hobby-photo-img, .why-photo-img, .exp-photo-img, .doc-photo-img, .cover-photo-preview",
  )
  .forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => openLightbox(img.src));
  });

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}
lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

// ── PARALLAX on cover orbs ────────────────────────────────
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.querySelectorAll(".cover-orb").forEach((orb, i) => {
    orb.style.transform = `translateY(${scrollY * (0.06 + i * 0.03)}px)`;
  });
});

console.log(
  "%c✚ Portfolio — John Vincent B. Maderazo\nFundamentals of Nursing (RLE)",
  "color:#F59E0B;font-size:13px;font-weight:700;",
);
