$(document).ready(function () {

    if ($('.section-title').length > 0) {
        function animation() {
            var screen = $(window).height();
            var scrollTop = $(window).scrollTop();

            $('.animation').each(function () {
                let position = $(this).offset().top;

                if (position < screen + scrollTop - 100) {
                    let animation = $(this).attr('data-animation');
                    $(this).addClass(animation);
                }
            });
        }


        $(window).scroll(function () {
            animation();
        });
        animation();
    }


    if ($('.professionals-slider').length > 0) {
        $('.professionals-slider').owlCarousel({
            autoplay: true,
            loop: true,

            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1,
                    margin: 72
                }
            }
        });
    }













});

