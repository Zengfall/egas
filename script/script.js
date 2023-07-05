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

  // Ajouter un gestionnaire d'événements sur les liens du menu pour faire défiler la page
  // ...

// ...

var menuLinks = document.querySelectorAll("#mySidenav a");

menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    var targetId = link.getAttribute("href");
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      document.getElementById("mySidenav").classList.remove("active");
    }
  });
});

// ...

});



