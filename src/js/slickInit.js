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
        slidesToShow: 6,
        nextArrow: $(".nextButton"),
        prevArrow: $(".prevButton"),
        doots:false,
        responsive: [
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
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
