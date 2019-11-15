$(function() {
    $('#scrollDown').click (function() {
      $('html, body').animate({scrollTop: $('section#bio').offset().top }, '2500');
      return false;
    });
  });