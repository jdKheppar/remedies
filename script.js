let topNavbar = document.getElementById("top-navbar");
let searchBar = document.getElementById("search-bar");

let hamburger = document.getElementById("hamburger-icon");
let burger = document.getElementById("burger");
let healthGoal = document.getElementById("hamburger-health-goal-inner");
let productType = document.getElementById("hamburger-product-type-inner");
let brands = document.getElementById("hamburger-brands-inner");
let cartContainer = document.getElementById("cart-container");

let main = document.getElementById("main");

//Hamburger Declarations
let mobileMenu = document.getElementById("mobile-menu");
let healthGoalInner = document.getElementById("hamburger-health-goal-inner");

burger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    main.style.display = "block";
    healthGoal.style.transform = 'translateX(-100%)';
    productType.style.transform = 'translateX(-100%)';
    brands.style.transform = 'translateX(-100%)';
    mobileMenu.style.display = "none";
    cartContainer.style.display = "block";
  } else {
    hamburger.classList.add("open");
    mobileMenu.style.display = "flex";
    main.style.display = "none";
    cartContainer.style.display = "none";
  }
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

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    if (window.innerWidth > 770 && window.innerWidth < 907) {
      dropDown.style.height = "16vh";
    }
    else {
      dropDown.style.height = "7.6vh";
    }

    // if (!mainDDUL.style.contains("wrap")) {
    //   healthGoalRight.style.gridTemplateColumns = "auto";
    // } else {
    //   dropDown.style.height = "7.6vh";
    // }
  } else {
    header.classList.remove("sticky");

    dropDown.style.height = "17vh";
  }
}



// // For handling click on hamburger inner icons

function hamburgerInner(n) {
  if (n == 1) {
    mobileMenu.style.display = "none";
    healthGoalInner.style.transform = 'translateX(0)';
  }
  if (n == 2) {
    mobileMenu.style.display = "none";
    productType.style.transform = 'translateX(0)';
  }
  if (n == 3) {
    mobileMenu.style.display = "none";
    brands.style.transform = 'translateX(0)';
  }
}

function hamburgerInnerBtn() {
  console.log("I am clicked");
  mobileMenu.style.display = "flex";
  healthGoal.style.transform = 'translateX(100%)';
  productType.style.transform = 'translateX(100%)';
  brands.style.transform = 'translateX(100%)';
}
