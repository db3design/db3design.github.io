$(function() {
    $('#scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('#workTop').offset().top }, 'slow');
      return false;
    });
  });