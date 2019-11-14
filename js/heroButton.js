$(function() {
    $('#scrollDown').click (function() {
      $('html, body').animate({scrollTop: $('section#bio').offset().top }, 'slow');
      return false;
    });
  });