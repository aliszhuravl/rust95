
$(document).ready(function() {
    $(".call_popup").click(function () {
        $(".popm").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $("#cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

    $("#vacancy").click(function () {
        $(".pop-v").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $("#cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});