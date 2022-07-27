const toggle = document.querySelector("#toggle");
const nav = document.querySelector(".nav-container nav");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("close");
    nav.classList.toggle("show-nav");
})