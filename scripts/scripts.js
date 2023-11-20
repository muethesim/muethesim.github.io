var container = this.document.getElementById("navbar");
var navLinks = this.document.getElementById("nav-links");
var unline2 = this.document.getElementById("op2");
var unline3 = this.document.getElementById("op3");
var unline4 = this.document.getElementById("op4");
var unline5 = this.document.getElementById("op5");
var toggler = this.document.getElementsByClassName("toggle-cls");
var toggleBtn = this.document.getElementById("toggle-btn");
var exitBtn = this.document.getElementById("close-btn");

function normal() {

  container.classList.remove("navbar-des");
  container.classList.add("navbar-colored");
  navLinks.classList.remove("nav-links");
  navLinks.classList.add("nav-links-colored");
  unline2.classList.remove("underline-effect");
  unline2.classList.add("underline-effect-colored");
  unline3.classList.remove("underline-effect");
  unline3.classList.add("underline-effect-colored");
  unline4.classList.remove("underline-effect");
  unline4.classList.add("underline-effect-colored");
  unline5.classList.remove("underline-effect");
  unline5.classList.add("underline-effect-colored");
  logo.classList.remove("logo");
  logo.classList.add("logo-colored");
  for (var i = 0; i < 3; i++) {
    toggler[i].classList.remove("toggler-icon");
    toggler[i].classList.add("toggler-icon-colored");
  }
}


function colored() {
  container.classList.add("navbar-des");
  container.classList.remove("navbar-colored");
  navLinks.classList.add("nav-links");
  navLinks.classList.remove("nav-links-colored");
  unline2.classList.add("underline-effect");
  unline2.classList.remove("underline-effect-colored");
  unline3.classList.add("underline-effect");
  unline3.classList.remove("underline-effect-colored");
  unline4.classList.add("underline-effect");
  unline4.classList.remove("underline-effect-colored");
  unline5.classList.add("underline-effect");
  unline5.classList.remove("underline-effect-colored");
  logo.classList.add("logo");
  logo.classList.remove("logo-colored");
  for (var i = 0; i < 3; i++) {
    toggler[i].classList.add("toggler-icon");
    toggler[i].classList.remove("toggler-icon-colored");
  }
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 70) {
    normal();
  } else {
    colored();
  }

  if(scrollPosition > 180) {
    document.getElementById("startText").style.opacity = 0;
  } else {
    document.getElementById("startText").style.opacity = 1;
  }
});

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

toggleBtn.addEventListener("click", toggleOverlay);
exitBtn.addEventListener("click", closeOverlay);

function toggleOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
  exitBtn.classList.add("show-button");
  disableScroll();
  overlay.focus();
}

function closeOverlay() {
  var overlay = document.getElementById('overlay');
  exitBtn.classList.remove("show-button");
  enableScroll();
  overlay.style.display = 'none';
}

var count = 0;
var directions = {
  prev: 0,
  next: 1
}

var prevButton = document.querySelector(".slider-navigation button:first-child");
var nextButton = document.querySelector(".slider-navigation button:last-child");
var sliders = document.querySelectorAll(".slider-content figure");

initListeners();

function initListeners() {
  nextButton.addEventListener("click", onNavigationClick);
  prevButton.addEventListener("click", onNavigationClick);
}

function onNavigationClick(e) {
  var currentButton = e.target;
  var index = getElementIndex(e.target);
  var controlledCount = countController(index);
  
  var oldSlideItem = sliders[controlledCount.old];
  var newSlideItem = sliders[controlledCount.new];
  
  oldSlideItem.classList.remove("show");
  currentButton.classList.add("disabled");
  
  var showNextSliderItemInterval = setInterval(function() {
    newSlideItem.classList.add("show");
    currentButton.classList.remove("disabled");
    clearInterval(showNextSliderItemInterval);
  }, 150);
}

function countController(directionIndex) {
  var result = { new: 0, old: count };
  var max = sliders.length;
  
  if(directionIndex === directions.next) {
    count = count === max - 1 ? 0 : (count + 1);
  }
  
  if(directionIndex === directions.prev) {
    count = count === 0 ? (max - 1) : (count - 1);
  }
  
  result.new = count;
  
  return result;
}

function getElementIndex(element) {
  return Array.from(element.parentElement.children).indexOf(element);
}