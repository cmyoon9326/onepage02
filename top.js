$(document).ready(function() {
  $('#movetopbt').bind('click', function() {
    $('html').animate({scrollTop: '0'}, 680);
  });
  // 애니메이션 효과로 자연스럽게 이동됨, 0.68초

});

$('html').stop().animate({scrollTop: 0}, 1000, 'swing', function() {
  alert('어서오세요!');
});
