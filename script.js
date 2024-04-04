let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');


const typed = new Typed('.multiple-text',{
    strings:['Student of ADCS at Air University ',' Full Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:800,
    loop:true
});
