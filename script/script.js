const menuHamburger = document.querySelector(".icon-hamburguer");
const nav = document.querySelector("#nav");
const menuOptions = document.querySelector(".menu");

function toggleMenu(){
    nav.classList.toggle("active");
}

function closeMenu(evento){
    if(nav.classList.contains("active")){
        if(evento.path[0].classList != "icon-hamburguer"){
            toggleMenu();
        }
    }
}
menuHamburger.addEventListener("click", toggleMenu);

document.body.addEventListener("click", closeMenu);

