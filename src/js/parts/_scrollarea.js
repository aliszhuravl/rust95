$(function() {
    $("div#makeMeScrollable").smoothDivScroll({ autoScroll: "onstart",
        autoScrollDirection: "backandforth",
        autoScrollStep: 1,
        autoScrollInterval: 15,
        startAtElementId: "startAtMe",
        visibleHotSpots: "always" });
    $("#makeMeScrollable").smoothDivScroll("option","autoScrollDirection","endlessloopright");

});