let mode=document.body;
let Productbackground=document.querySelector(".outer-available");
let Headerbackground=document.querySelector(".header");

function ChangeMode(){
    mode.classList.toggle("dark-mode");
    Productbackground.classList.toggle("outer-available-darkMode")
    
    }