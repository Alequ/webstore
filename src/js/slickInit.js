$(document).ready(function(){
  // First Carousel init
      $('.carousel').slick({
        dots: true,
        speed: 500,
        lazyLoad: 'progressive',
        arrows: true,

      });

 // Second Carousel init
      $('.row-equal').slick({
        slidesToShow: 5,
        nextArrow: $(".nextButton"),
        prevArrow: $(".prevButton"),
        infinite: true,
        doots:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });

});
