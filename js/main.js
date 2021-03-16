$(function() {

    $('.content').slick({
        dots: true,
        responsive: [
          {
            breakpoint: 2500,
            settings: "unslick"
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
          },
        ]
      })
    });


