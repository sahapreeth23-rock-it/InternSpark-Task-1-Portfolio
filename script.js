
/* Update the footer year automatically */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* Close the mobile menu after clicking a navigation link */
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbarMenu.classList.contains("show")) {
            const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
            menu.hide();
        }
    });
});

/* Display a message when the email button is clicked */
const emailButton = document.querySelector('#contact a[href^="mailto:"]');

emailButton.addEventListener("click", function () {
    console.log("Opening your default email application.");
});
