
/* ==========================================================================
   1. 모달 팝업 (이벤트 위임 방식으로 수정)
   ========================================================================== */
$(function() {
  // [수정] 나중에 불러오는 .thumb에 대해서도 작동하도록 document 위임 방식을 사용합니다.
  $(document).on('click', '#sub .list .cont .thumb', function() {
    $('.modal').css({'display':'block'});
    $('.modal .bg').css({'background':'#000','opacity':'0.9'});

    var img = $(this).find('img').attr('src');
    $('.modal').find('img').attr('src',img);

    var w = $('.modal img').outerWidth() / 2;
    var h = $('.modal img').outerHeight() / 2;

    $('.modal img').css({'margin-left':-w, 'margin-top':-h});
  });

  // [수정] thumb2에 대해서도 이벤트 위임 적용
  $(document).on('click', '#sub .list .thumb2', function() {
    $('.modal').css({'display':'block'});
    $('.modal .bg').css({'background':'#000','opacity':'0.9'});

    var img = $(this).find('img').attr('src');
    $('.modal').find('img').attr('src',img);

    var w = $('.modal img').outerWidth() / 2;
    var h = $('.modal img').outerHeight() / 2;

    $('.modal img').css({'margin-left':-w, 'margin-top':-h});
  });

  // 모달 닫기 버튼
  $(document).on('click', '.modal .xi-close', function() {
    $('.modal').css({'display':'none'});
  });
});


//2. 상단 헤더 메뉴 애니메이션 (이벤트 위임 방식으로 완전 교체)
$(document).on('mouseenter', '.container .menu > li', function(){
  var $submenu = $(this).find(".submenu");
  var actualHeight = $submenu.find('ul').outerHeight() || $submenu.outerHeight();

  // 1. 배경을 먼저 아래로 펼침
  $(".container .sub_bg").stop().css({height: actualHeight + 20}).slideDown(300, function() {
    // 2. 배경 애니메이션이 끝난 후 서브메뉴 글씨가 나타남
    $submenu.stop().fadeIn(200);
  });
});

$(document).on('mouseleave', '.container .menu > li', function(){
  var $submenu = $(this).find(".submenu");

  // 나갈 때는 글씨가 먼저 사라지고 배경이 닫힘
  $submenu.stop().fadeOut(100, function() {
    $(".container .sub_bg").stop().slideUp(200);
  });
});
$(document).ready(function(){
  moveProgressBar();

  // 브라우저 리사이즈 시 대응
  $(window).resize(function() {
    moveProgressBar();
  });



// 프로그레스 바 애니메이션 함수
  function moveProgressBar() {
    console.log("moveProgressBar");
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2000;

    $('.progress-bar').stop().animate({
      left: progressTotal
    }, animationLength);
  }
});





