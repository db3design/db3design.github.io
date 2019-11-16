$(function() {
    $('#scrollDown').click (function() {
      $('html, body').animate({scrollTop: $('section#bioIntro').offset().top }, '2500');
      return false;
    });
  });


  $(function() {
    $('#bioLinkNav').click (function() {
      $('html, body').animate({scrollTop: $('section#bioIntro').offset().top }, '2500');
      return false;
    });
  });

  $(function() {
    $('#projectsLinkNav').click (function() {
      $('html, body').animate({scrollTop: $('section#projects').offset().top }, '2500');
      return false;
    });
  });

  $(function() {
    $('#conactLinkNav').click (function() {
      $('html, body').animate({scrollTop: $('section#contact').offset().top }, '2500');
      return false;
    });
  });

  $(function() {
    $('#brandIcon').click (function() {
      $('html, body').animate({scrollTop: $('section#intro').offset().top }, '2500');
      return false;
    });
  });

  $(function() {
    $('#heroProjectsButton').click (function() {
      $('html, body').animate({scrollTop: $('section#projects').offset().top }, '2500');
      return false;
    });
  });

  $(function() {
    $('#heroBioButton').click (function() {
      $('html, body').animate({scrollTop: $('section#bioIntro').offset().top }, '2500');
      return false;
    });
  });

  var phoneButton = document.getElementById('giveMeACall');
  
  phoneButton.addEventListener('click', function () {
    alert('Give Me A Call: +1-864-593-3007');
  });