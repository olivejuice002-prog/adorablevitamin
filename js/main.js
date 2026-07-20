/* ==========================================================================
   1. 모달 팝업 및 헤더 메뉴 및 프로그레스 바 (이벤트 위임 방식)
   ========================================================================== */
$(function() {

  // 1. 모달 팝업 관련
  $(document).on('click', '#sub .list .cont .thumb, #sub .list .thumb2', function() {
    $('.modal').css({'display':'block'});
    $('.modal .bg').css({'background':'#000','opacity':'0.9'});

    var img = $(this).find('img').attr('src');
    $('.modal').find('img').attr('src',img);

    // 모달 이미지 중앙 정렬 계산
    var w = $('.modal img').outerWidth() / 2;
    var h = $('.modal img').outerHeight() / 2;
    $('.modal img').css({'margin-left':-w, 'margin-top':-h});
  });

  $(document).on('click', '.modal .xi-close', function() {
    $('.modal').css({'display':'none'});
  });

  // 2. 상단 헤더 메뉴 애니메이션
  $(document).on('mouseenter', '.container .menu > li', function(){
    var $submenu = $(this).find(".submenu");
    // 실제 높이 측정
    var actualHeight = $submenu.find('ul').outerHeight() || $submenu.outerHeight();

    // 글씨 먼저 표시 -> 배경은 0.1초 후 슬라이드 다운
    $submenu.stop().fadeIn(200);
    $(".container .sub_bg").stop().css({height: actualHeight + 20}).delay(100).slideDown(300);
  });

  $(document).on('mouseleave', '.container .menu > li', function(){
    // 배경 먼저 닫힘 -> 글씨는 0.1초 후 사라짐
    $(".container .sub_bg").stop().slideUp(200);
    $(this).find(".submenu").stop().fadeOut(100);
  });

  // 3. 프로그레스 바 애니메이션 함수 정의
  function moveProgressBar() {
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2000;

    $('.progress-bar').stop().animate({ left: progressTotal }, animationLength);
  }

  // 필요 시 호출: moveProgressBar();
});



