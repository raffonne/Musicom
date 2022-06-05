import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';
import Swiper from 'swiper';
import { TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';

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

gsap.from('.mvp-img',{
    x: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".mvp-img",
        toggleActions: "restart none restart none",
		start: "bottom bottom",
    },
})

gsap.from(".problems__fonc",{
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".problems__fonc",
		toggleActions: "restart none restart none",
        start: "center 90%",
    },
})


gsap.from("figure",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "figure",
		toggleActions: "restart none restart none",
        start: "center 90%",
    },
})

gsap.from(".logo-container",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".logo-container",
		toggleActions: "restart none restart none",
        start: "center 90%",
    },
})

gsap.from(".intro-cs__txt",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".intro-cs__txt",
		toggleActions: "restart none restart none",
        start: "center 90%",
    },
})

gsap.from(".section--intro-projet",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section--intro-projet",
		toggleActions: "restart none restart none",
        start: "center 90%",
    },
})


gsap.from(".bold--conclusion",{
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".bold--conclusion",
		toggleActions: "restart none restart none",
        start: "center 90%",
    },
})


gsap.from(".section--intro__img",{
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".section--intro__img",
        start: "center 90%",
    },
})
gsap.from(".section--intro__text",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section--intro__text",
        start: "center 90%",
    },
})

gsap.from(".info__text",{
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".info__text",
        start: "center 90%",
    },
})
gsap.from(".mockup_footer",{
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".mockup_footer",
        start: "center 90%",
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
		$(selector).each(function(i, el) {
			var speed = $(el).attr('data-speed');


			// init function on scroll
			windowSel.on('scroll', function() {
				parallax($(el), speed);
			});
		});
	}
}

var parallaxItem = '[data-parallax]';
parallaxInit(parallaxItem);



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
	if (activeTheme == "light") {
		darkmodeButtonEl.innerHTML = "Dark Mode";
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



var music = document.getElementById("music");
var isPlaying;
if (music) {
	var button = document.getElementById("toggle");
	button.addEventListener('click', function() {
		togglePlay();
		if (button.getAttribute("data-text-swap") == button.innerHTML) {
			button.innerHTML = button.getAttribute("data-text-original");
		} else {
			button.setAttribute("data-text-original", button.innerHTML);
			button.innerHTML = button.getAttribute("data-text-swap");
		}
	}, false);
	music.volume = 0.2;
	music.onplaying = function() {
		isPlaying = true;
		document.getElementById("music-animation").classList.add('on')
	};
	music.onpause = function() {
		isPlaying = false;
		document.getElementById("music-animation").classList.remove('on')
	};
}

function togglePlay() {
	if (isPlaying) {
		music.pause()
	} else {
		music.play();
	}
};