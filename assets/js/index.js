const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("navbar-toggle"),
  navClose = document.getElementById("navbar-close");

/* sidebar show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

/* sidebar hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}
