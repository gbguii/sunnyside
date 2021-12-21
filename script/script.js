const menuHamburger = document.querySelector(".icon-hamburguer");

function toggleMenu(){
    const nav = document.querySelector("#nav");
    nav.classList.toggle("active");
}

menuHamburger.addEventListener("click", toggleMenu);