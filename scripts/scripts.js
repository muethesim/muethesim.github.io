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

  if (scrollPosition > 100) {
    normal();
  } else {
    colored();
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