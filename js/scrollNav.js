$(function() {
    var header = $("nav.navbar");

    var brand = $("div.brand > h3");

    var mobileNavIcon = $('#mobileNavIcon');

    var navLinks = $('.navLinkContainer > .navLink');
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.css({'background-color': '#F7F8F8', 'height': '85px', 'box-shadow': '0 3px 1.5px -3px #E1E0DF', 'border-color': '2px solid #F7F8F8'});

            brand.css({'color': '#0C0C0C', 'font-size': '2.25rem', });

            mobileNavIcon.css({'color': '#43C655'});

            navLinks.css({'color': '#000000'});
            
        } else {
            header.css({'background-color': 'transparent', 'height': '100px', 'box-shadow': 'none'});

            brand.css({'color': 'white', 'font-size': '3rem'});

            mobileNavIcon.css({'color': '#E1E0DF'});

            navLinks.css({'color': '#ffffff'});
        }
    });
  
});