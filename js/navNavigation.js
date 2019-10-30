const aboutLink = document.getElementById('aboutLink');

const servicesLink = document.getElementById('servicesLink');

const aboutContent = document.querySelector('.aboutContent');

const servicesContent = document.querySelector('.servicesContent');

servicesLink.addEventListener('click', function () {
    aboutContent.style.cssText = "display: none";

    servicesContent.style.cssText = 'display: initial';

    aboutLink.classList.remove('active');

    servicesLink.classList.add('active');
});

aboutLink.addEventListener('click', function () {
    aboutContent.style.cssText = 'display: initial';

    servicesContent.style.cssText = 'display: none';

    aboutLink.classList.add('active');

    servicesLink.classList.remove('active');
});
