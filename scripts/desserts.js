import { mainPage } from "../Data/main.js";
import { menuPage } from "../Data/menuPages.js";

// -----------------------------------------------

let innerText = {
  headerContent: {
    headerTitle: document.getElementById("cafeTitle"),
    headerSubtitle: document.getElementById("cafeSubtitle"),
  },
  mainContent: {
    mainCategories: document.querySelectorAll(".nav-categories"),
    menuContent: document.getElementById("menu-content"),
  },
  footerContent: {
    footerText: document.getElementById("footer-text"),
  },
};

// ---------------------------------------------------

let setLang = localStorage.getItem("language");

// ---------------------------------------------------

const langAllBtns = document.querySelectorAll(".langBtn");

langAllBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < langAllBtns.length; i++) {
      langAllBtns[i].classList.remove("active");
    }

    setLang = btn.getAttribute("data-lang");
    localStorage.setItem("language", setLang);
    btn.classList.add("active");

    defaultLanguage();
    location.reload();
  });

  if (btn.id === localStorage.getItem("language")) {
    for (let i = 0; i < langAllBtns.length; i++) {
      langAllBtns[i].classList.remove("active");
    }

    btn.classList.add("active");
  }
});

// ----------------------------------------------------

function defaultLanguage() {
  innerText.headerContent.headerTitle.innerText =
    mainPage.header.title[localStorage.getItem("language")];
  innerText.headerContent.headerSubtitle.innerText =
    mainPage.header.subtitle[localStorage.getItem("language")];

  // ---------------------------------------------------

  innerText.mainContent.mainCategories.forEach((categoria, index) => {
    categoria.innerText =
      mainPage.categories[index][localStorage.getItem("language")];
  });

  // ----------------------------------------------------

  innerText.footerContent.footerText.innerText =
    mainPage.footer.orderOnline[localStorage.getItem("language")];
}

defaultLanguage();

// ----------------------------------------------------

menuPage.menu.Desserts.forEach((item) => {
  innerText.mainContent.menuContent.innerHTML += `
    <div class="item">
      <div class="food-info">
        <h5>${item.title[setLang]}</h5>
        <ul class="menuList"></ul> <!-- This is dynamically added -->
      </div>
      <div class="food-img">
        <img src=${item.imgSrc} alt=${item.imgSrc} />
      </div>
    </div>`;
});

// -----------------------------------------------------

innerText.mainContent.menuList = document.querySelectorAll(".menuList");

// -----------------------------------------------------

innerText.mainContent.menuList.forEach((list, i) => {
  menuPage.menu.Desserts[i].items.forEach((menuItem) => {
    list.innerHTML += `
      <li>
        <a href="#">
          ${menuItem.name[setLang]} <span>${menuItem.price}</span>
        </a>
      </li>`;
  });
});
