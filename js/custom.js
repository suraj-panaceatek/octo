$(document).ready(function() {
    $('#main-slider').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        nav:false,
        dots:false,
        items:1,
        mouseDrag:false,
    })

    $('.top_bar_info_switcher') .click(function(){
        $('.top_bar_info_switcher ul').slideToggle("slow");
    })

    $('.top-br a[href^="#"]').on('click', function(event) {
        $('.top_bar_info') .hide()
        var target = $(this).attr('href');
        $('.top_bar_info'+target).toggle();
    });
});
$(document).ready(function() {
	$('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $(".contact-link").click(function(){
        $(".expanded-contact-form").slideToggle();
    }); 
});
$(document).ready(function(){
    fullSize();
    applyOrientation();
    function fullSize() {
        var heights = window.innerHeight;
        jQuery(".fullHt").css('min-height', (heights + 0) + "px");
    }
});
$(document).ready(function () {       
      if ($('html').hasClass('desktop')) {
        new WOW().init();
      }
});

