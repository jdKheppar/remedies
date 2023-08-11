let hamburger = document.getElementById("hamburger-icon");
let burger = document.getElementById("burger");

burger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
});

bar2.addEventListener("click", () => {
  hamburger.classList.toggle("open");
});

bar3.addEventListener("click", () => {
  hamburger.classList.toggle("open");
});

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
  let btns = document.getElementsByClassName("hamburger-dropbtn");
  let hr = document.getElementsByClassName("hamburger-hr");

  for (let i = 0; i < btns.length; i++) {
    if (btns[i] && btns[i].style) {
      btns[i].style.display = "none";
    }
    if (hr[i] && hr[i].style) {
      hr[i].style.display = "none";
    }
  }
  if (n == 1) {
    let healthGoal = document.getElementById("hamburger-health-goal-inner");
    healthGoal.style.display = "flex";
    healthGoal.style.color = "#2e6e66";
    console.log("Hamburger Clikced");
  }
  if (n == 2) {
    let healthGoal = document.getElementById("hamburger-product-type-inner");
    healthGoal.style.display = "flex";
    healthGoal.style.color = "#2e6e66";
    console.log("Hamburger Clikced");
  }
  if (n == 3) {
    let healthGoal = document.getElementById("hamburger-brands-inner");
    healthGoal.style.display = "flex";
    healthGoal.style.color = "#2e6e66";
    console.log("Hamburger Clikced");
  }
}
