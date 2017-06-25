/*
* @Author: admin
* @Date:   2017-06-24 23:51:36
* @Last Modified by:   admin
* @Last Modified time: 2017-06-25 14:34:34
*/
;(function ($) {
    $(document).ready(function () {

                $('.header__menu--mini').on('click', function () {
            $(this).next().slideToggle(200);
            $('.overlay').show();
        });
        $('.overlay').on('click', function () {
            $('.header__menu').slideUp(200);
            $(this).hide();
        });


        $('.menu-about').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.about-us').offset().top
            }, 300);
        });


        $('.menu-services').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.our-services').offset().top
            }, 300);
        });

        $('.menu-works').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.works').offset().top
            }, 300);
        });

        $('.menu-contacts').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: $('.contact').offset().top
            }, 300);
        });

        $('.works__slider-cont').slick({
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $('.team__slider-cont').slick({
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
            ]
        });

        $('.scroll-top').click(function () {
            $('.overlay').trigger('click');
            $('html, body').animate({
                scrollTop: 0
            }, 300);
        });

                var map,
        pointPin = {lat: 51.4938405, lng: 31.2999212},
        pointCenter = {lat: 51.4938405, lng: 31.2999212};

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: pointCenter,
                zoom: 15,
                disableDefaultUI: false,
                scrollwheel: false
            });
            var image = {
                url: 'prod/img/pin.png'
            };
            var marker = new google.maps.Marker({
                position: pointPin,
                map: map,
                icon: image
            });
        }

        initMap();


    });
})(jQuery);