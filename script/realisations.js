let sidenav;
let openBtn;
let closeBtn;
//Bouton basculement menu
document.addEventListener('DOMContentLoaded', function() {
  sidenav = document.getElementById("mySidenav");
  openBtn = document.getElementById("openBtn");
  closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  /* Set the width of the side navigation to 250px */
  function openNav() {
    sidenav.classList.add("active");
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sidenav.classList.remove("active")
  }
});
// Ajouter un gestionnaire d'événements sur les liens du menu pour faire défiler la page
  var menuLinks = document.querySelectorAll(".sidenav a");
  menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    var href = link.getAttribute("href");

    // Extraire uniquement l'ancre (#apropos, #contact, etc.)
    var hash = href.includes("#") ? href.substring(href.indexOf("#") + 1) : null;
    var targetElement = hash ? document.getElementById(hash) : null;

    // Scroll uniquement si l'élément existe sur cette page
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      sidenav.classList.remove("active");
    }
    // Sinon, laisser le navigateur suivre le lien normalement
  });
});


// Carrousel
$(document).ready(function () {
  $('.carrousel').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false
  });
});




  // Bouton back-to-top
var backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.add("show-back-to-top");
    }
  } else {
    if (backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.remove("show-back-to-top");
    }
  }
}
//Pour que Le bouton reste au-dessus du footer
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {

  const footerPosition = footer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (footerPosition < screenHeight) {
    backToTopButton.style.bottom = "65px";
  } else {
    backToTopButton.style.bottom = "20px";
  }

});