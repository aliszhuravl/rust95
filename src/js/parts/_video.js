jQuery(function($) {
    //
    // var cover = $('.cover_film');
    // var video = $('.big_film'),
    //     src = video.attr('src');
    //
    // video.attr('src', src + '&autoplay=1');
    //
    // cover.on('click', function () {
    //     $(this).addClass('invisible');
    // });

    $('.cover_film').on('click', function(ev) {

        $(this).addClass('invisible');
        $(".big_film")[0].src += "&autoplay=1";
        ev.preventDefault();

    });
});