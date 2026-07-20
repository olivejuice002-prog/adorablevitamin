

/*modal*/
$(function() {
	$('#sub .list .cont .thumb').on('click',function() {
		$('.modal').css({'display':'block'});
		$('.modal .bg').css({'background':'#000','opacity':'0.9'});

		var img = $(this).find('img').attr('src');
		$('.modal').find('img').attr('src',img);

		var w = $('.modal img').outerWidth() / 2;
		var h = $('.modal img').outerHeight() / 2;

		$('.modal img').css({'margin-left':-w, 'margin-top':-h});
	});

	$('.modal .xi-close').on('click',function() {
		$('.modal').css({'display':'none'});
	});
});



/*modal*/
$(function() {
	$('#sub .list .thumb2').on('click',function() {
		$('.modal').css({'display':'block'});
		$('.modal .bg').css({'background':'#000','opacity':'0.9'});

		var img = $(this).find('img').attr('src');
		$('.modal').find('img').attr('src',img);

		var w = $('.modal img').outerWidth() / 2;
		var h = $('.modal img').outerHeight() / 2;

		$('.modal img').css({'margin-left':-w, 'margin-top':-h});
	});

	$('.modal .xi-close').on('click',function() {
		$('.modal').css({'display':'none'});
	});
});



$(document).ready(function(){
    // 슬라이드 기능 오류가 발생해도 메뉴 코드는 계속 실행되도록 처리합니다.
    try {
        $('.bxslider').bxSlider();
    } catch (e) {
        console.log("슬라이드 관련 오류가 발생했으나 메뉴는 정상 작동합니다.");
    }

    // 이벤트 위임 방식을 사용하여 메뉴가 나중에 로딩되어도 동작하게 합니다.
    $(document).on('mouseenter', '.menu > li', function() {
        $(this).find(".submenu").stop().slideDown(200);
        $(".sub_bg").stop().slideDown(200);
    });

    $(document).on('mouseleave', '.menu > li', function() {
        $(this).find(".submenu").stop().slideUp(200);
        $(".sub_bg").stop().slideUp(200);
    });
});




$(document).ready(function(){

	   moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-wrap').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 2000;

        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
        $('.progress-bar').stop().animate({
            left: progressTotal
        }, animationLength);
    }
});









