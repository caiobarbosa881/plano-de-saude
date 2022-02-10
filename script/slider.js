$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 3,
      autoplay: true,
      infinite: true,
      speed: 1000,
      autoplayspeed: 7000,
      infinite:true,
      prevArrow: null,
      nextArrow: null,
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        }
      }]
      
    });
});