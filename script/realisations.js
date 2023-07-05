//Carrousel
$(document).ready(function(){
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



//Bouton basculement menu
    document.addEventListener('DOMContentLoaded', function() {
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

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


