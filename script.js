const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener("click", () => {
    nav.classList.toggle('clicked');
    burger.textContent = burger.textContent === '☰' ? '✖' : '☰'; // '?' means yes and ':' means no
})

