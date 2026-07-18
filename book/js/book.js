 /*zoom */

$(function(){
	//$('.zoom li:hover span').css({'display':'block'});

	$('.zoom li').on('mouseover',function() {
		$('.zoom li span').css({'display':'none'});
		$(this).find('span').css({'display':'block'});

		var zoomImg = $(this).find('img').attr('src');
		$('.zoom .main img').attr('src',zoomImg);

		var zoomTxt = $(this).find('span').text();
		$('.zoom .main span').text(zoomTxt);
	});

});