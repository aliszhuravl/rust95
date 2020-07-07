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
        pauseOnHover: false
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

});