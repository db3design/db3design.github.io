$(function() {
    $('#webDevScrollBtn').click (function() {
      $('html, body').animate({scrollTop: $('#workSecond').offset().top }, 'slow');
      return false;
    });
  });