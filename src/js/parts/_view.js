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