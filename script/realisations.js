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

// =====================
// LIGHTBOX
// =====================

// Création de la lightbox dans le DOM
const lightboxHTML = `
    <div class="lightbox" id="lightbox">
        <span class="lightbox__close">&times;</span>
        <span class="lightbox__prev">&#10094;</span>
        <img src="" alt="">
        <figcaption></figcaption>
        <span class="lightbox__next">&#10095;</span>
        <span class="lightbox__counter"></span>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', lightboxHTML);

const lightbox       = document.getElementById('lightbox');
const lightboxImg    = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
const lightboxCounter = lightbox.querySelector('.lightbox__counter');
const lightboxClose  = lightbox.querySelector('.lightbox__close');
const lightboxPrev   = lightbox.querySelector('.lightbox__prev');
const lightboxNext   = lightbox.querySelector('.lightbox__next');

// Collecte de toutes les photos de tous les carrousels de la page
let allFigures = [];
let currentIndex = 0;

function buildFiguresList() {
    allFigures = Array.from(document.querySelectorAll('.carrousel figure'));
}

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const figure  = allFigures[currentIndex];
    const img     = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');

    lightboxImg.src     = img.src;
    lightboxImg.alt     = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + allFigures.length;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + allFigures.length) % allFigures.length;
    updateLightbox();
}

function showNext() {
    currentIndex = (currentIndex + 1) % allFigures.length;
    updateLightbox();
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function () {
    buildFiguresList();

    // Clic sur une figure pour ouvrir
    allFigures.forEach(function (figure, index) {
        figure.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    // Boutons
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    // Clic sur le fond pour fermer
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    // Navigation clavier
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft')  showPrev();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'Escape')     closeLightbox();
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