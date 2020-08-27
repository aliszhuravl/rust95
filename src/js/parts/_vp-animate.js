$(document).ready(function(){
    if($('.gb_animate').length) {
        $('.gb_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 250
        });
        $('.gs_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 100
        });
    }
});