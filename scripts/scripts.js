var container = this.document.getElementById("navbar");
var navLinks = this.document.getElementById("nav-links");
var unline2 = this.document.getElementById("op2");
var unline3 = this.document.getElementById("op3");
var unline4 = this.document.getElementById("op4");
var unline5 = this.document.getElementById("op5");
var toggler = this.document.getElementsByClassName("toggle-cls");
var toggleBtn = this.document.getElementById("toggle-btn");

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

toggleBtn.addEventListener("click", toggleOverlay)

function toggleOverlay() {
  var overlay = document.getElementById('overlay');
  if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
  } else {
      overlay.style.display = 'block';
      overlay.focus();
  }
}