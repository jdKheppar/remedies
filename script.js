let topNavbar = document.getElementById("top-navbar");
let hideSearch = document.getElementById("hide-search");
let searchBar = document.getElementById("search-bar");
let searchBar3 = document.getElementById("search-bar3");
let searchClose3 = document.getElementById("searchClose3");
let mainNavbarInput3 = document.getElementById("main-navbar-input3");
let mainNavbar = document.getElementById("main-navbar");
const mainNavbarInput = document.getElementById("main-navbar-input");
let mainNavbarHideableSearch1 = document.getElementById("searchClose-hideable");
let hideableSearchContainer = document.getElementById(
  "hideable-search-container"
);
let mainNavbarInputHideable1 = document.getElementById(
  "main-navbar-input-hideable"
);

let hamburger = document.getElementById("hamburger-icon");
let burger = document.getElementById("burger");
let healthGoal = document.getElementById("hamburger-health-goal-inner");
let productType = document.getElementById("hamburger-product-type-inner");
let brands = document.getElementById("hamburger-brands-inner");
let cartContainer = document.getElementById("cart-container");

let main = document.getElementById("main");
let searchClose = document.getElementById("searchClose");

//Hamburger Declarations
let mobileMenu = document.getElementById("mobile-menu");
let healthGoalInner = document.getElementById("hamburger-health-goal-inner");

burger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    main.style.display = "block";
    mobileMenu.style.display = "none";
    cartContainer.style.display = "block";
    searchBar.style.transform = "translateX(0)";
    healthGoal.style.transform = "translateX(-100%";
    productType.style.transform = "translateX(-100%";
    brands.style.transform = "translateX(-100%";
    mainNavbarInputHideable1.style.display = "flex";
    hideableSearchContainer.style.display = "flex";
  } else {
    hamburger.classList.add("open");
    mobileMenu.style.display = "flex";
    main.style.display = "none";
    cartContainer.style.display = "none";
    searchBar.style.display = "translateX(-100%)";
    hideableSearchContainer.style.display = "flex";
    mainNavbarInputHideable1.style.display = "none";
    hideableSearchContainer.style.display = "none";
    hideSearch.style.display = "none";
  }
});

let cartCont = document.getElementById("cart-container");
let closeCont = document.getElementById("close-container");
let cartMessage = document.getElementById("site-header");

cartCont.addEventListener("click", function () {
  if (window.innerWidth < 771) {
    burger.style.display = "none";
    hideSearch.style.display = "none";
    hideableSearchContainer.style.display = "none";
  }
  cartCont.style.display = "none";
  closeCont.style.display = "flex";
  cartMessage.style.display = "flex";
});

closeCont.addEventListener("click", function () {
  if (window.innerWidth < 771) {
    burger.style.display = "block";
    //hideSearch.style.display = "block";
    hideableSearchContainer.style.display = "flex";
  }
  closeCont.style.display = "none";
  cartCont.style.display = "flex";
  cartMessage.style.display = "none";
});

// For reference, there also exists a toggle function
// burger.addEventListener("click", () => {
//   hamburger.classList.toggle("open");
// });

window.onscroll = function () {
  // Check if the hamburger has the "open" class
  myFunction();
  if (!hamburger.classList.contains("open")) {
    myFunction();
  }
};

var header = document.getElementById("nav");
var sticky = header.offsetTop;
let dropDown = document.getElementById("main-dropdown");
let mainDDUL = document.getElementById("main-dropdown-ul");
let healthGoalRight = document.getElementById("health-goal-right");

let mainNavbarMainLogo = document.getElementById("main-navbar-main-logo");

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    if (window.innerWidth < 771) {
      hideSearch.style.display = "block";
      hideableSearchContainer.style.display = "none";

      // r mainNavbar.style.height = "10vh";
    }
  } else {
    header.classList.remove("sticky");

    if (window.innerWidth < 771) {
      hideSearch.style.display = "none";
      hideableSearchContainer.style.display = "flex";
      // r mainNavbar.style.height = "15vh";
    }
  }
}
hideSearch.addEventListener("click", function () {
  searchBar3.style.display = "flex";
  searchBar3.style.marginTop = "1rem";
  searchBar3.style.marginBottom = "1rem";
  //searchBar.style.bottom = "20px";
  hideSearch.style.display = "none";
  mainNavbarMainLogo.style.display = "none";
  cartCont.style.display = "none";
  burger.style.display = "none";
});

// // For handling click on hamburger inner icons
function hamburgerInner(n) {
  if (n == 1) {
    mobileMenu.style.display = "none";
    healthGoalInner.style.transform = "translateX(0)";
  }
  if (n == 2) {
    mobileMenu.style.display = "none";
    productType.style.transform = "translateX(0)";
  }
  if (n == 3) {
    mobileMenu.style.display = "none";
    brands.style.transform = "translateX(0)";
  }
}

function hamburgerInnerBtn() {
  mobileMenu.style.display = "flex";
  healthGoal.style.transform = "translateX(100%)";
  productType.style.transform = "translateX(100%)";
  brands.style.transform = "translateX(100%)";
}

// For handling the Modal

const openModalButtons = document.querySelectorAll(".openModalBtn");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    closeButton.closest(".modal").style.display = "none";
  });
});

//Jquery For Handling plus minus on Modal
$(document).ready(function () {
  $(".modal-minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".modal-plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

//Main Navbar Hideable Search Bar Before 770px
// let search1Close = document.getElementById("searchClose-hideable");

// search1Close.addEventListener("click", function () {
//   mainNavbarInputHideable.style.width = "100%";
//   search1Close.style.display = "none";
// });
// hideableSearchContainer.addEventListener("click", function () {
//   mainNavbarInputHideable.style.width = "60%";
//   search1Close.style.display = "block";
//   search1Close.style.marginLeft = "30px";
// });

mainNavbarInput3.addEventListener("focus", () => {
  mainNavbarInput3.style.outline = "none";
  mainNavbarInput3.style.width = "60%";
  searchClose3.style.display = "block";
});

mainNavbarInput3.addEventListener("blur", () => {
  mainNavbarInput3.style.outline = "none";
  //searchBar3.style.display = "block";
});

searchClose3.addEventListener("click", function () {
  mainNavbarMainLogo.style.display = "block";
  hideSearch.style.display = "block";
  cartCont.style.display = "flex";
  burger.style.display = "block";
  mainNavbarInput3.style.width = "100%";
  searchBar3.style.display = "none";
});

let allModalImages = document.querySelectorAll(".photoswipe__image");

allModalImages.forEach(function (modalImage) {
  modalImage.addEventListener("click", function () {
    alert("Clicked on Modal image");
  });
});
