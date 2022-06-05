
  $(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                // responsive options
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                // responsive options
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 1200,
                settings: {
                  // responsive options
                  slidesToShow: 3,
                }
              },
          ]
    });
  });
      
