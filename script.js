document.addEventListener('DOMContentLoaded', function() {
    const navButton = document.querySelector('.mobile-nav-button');
    const navMenu = document.querySelector('.mobile-nav-menu');

    navButton.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        navButton.classList.toggle('open');
    }