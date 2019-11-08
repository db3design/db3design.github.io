const navbutton = document.getElementById('mobileNav');

navbutton.addEventListener('click', function () {
    
    const overlay = document.getElementById('overlay');

    overlay.style.cssText = "z-index: 2; opacity: 1;";
});

const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function () {
    const overlay = document.getElementById('overlay');

    overlay.style.cssText = "z-index: -1; opacity: 0;";
});