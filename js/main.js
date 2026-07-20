
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
$(document).ready(function(){
  // [수정] include 폴더 안의 header.html을 늦게 불러와도 귀신같이 인식하도록 처리했습니다.
  $(document).on('mouseover', '#gnb_03 li', function(){
    var $sub = $(this).find('.sub_menu');

    // 서브메뉴 내부 li의 높이와 개수를 실시간으로 계산
    var sH = $sub.find('li').height();
    var sC = $sub.find('li').length;

    // 계산된 높이만큼 스르륵 열기
    $sub.stop(true).animate({'height': (sH * sC) + 10});
  });

  $(document).on('mouseout', '#gnb_03 li', function(){
    // 마우스가 나가면 다시 높이를 0으로 부드럽게 닫기
    $(this).find('.sub_menu').stop(true).animate({'height': '0px'});
  });
});
/* ==========================================================================
   3. 슬라이더 & 프로그레스 바 (기존 기능 유지)
   ========================================================================== */
$(document).ready(function(){
  // bxSlider 실행
  $('.bxslider').bxSlider({
    auto: true,
    speed: 1000,
    pause: 4000,
    mode:'horizontal',
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





