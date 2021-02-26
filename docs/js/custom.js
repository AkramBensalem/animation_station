
  $(function () {
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    AOS.init({
      disable: 'mobile',
      duration: 600,
      anchorPlacement: 'center-bottom'
    });

    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 800);
            event.preventDefault();
      });
    });  

    $('#planning-slide').owlCarousel({
      loop: false,
      center: true,
      autoplayHoverPause: false,
      autoplay: true,
      margin: 20,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          800:{
              items:2,
          }
      }
    });

  });


    

