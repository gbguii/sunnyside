// import icon menu from html.
const menuHamburger = document.querySelector(".icon-hamburguer");
// import menu from html.
const nav = document.querySelector("#nav");
// import options menu from html.
const menuOptions = document.querySelector(".menu");

// function add or remove class on menu to show options menu. Use class on CSS.
function toggleMenu(){
    nav.classList.toggle("active");
}

// function close options menu when click out or on menu.
function closeMenu(event){
    if(nav.classList.contains("active")){
        if(event.path[0].classList != "icon-hamburguer"){
            toggleMenu();
        }
    }
}
menuHamburger.addEventListener("click", toggleMenu);

document.body.addEventListener("click", closeMenu);

