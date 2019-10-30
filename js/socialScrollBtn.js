$(function() {
    $('#socialScrollBtn').click (function() {
      $('html, body').animate({scrollTop: $('#workLast').offset().top }, 'slow');
      return false;
    });
  });