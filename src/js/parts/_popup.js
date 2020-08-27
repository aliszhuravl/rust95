$(document).ready(function() {

    $(".modal_show").click(function () {
        $(".popup_wrapper").fadeIn(300);
        $(".popup").fadeIn(300);
        $('body').addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").fadeOut(300);
        $(".popup").fadeOut(300);
        $('body').removeClass('stop');
    });

    $(document).mouseup(function (e){
        var modalctr = $(".popup_wrapper");
        var modal = $(".popup");
        if (!modal.is(e.target) && modal.has(e.target).length === 0){
            modalctr.hide();
        }
        $('body').removeClass('stop');
    });
});

(function($) {
    $("#call_search").click(function () {
        $(".search_block").addClass('visible_search');
    });

    $("#cross-search").click(function () {
        $(".search_block").removeClass('visible_search');
});
})(jQuery);