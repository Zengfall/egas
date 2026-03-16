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
      event.preventDefault(); // Empêcher la redirection par défaut

      // Récupérer l'identifiant de la partie cible
      var targetId = link.getAttribute("href").substring(1);

      // Trouver l'élément cible dans le document
      var targetElement = document.getElementById(targetId);

      // Faire défiler la page jusqu'à l'élément cible
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // Fermer le menu après le clic sur un lien
      sidenav.classList.remove("active");
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

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
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