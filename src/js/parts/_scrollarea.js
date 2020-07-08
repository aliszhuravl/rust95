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