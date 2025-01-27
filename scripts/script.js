import { mainPage } from "../Data/main.js";

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

let defaultLang = localStorage.getItem("language");
localStorage.setItem("language", defaultLang);

// ------------------------------------------

const langAllBtns = document.querySelectorAll(".langBtn");

langAllBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < langAllBtns.length; i++) {
      langAllBtns[i].classList.remove("active");
    }

    defaultLang = btn.getAttribute("data-lang");
    localStorage.setItem("language", defaultLang);
    btn.classList.add("active");

    defaultLanguage();
  });

  if (btn.id === localStorage.getItem("language")) {
    for (let i = 0; i < langAllBtns.length; i++) {
      langAllBtns[i].classList.remove("active");
    }

    btn.classList.add("active");
  }
});

// ----------------------------------------------

function defaultLanguage() {
  innerText.headerContent.headerTitle.innerText =
    mainPage.header.title[defaultLang];
  innerText.headerContent.headerSubtitle.innerText =
    mainPage.header.subtitle[defaultLang];

  // --------------------------------------------------

  innerText.mainContent.titleBar.cafeTitle.innerText =
    mainPage.main.mainTitle[defaultLang];
  innerText.mainContent.titleBar.cafeInfo.innerText =
    mainPage.main.mainDescription[defaultLang];

  // ---------------------------------------------------

  innerText.mainContent.mainCategories.forEach((categoria, index) => {
    categoria.innerText = mainPage.categories[index][defaultLang];
  });

  // ----------------------------------------------------

  innerText.footerContent.footerText.innerText =
    mainPage.footer.orderOnline[defaultLang];
}

defaultLanguage();
