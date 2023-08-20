window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    var container = this.document.getElementById('navbar')
    var navLinks = this.document.getElementById('nav-links')
    var unline2 = this.document.getElementById('op2')
    var unline3 = this.document.getElementById('op3')
    var unline4 = this.document.getElementById('op4')
    var unline5 = this.document.getElementById('op5')

    if (scrollPosition > 100) {
        container.classList.remove('navbar-des')
        container.classList.add('navbar-colored')
        navLinks.classList.remove('nav-links')
        navLinks.classList.add('nav-links-colored')
        unline2.classList.remove('underline-effect')
        unline2.classList.add('underline-effect-colored')
        unline3.classList.remove('underline-effect')
        unline3.classList.add('underline-effect-colored')
        unline4.classList.remove('underline-effect')
        unline4.classList.add('underline-effect-colored')
        unline5.classList.remove('underline-effect')
        unline5.classList.add('underline-effect-colored')
        logo.classList.remove('logo')
        logo.classList.add('logo-colored')
    } else {
        container.classList.add('navbar-des')
        container.classList.remove('navbar-colored')
        navLinks.classList.add('nav-links')
        navLinks.classList.remove('nav-links-colored')
        unline2.classList.add('underline-effect')
        unline2.classList.remove('underline-effect-colored')
        unline3.classList.add('underline-effect')
        unline3.classList.remove('underline-effect-colored')
        unline4.classList.add('underline-effect')
        unline4.classList.remove('underline-effect-colored')
        unline5.classList.add('underline-effect')
        unline5.classList.remove('underline-effect-colored')
        logo.classList.add('logo')
        logo.classList.remove('logo-colored')
    }
});

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle('open');
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
})