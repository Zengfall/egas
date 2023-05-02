//Carrousel
$(document).ready(function(){
  $('.carrousel').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
    nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
  });
});

