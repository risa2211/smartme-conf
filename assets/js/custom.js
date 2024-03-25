(function ($) {

  "use strict";


  $('.loop').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5
      },
      992: {
        items: 3
      },
      760: {
        items: 2
      }
    }
  });
  $('.owl-banner').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
      1600: {
        items: 1
      }
    }
  })
  $('.owl-gallery').owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    margin: 5,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1600: {
        items: 4
      }
    }
  })


  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
    

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('.scroll-to-section a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) + 1
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else {
        currLink.removeClass("active");
      }
    });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });


  $(window).on('load', function () {
    setTimeout(function() {
      $('#js-preloader').addClass('loaded');
    }, 2000); // Delay execution by 2 seconds (2000 milliseconds)
  });
  



  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function () {
      if (width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);