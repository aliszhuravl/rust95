// $(document).ready(function() {
//     $('#loader1').animate({
//         width: "100%"
//     }, 5000);
// });

// $('#video-slider').on('afterChange', function(event, slick, currentSlide){
//     if ($('.sni_item').hasClass('inactive')) {
//         $('.sni_item .line').animate({
//             width: "0%"
//         }, 100);
//     }
// });


// $('.sni_item.active').removeClass('active');
// $('.sni_item').eq(currentSlide).addClass('active');
//
// if ($('.sni_item').hasClass('active')) {
//     $('.sni_item.active .line').animate({
//         width: "100%"
//     }, 5000);
//
// } else {
//     $('.sni_item .line').addClass('bip').animate({
//         width: "0%"
//     }, 100);
// }



//
//     var currentIndex = currentSlide;
//     console.log(currentIndex);
//     if (currentIndex==0) {
//         $('#loader1').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader1').animate({
//             width: "0%"
//         }, 100);
//     }
//
//     if (currentIndex==1) {
//         $('#loader2').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader2').animate({
//             width: "0%"
//         }, 100);
//     }
//
//     if (currentIndex==2) {
//         $('#loader3').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader3').animate({
//             width: "0%"
//         }, 100);
//     }
//
//     if (currentIndex==3) {
//         $('#loader4').animate({
//             width: "100%"
//         }, 5000);
//     } else {
//         $('#loader4').animate({
//             width: "0%"
//         }, 100);
//     }
// });
// $('.sni_item').on('click', function(e) {
//     e.preventDefault();
//     $('.sni_item.active').removeClass('active');
//     $(this).addClass('active');
//
//     var targetSlide = $(this).data('target');
//     $('#video-slider').slick('slickGoTo', targetSlide );
//
//     console.log(currentSlide, targetSlide);
// });