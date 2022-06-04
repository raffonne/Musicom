import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';
import Swiper from 'swiper';

gsap.registerPlugin(ScrollTrigger);

"user strict"


gsap.from('.mockup_fonc', {
   rotation: 10,
   scale: 1.5,

   scrollTrigger: {
      trigger: "top",
      start: "top top",
      scrub: true,
   }
});

var proto = document.querySelector('.img-parallax');
if (proto) {
   gsap.to('.img-parallax', {
      x: -200,
      duration: 1,
      scrollTrigger: {
         trigger: '.img-parallax',
         scrub: 0.5,
      }
   })
}
gsap.from(".image__anim", {
   scale: 1.3,
   duration: 5,
   scrollTrigger: {
      trigger: ".image__anim",
      start: "-60% 10%",
      end: "60% 30%",
      scrub: 0.8,
   },
})


var windowSel = $(window);

// parallax
function parallax(selector, speed) {
   var movement = -(windowSel.scrollTop() * (speed / 10));
   $(selector).css('transform', 'translate3d(0,' + movement + 'px, 0');
}

// parallax init
function parallaxInit(selector) {
   if ($(selector).length) {
      $(selector).each(function (i, el) {
         var speed = $(el).attr('data-speed');


         // init function on scroll
         windowSel.on('scroll', function () {
            parallax($(el), speed);
         });
      });
   }
}

var parallaxItem = '[data-parallax]';
parallaxInit(parallaxItem);

// according to effect from this website: http://www.techstyle.com/


//POP-UP Crédits//
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
   })
})

overlay.addEventListener('click', () => {
   const modals = document.querySelectorAll('.modal.active')
   modals.forEach(modal => {
      closeModal(modal)
   })
})

closeModalButtons.forEach(button => {
   button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
   })
})

function openModal(modal) {
   if (modal == null) return
   modal.classList.add('active')
   overlay.classList.add('active')
}

function closeModal(modal) {
   if (modal == null) return
   modal.classList.remove('active')
   overlay.classList.remove('active')
}


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


// var $loader = document.querySelector('.loader')
// window.onload = function() {
//   $loader.classList.remove('loader--active')
// };


//LA DATE//
let year = new Date().getFullYear();
let date = document.querySelector("#date");
date.innerHTML = "©rafko2022-" + String(year + 1);


/*darkmode*/
let darkmodeButtonEl = document.querySelector(".btn--darkmode")
let activeTheme = localStorage.getItem("theme");
if (activeTheme) {
   setTheme(activeTheme);
   if (activeTheme == "dark") {
      darkmodeButtonEl.innerHTML = "Light Mode";
   }
}
if (darkmodeButtonEl) {
   darkmodeButtonEl.addEventListener("click", toggleTheme);
}

function toggleTheme() {
   let theme = document.body.getAttribute("data-theme");
   if (theme == "dark") {
      document.body.setAttribute('data-theme', theme);
      setTheme("light");
      darkmodeButtonEl.innerHTML = "Dark Mode";
   } else {
      setTheme("dark")
      darkmodeButtonEl.innerHTML = "Light Mode";
   }
}

function setTheme(theme) {
   document.body.setAttribute('data-theme', theme);
   localStorage.setItem("theme", theme);
}