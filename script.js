const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");

menuButton?.addEventListener("click", () => {
  header?.classList.toggle("is-open");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header?.classList.remove("is-open");
  });
});

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
