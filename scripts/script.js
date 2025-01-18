const navbarMenu = document.querySelector(".navbarBtn");
const navbarLinks = document.querySelector(".navbarLinks");

navbarMenu.addEventListener("click", () => {
  if (navbarLinks.classList.contains("inactive")) {
    navbarLinks.classList.remove("inactive");
    navbarLinks.classList.add("active");

    navbarMenu.name = "close-outline";
  } else {
    navbarLinks.classList.add("inactive");
    navbarLinks.classList.remove("active");

    navbarMenu.name = "menu-outline";
  }
});
