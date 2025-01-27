import { mainPage } from "../Data/index.js";

// ------------------------------------------

let innerText = {
  headerContent: {
    headerTitle: document.getElementById("cafeTitle"),
    headerSubtitle: document.getElementById("cafeSubtitle"),
  },
  mainContent: {
    titleBar: {
      cafeTitle: document.getElementById("main-cafeTitle"),
      cafeInfo: document.getElementById("main-cafeInfo"),
    },
    mainCategories: document.querySelectorAll(".nav-categories"),
  },
  footerContent: {
    footerText: document.getElementById("footer-text"),
  },
};

// ------------------------------------------

// ------------------------------------------

const langAllBtns = document.querySelectorAll(".langBtn");

langAllBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < langAllBtns.length; i++) {
      langAllBtns[i].classList.remove("active");
    }

    if (btn.id === "hy") {
      innerText.headerContent["headerTitle"].innerText =
        mainPage.header.title["hy"];
      innerText.headerContent["headerSubtitle"].innerText =
        mainPage.header.subtitle["hy"];

      // ----------------------------------------------------

      innerText.mainContent.titleBar.cafeTitle.innerText =
        mainPage.main.mainTitle["hy"];
      innerText.mainContent.titleBar.cafeInfo.innerText =
        mainPage.main.mainDescription["hy"];

      mainPage.categories.forEach((categoria, index) => {
        innerText.mainContent.mainCategories[index].innerText =
          mainPage.categories[index]["hy"];
      });

      //   ---------------------------------------------------

      innerText.footerContent.footerText.innerText =
        mainPage.footer.orderOnline["hy"];

      // -----------------------------------------------------

      btn.classList.add("active");
    } else if (btn.id === "ru") {
      innerText.headerContent["headerTitle"].innerText =
        mainPage.header.title["ru"];
      innerText.headerContent["headerSubtitle"].innerText =
        mainPage.header.subtitle["ru"];

      // ----------------------------------------------------

      innerText.mainContent.titleBar.cafeTitle.innerText =
        mainPage.main.mainTitle["ru"];
      innerText.mainContent.titleBar.cafeInfo.innerText =
        mainPage.main.mainDescription["ru"];

      mainPage.categories.forEach((categoria, index) => {
        innerText.mainContent.mainCategories[index].innerText =
          mainPage.categories[index]["ru"];
      });

      //   ---------------------------------------------------

      innerText.footerContent.footerText.innerText =
        mainPage.footer.orderOnline["ru"];

      // -----------------------------------------------------

      btn.classList.add("active");
      localStorage.setItem("active", btn.innerText);
    } else {
      innerText.headerContent["headerTitle"].innerText =
        mainPage.header.title["en"];
      innerText.headerContent["headerSubtitle"].innerText =
        mainPage.header.subtitle["en"];

      // ----------------------------------------------------

      innerText.mainContent.titleBar.cafeTitle.innerText =
        mainPage.main.mainTitle["en"];
      innerText.mainContent.titleBar.cafeInfo.innerText =
        mainPage.main.mainDescription["en"];

      mainPage.categories.forEach((categoria, index) => {
        innerText.mainContent.mainCategories[index].innerText =
          mainPage.categories[index]["en"];
      });

      //   ---------------------------------------------------

      innerText.footerContent.footerText.innerText =
        mainPage.footer.orderOnline["en"];

      // -----------------------------------------------------

      btn.classList.add("active");
    }
  });
});
