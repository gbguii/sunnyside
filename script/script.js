const menuHamburger = document.querySelector(".icon-hamburguer");
const nav = document.querySelector("#nav");
const menuOptions = document.querySelector(".menu");

function toggleMenu(){
    nav.classList.toggle("active");
}


menuHamburger.addEventListener("click", toggleMenu);
menuOptions.addEventListener("click", toggleMenu);



