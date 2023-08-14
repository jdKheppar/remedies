let topNavbar = document.getElementById("top-navbar");
let searchBar = document.getElementById("search-bar");

let hamburger = document.getElementById("hamburger-icon");
let burger = document.getElementById("burger");
let healthGoal = document.getElementById("hamburger-health-goal-inner");
let productType = document.getElementById("hamburger-product-type-inner");
let brands = document.getElementById("hamburger-brands-inner");

let main = document.getElementById("main");

//Hamburger Declarations
let mobileMenu = document.getElementById("mobile-menu");
let healthGoalInner = document.getElementById("hamburger-health-goal-inner");

burger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    main.style.display = "block";
    healthGoal.style.display = "none";
    productType.style.display = "none";
    mobileMenu.style.display = "none";
  } else {
    hamburger.classList.add("open");
    mobileMenu.style.display = "flex";
    main.style.display = "none";
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
    dropDown.style.height = "7.6vh";
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

//For handling carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  //Use transitions here instead of display none and flex
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.boxShadow = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (window.innerWidth > 771) {
    if (n === 10) {
      slides[0].style.display = "flex";
    }
    else {
      slides[n].style.display = "flex";
    }
    console.log("This is nothing");
    if (n === 1) {
      slides[9].style.display = "flex";
    }
    else {
      slides[n - 2].style.display = "flex";
    }

  }
  slides[n - 1].style.boxShadow = "0px 0px 5px 8px #f8f8f8";
  slides[n - 1].style.display = "flex";
  dots[n - 1].className += " active";

}

// // For handling click on hamburger inner icons

function hamburgerInner(n) {
  if (n == 1) {
    mobileMenu.style.display = "none";

    healthGoalInner.style.display = "flex";
    healthGoalInner.style.flexDirection = "column";
    healthGoalInner.style.color = "#2e6e66";
    console.log("Hamburger Clikced");
  }
  if (n == 2) {
    mobileMenu.style.display = "none";

    productType.style.display = "flex";
    productType.style.flexDirection = "column";
    productType.style.color = "#2e6e66";
  }
  if (n == 3) {
    mobileMenu.style.display = "none";
    brands.style.display = "flex";
    brands.style.flexDirection = "column";
    brands.style.color = "#2e6e66";

  }
}

function hamburgerInnerBtn() {
  console.log("I am clicked");
  mobileMenu.style.display = "flex";
  healthGoalInner.style.display = "none";
  productType.style.display = "none";
  brands.style.display = "none";
}
