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

// Script pour dérouler le menu en cliquant sur le bouton
$(document).ready(function() {
$('.menu__toggle').click(function() {
$(this).parent().toggleClass('collapsed');
});
});

const menuToggle = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  concole.console.log(siii);
  menuNav.classList.toggle('active');
});

