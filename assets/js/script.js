'use strict';



/* -----------------------------------------------
   PRELOADER
-------------------------------------------------*/
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/* -----------------------------------------------
   EVENT HELPER
-------------------------------------------------*/
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};



/* -----------------------------------------------
   NAVBAR
-------------------------------------------------*/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/* -----------------------------------------------
   HEADER + BACK TO TOP
-------------------------------------------------*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/* -----------------------------------------------
   HERO SLIDER
-------------------------------------------------*/
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  currentSlidePos = (currentSlidePos >= heroSliderItems.length - 1) ? 0 : currentSlidePos + 1;
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  currentSlidePos = (currentSlidePos <= 0) ? heroSliderItems.length - 1 : currentSlidePos - 1;
  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);


/* --- Auto Slide --- */
let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", () => clearInterval(autoSlideInterval));
addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/* -----------------------------------------------
   PARALLAX EFFECT (SMOOTH)
-------------------------------------------------*/
const parallaxItems = document.querySelectorAll("[data-parallax-item]");

window.addEventListener("mousemove", function (event) {

  let targetX = (event.clientX / window.innerWidth - 0.5) * -30;
  let targetY = (event.clientY / window.innerHeight - 0.5) * -30;

  parallaxItems.forEach((item) => {
    let speed = Number(item.dataset.parallaxSpeed);
    let xMove = targetX * speed;
    let yMove = targetY * speed;

    item.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
  });

});



/* -----------------------------------------------
   REVEAL ANIMATION (WOW EFFECT)
-------------------------------------------------*/
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
