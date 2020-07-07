$(function() {
    $("div#makeMeScrollable").smoothDivScroll({ autoScroll: "onstart", speed: 8000,
        autoScrollDirection: "backandforth",
        autoScrollStep: 1,
        autoScrollInterval: 15,
        scrollInterval: 40,
        startAtElementId: "startAtMe",
        hotSpotScrollingStep: 500,
        visibleHotSpots: "always" });
    $("#makeMeScrollable").smoothDivScroll("option","autoScrollDirection","endlessloopright");

});