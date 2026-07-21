

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

	var menu = $(".menu");

	$(".submenu").hide();
	$(".sub_bg").hide();

	menu.hover(function(){
	  $(this).find(".submenu").stop().slideDown();
	  $(".sub_bg").stop().slideDown();
	},function(){

	  $(this).find(".submenu").stop().slideUp();
	  $(".sub_bg").stop().slideUp();
	});

});



$(document).ready(function(){
	  $('.bxslider').bxSlider({
	  auto: true,
	  speed: 1000,
	  pause: 4000,
	  mode:'horizontal',
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









