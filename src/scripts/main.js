import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

"user strict"
//ROTATE//



gsap.from('.mockup_fonc',{
    rotation:8,
    scale:1.2,
    duration:1,

    scrollTrigger:{
        trigger:"top",
        start:"top top",
        scrub:true,
    }
})





//GRAB//
const div = document.querySelector('.grab');
let divX = 100;
let divY = 100;
let grabX;
let grabY;
div.style.left = `${divX}px`
div.style.top = `${divY}px`

let drawActive = false;

div.addEventListener('mousedown', (e) => {
    drawActive = true;
    grabX = e.offsetX;
    grabY = e.offsetY;
})

window.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX;
        divY = e.clientY;
        console.log(e.clientX, e.clientY);
        div.style.left = `${divX - grabX}px`;
        div.style.top = `${divY - grabY}px`;
    }
})

div.addEventListener('mouseup', () => {
    drawActive = false;
})



var $loader = document.querySelector('.loader')
window.onload = function() {
  $loader.classList.remove('loader--active')
};




//LA DATE//
let year = new Date().getFullYear();
let date = document.querySelector("#date");
date.innerHTML = "©rafko2022-" + String(year + 1);


