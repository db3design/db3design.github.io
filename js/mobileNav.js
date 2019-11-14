const overlay = document.getElementById('overlay');

const hamburger = document.getElementById('mobileNavIcon');

hamburger.addEventListener('click', function () {
    overlay.style.cssText = "display: initial; z-index: 9999999;";
});

const closeBtn = document.getElementById('closeMobileNavBtn');

closeBtn.addEventListener('click', function () {
    overlay.style.cssText = "display: none;";
});