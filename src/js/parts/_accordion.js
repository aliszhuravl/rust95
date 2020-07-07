(function($) {

    $(window).on('load resize', function () {

        var mediaCheckMT = window.matchMedia('(max-width: 1199px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMT.matches) {
            $('.do_accordion').addClass('accordion');

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
                if (!e.data.multiple) {
                    $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
                };
            };

            var accordion = new Accordion($('.accordion'), false);
            $('.accordion__item').removeClass('accordion__item_open');
        }
    });
})(jQuery);