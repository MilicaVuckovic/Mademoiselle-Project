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
                    margin: 12
                }
            }
        });
    }

   

    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    your_name: {
                        required: true
                    },
                    your_email: {
                        required: true,
                        email: true
                    },
                    your_subject: {
                        required: true
                    },
                    your_message: {
                        required: true,
                        maxlength: 250
                    }
                },
                messages: {
                    your_name: {
                        required: 'Field is required!'
                    },
                    your_email: {
                        required: 'Field is required!',
                        email: 'Please enter a valid Email address'
                    },
                    your_subject: {
                        required: 'Field is required!'
                    },
                    your_message: {
                        required: 'Field is required!'
                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }

 if ($('.single-blog').length > 0) {
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

if ($('.single-service').length > 0) {
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
});



