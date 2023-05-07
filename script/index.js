//Chevron
const chevron = document.querySelector('.chevron ');

chevron.addEventListener('click', () => {
  const activites = document.querySelector('#activites');
  activites.scrollIntoView({ behavior: 'smooth' });
});

// Texte QSE

  const qseImage = document.getElementById("qse-image");
  const qseTexte = document.querySelector(".qse-texte");
  const qseTexteClose = document.querySelector(".qse-texte-close");

  qseImage.addEventListener("click", () => {
    qseTexte.style.display = "block";
  });

  qseTexteClose.addEventListener("click", () => {
    qseTexte.style.display = "none";
  });

 //Bouton back-to-top
var backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if(!backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.add("show-back-to-top")
    }
  } else {
    if(backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.remove("show-back-to-top")
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}

// Script pour dérouler le menu en cliquant sur le bouton
$(document).ready(function() {
$('.menu__toggle').click(function() {
$(this).parent().toggleClass('collapsed');
});
});

const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuNav.classList.toggle('active');
});
