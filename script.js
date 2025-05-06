document.addEventListener('DOMContentLoaded'), function() {
    const navButton = document.querySelector('.mobile__nav--button');
    const navMenu = document.querySelector('.mobile__nav--menu');

    navButton.addEventListener('click'), function() {
        navMenu.classList.toggle('open');
        
    }
}