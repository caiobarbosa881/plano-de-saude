$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      variableWidth: true,
      prevArrow: null,
      nextArrow: null
    });
});