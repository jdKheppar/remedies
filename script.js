let hamburger = document.getElementById("hamburger-icon");
let burger = document.getElementById("burger");
let healthGoal = document.getElementById("hamburger-health-goal-inner");
let productType = document.getElementById("hamburger-product-type-inner");

burger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    healthGoal.style.display = "none";
    productType.style.display = "none";
  } else {
    hamburger.classList.add("open");
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

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n == slides.length) {
    n = n - 3;
  }
  if (n > slides.length) {
    slideIndex = slides.length - 3;
  }
  if (n < 1) {
    slideIndex = 0;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.boxShadow = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex + 1].style.boxShadow = "0px 0px 5px 8px #f8f8f8";
  if (window.innerWidth > 771) {
    slides[slideIndex].style.display = "flex";

    slides[slideIndex + 2].style.display = "flex";
  }

  slides[slideIndex + 1].style.display = "flex";
  dots[slideIndex + 1].className += " active";
}

// // For handling click on hamburger inner icons

function hamburgerInner(n) {
  let mobileMenu = document.getElementById("mobile-menu");

  if (n == 1) {
    mobileMenu.style.display = "none";

    healthGoal.style.display = "flex";
    healthGoal.style.flexDirection = "column";
    healthGoal.style.color = "#2e6e66";
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
    let healthGoal = document.getElementById("hamburger-brands-inner");
    healthGoal.style.display = "flex";
    healthGoal.style.color = "#2e6e66";
    console.log("Hamburger Clikced");
  }
}
