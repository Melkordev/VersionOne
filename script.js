





// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the button and the menu
    const navButton = document.querySelector('.mobile__nav--button');
    const navMenu = document.querySelector('.mobile__nav--menu');

    // Add a click event listener to the toggle button
    navButton.addEventListener('click', function() {
        // Toggle the 'open' class on the menu
        navMenu.classList.toggle('open');

        // Optional: Also toggle a class on the body or toggle button
        // to change the hamburger icon to an 'X' or disable scrolling
        // document.body.classList.toggle('nav-open');
        // navToggle.classList.toggle('open');
    });

    // Optional: Close the menu if a link inside is clicked (useful for single page apps)
    // If you have traditional links that load new pages, this isn't strictly necessary,
    // as the page reload will close the menu automatically.
    /*
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('open');
            // If you toggled a class on body or navToggle, remove it here too
            // document.body.classList.remove('nav-open');
            // navToggle.classList.remove('open');
        });
    });
    */

});