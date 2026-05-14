const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");

menuButton?.addEventListener("click", () => {
  header?.classList.toggle("is-open");
});

document.querySelectorAll(".site-nav a, .nav-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
  });
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
});

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
