(function ($) {
    "use strict";

    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }

    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 150) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }
    headerStyle();
    new WOW().init();
    if ($('select').length) {
        $('select').niceSelect();
    }
    if ($('.time-countdown').length !== 0) {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
        let countDown = new Date('Aug 2, 2021 8:00:00').getTime(),
            x = setInterval(function () {
                let now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById('days').innerText = Math.floor(distance / (day)), document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)), document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)), document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }, second)
    };
    $('.vedio-play').magnificPopup({
        type: 'iframe'
    });
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    }
    $(window).on('scroll', function () {
        headerStyle();
    });
    $(window).on('load', function () {
        handlePreloader();
    });

    document.addEventListener('DOMContentLoaded', function () {
        var words = ["TOMADA","ABRIR", "SSIGNIFICAR", "VIVER", "INVENTAR", "CONSTRUIR", "ESTABELECER", "VER", "ACENDER", "CONDICIONAR", "PACTUAR", "LEMBRAR", "ABASTECER", "VIGORAR"];

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            words = ["TOMADA","ABRIR", "INVENTAR", "CONSTRUIR"]
        }

        Typed.new('.re_', {
            strings: words,
            typeSpeed: 200,
            backSpeed: 5,
            loop: true,
            startDelay: 0,
            cursorChar: "",
        });
    });


})(jQuery);