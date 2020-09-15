(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });

})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 200
                    }, 800);
                    return false;
                }
            }
        });
    }

    smoothScroll( '.link-to-block' );

})(jQuery);
$(document).ready(function() {
    $('#partners').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,
        nextArrow: $('#btn_next'),
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerMode: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 340,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("#btn_next").hover(function(){
        $("#partners").slick('slickPrev')
    });

    $('#slider_img').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('#video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.sni_item.active').removeClass('active');
        $('.sni_item .line').removeClass('line_active');
        $('.sni_item').eq(currentSlide).addClass('active');

        if ($('.sni_item').hasClass('active')) {
            $('.sni_item.active .line').addClass('line_active');
        }

        $(".sni_item").click(function(e){
            e.preventDefault();
            slideIndex = $(this).index();
            console.log(slideIndex);

            $( '#video-slider' ).slick('slickGoTo', slideIndex);
        });
    });

    $('#pu_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: $('#btn_prev_c'),
        nextArrow: $('#btn_next_c')
    });

    $('#pu_slider')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });

});
// $(document).ready(function() {
//     $('#loader1').animate({
//         width: "100%"
//     }, 5000);
// });

// $('#video-slider').on('afterChange', function(event, slick, currentSlide){
//     if ($('.sni_item').hasClass('inactive')) {
//         $('.sni_item .line').animate({
//             width: "0%"
//         }, 100);
//     }
// });


// $('.sni_item.active').removeClass('active');
// $('.sni_item').eq(currentSlide).addClass('active');
//
// if ($('.sni_item').hasClass('active')) {
//     $('.sni_item.active .line').animate({
//         width: "100%"
//     }, 5000);
//
// } else {
//     $('.sni_item .line').addClass('bip').animate({
//         width: "0%"
//     }, 100);
// }



//
//     var currentIndex = currentSlide;
//     console.log(currentIndex);
//     if (currentIndex==0) {
//         $('#loader1').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader1').animate({
//             width: "0%"
//         }, 100);
//     }
//
//     if (currentIndex==1) {
//         $('#loader2').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader2').animate({
//             width: "0%"
//         }, 100);
//     }
//
//     if (currentIndex==2) {
//         $('#loader3').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader3').animate({
//             width: "0%"
//         }, 100);
//     }
//
//     if (currentIndex==3) {
//         $('#loader4').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader4').animate({
//             width: "0%"
//         }, 100);
//     }
// });
// $('.sni_item').on('click', function(e) {
//     e.preventDefault();
//     $('.sni_item.active').removeClass('active');
//     $(this).addClass('active');
//
//     var targetSlide = $(this).data('target');
//     $('#video-slider').slick('slickGoTo', targetSlide );
//
//     console.log(currentSlide, targetSlide);
// });
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stop');
        $('.menu_opener').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stop');
        $('.menu_opener').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });
})(jQuery);
(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion__item_open');

        // collapse other accordions
        // if (!e.data.multiple) {
        //     $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
        // };
    };

    var accordion = new Accordion($('.accordion'), false);

})(jQuery);
(function($) {

    $('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
$(function() {
    $("div#makeMeScrollable").smoothDivScroll({ autoScroll: "always", speed: 8000,
        autoScrollDirection: "backandforth",
        autoScrollStep: 1,
        autoScrollInterval: 15,
        scrollInterval: 50,
        startAtElementId: "startAtMe",
        visibleHotSpots: "always" });
    $("#makeMeScrollable").smoothDivScroll("option","autoScrollDirection","endlessloopright");

});
(function($) {

    $('.sticky').hcSticky({
        top: 120,
        bottomEnd: 40,
        className: 'is-sticky',
        wrapperClassName: 'wrapper-sticky'
    });

})(jQuery);
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dropdown').not(this),
        $dropdownText = $dropdown.find('.dropdown__text'),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownListItems = $dropdown.find('.dropdown__item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').slideUp(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideDown(250);
        }
    });
    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});
$(document).ready(function(){
    if($('.gb_animate').length) {
        $('.gb_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 250
        });
        $('.gs_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 100
        });
    }
});
$(document).ready(function() {

    $("#call_search").click(function () {
        $(".search_block").addClass('visible_search');
    });

    $("#cross-search").click(function () {
        $(".search_block").removeClass('visible_search');

    });
});
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}


// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {

    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox-video")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });

}
(function($) {
  var slinky = $('.js-menu').slinky({
    title: true
  });
})(jQuery);
$(document).ready(function() {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 80) {
            $(".header").addClass('header_sticky')
        }
        if (80 > scrolled) {
            $(".header").removeClass('header_sticky')
        }

    }
});
jQuery(function($) {

    const section = $('.accordion__item'),
        nav = $('.docs_menu'),
        navHeight = nav.outerHeight(); // получаем высоту навигации


    $(window).on('scroll', function () {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight + 300,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active_link');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active_link');
            }
        });
    });

});
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.link-to-block');

})(jQuery);