const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-nav");
    burger.textContent = burger.textContent === "☰" ? "X" : "☰"; // This is an if statement in a single line
})