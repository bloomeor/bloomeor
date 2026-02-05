const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

/* ================= GLASS BLUR ON SCROLL ================= */

const MAX_BLUR = 18;     // px
const MAX_OPACITY = 0.85;
const SCROLL_RANGE = 300; // px scroll to reach max effect

window.addEventListener("scroll", () => {
  const scrollY = Math.min(window.scrollY, SCROLL_RANGE);
  const progress = scrollY / SCROLL_RANGE;

  const blur = 6 + progress * MAX_BLUR;
  const opacity = 0.35 + progress * MAX_OPACITY;

  navbar.style.backdropFilter = `blur(${blur}px)`;
  navbar.style.webkitBackdropFilter = `blur(${blur}px)`;
  navbar.style.background = `linear-gradient(
    135deg,
    rgba(6, 12, 26, ${opacity}),
    rgba(10, 22, 48, ${opacity})
  )`;

  navbar.classList.toggle("scrolled", scrollY > 40);
});

/* ================= MOBILE MENU ================= */

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
