
// _____________счетчик корзины_________

$(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });

// ___________slider_about_companies_____________

$('.carousel').carousel({
interval: 3000,
speed: 2500,
  autoplay: true
});


// __________vertical slider___________

$('.slider').slick({
    autoplay: true,  
//    автоматическое перем слайда
    autoplaySpeed: 3000,
//    время перемотки слайдера
    dots:true,
//    индикаторы
    vertical:true,
//    слайдер листает вертикально
    arrows:false,
//Проведите пальцем по экрану для скольжения независимо от слайдов
    swipeToSlide: true,
    speed: 1000
});

