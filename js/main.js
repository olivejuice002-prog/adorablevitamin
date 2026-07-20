$(function() {

  // 1. 모달 팝업 관련 (기존 코드 유지)
  $(document).on('click', '#sub .list .cont .thumb, #sub .list .thumb2', function() {
    $('.modal').css({'display':'block'});
    $('.modal .bg').css({'background':'#000','opacity':'0.9'});
    var img = $(this).find('img').attr('src');
    $('.modal').find('img').attr('src',img);
    var w = $('.modal img').outerWidth() / 2;
    var h = $('.modal img').outerHeight() / 2;
    $('.modal img').css({'margin-left':-w, 'margin-top':-h});
  });

  $(document).on('click', '.modal .xi-close', function() {
    $('.modal').css({'display':'none'});
  });

  // 2. 상단 헤더 메뉴 (영역 이탈 방지 및 순차적 애니메이션)
  // .menu > li가 아니라 .menu 영역 전체에 이벤트를 걸어 안정성을 높입니다.
  $('.container .menu').on('mouseenter', 'li', function(){
    var $submenu = $(this).find(".submenu");

    // 서브메뉴가 없는 li일 경우를 대비
    if($submenu.length === 0) return;

    var actualHeight = $submenu.find('ul').outerHeight() || $submenu.outerHeight();

    // 글씨 먼저 표시
    $submenu.stop().fadeIn(200);
    // 배경 표시 (글씨보다 살짝 늦게)
    $(".container .sub_bg").stop().css({height: actualHeight + 20}).delay(100).slideDown(300);
  });

  $('.container .menu').on('mouseleave', 'li', function(){
    // 배경 먼저 닫힘
    $(".container .sub_bg").stop().slideUp(200);
    // 글씨 사라짐
    $(this).find(".submenu").stop().fadeOut(100);
  });

  // 3. 프로그레스 바 관련
  function moveProgressBar() {
    var $wrap = $('.progress-wrap');
    if($wrap.length === 0) return;

    var getPercent = ($wrap.data('progress-percent') / 100);
    var getProgressWrapWidth = $wrap.width();
    var progressTotal = getPercent * getProgressWrapWidth;
    $('.progress-bar').stop().animate({ left: progressTotal }, 2000);
  }
});

