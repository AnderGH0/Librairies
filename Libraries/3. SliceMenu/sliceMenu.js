const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.add("slide-in");
});

cross.addEventListener("click", ()=>{
    navBar.classList.remove("slide-in");
});