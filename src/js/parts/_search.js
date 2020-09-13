$(document).ready(function() {

    $("#call_search").click(function () {
        $(".search_block").addClass('visible_search');
    });

    $("#cross-search").click(function () {
        $(".search_block").removeClass('visible_search');

    });
});