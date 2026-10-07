// Senior Bridge - N. Lavanya
window.onload = function () {
    console.log("Welcome to Senior Bridge!");
};


// Explore button message
function showWelcome() {
    alert("Welcome to Senior Bridge!");
}


// Smooth scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}


// Display current year in footer
const year = new Date().getFullYear();

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = year;
}
