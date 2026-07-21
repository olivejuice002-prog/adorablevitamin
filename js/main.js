/* ==========================
   MENU
========================== */

function initMenu() {

    $(".submenu").hide();
    $(".sub_bg").hide();

    $(".menu > li").hover(

        function () {

            $(this).children(".submenu").stop(true, true).slideDown(200);

            $(".sub_bg").stop(true, true).slideDown(200);

        },

        function () {

            $(this).children(".submenu").stop(true, true).slideUp(200);

            $(".sub_bg").stop(true, true).slideUp(200);

        }

    );

}

/* ==========================
   MODAL
========================== */

function initModal() {

    $('#sub .list .cont .thumb, #sub .list .thumb2').on('click', function () {

        $('.modal').show();

        $('.modal .bg').css({
            background: '#000',
            opacity: 0.9
        });

        var img = $(this).find('img').attr('src');

        $('.modal img').attr('src', img);

        var w = $('.modal img').outerWidth() / 2;
        var h = $('.modal img').outerHeight() / 2;

        $('.modal img').css({
            marginLeft: -w,
            marginTop: -h
        });

    });

    $('.modal .xi-close').on('click', function () {

        $('.modal').hide();

    });

}


/* ==========================
   BXSLIDER
========================== */

function initSlider() {

    $('.bxslider').bxSlider({

        auto: true,
        speed: 1000,
        pause: 4000,
        mode: 'horizontal'

    });

}


/* ==========================
   PROGRESS BAR
========================== */

function initProgress() {

    moveProgressBar();

    $(window).resize(function () {

        moveProgressBar();

    });

    function moveProgressBar() {

        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);

        var getProgressWrapWidth = $('.progress-wrap').width();

        var progressTotal = getPercent * getProgressWrapWidth;

        $('.progress-bar').stop().animate({

            left: progressTotal

        }, 2000);

    }

}


/* ==========================
   PAGE INIT
========================== */

$(function () {

    initMenu();

    initSlider();

    initModal();

    initProgress();

});