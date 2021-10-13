// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



// Menu Toggle 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.phone-menu');
const menuClose = document.querySelector('.menu-btn-close');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

function toggleMenu() {
	if(!showMenu) {
			menu.style.display = 'block';
			menuClose.style.display = 'block';
			menuBtn.style.display = 'none';
	
			showMenu = true;
	} else {
			menu.style.display = 'none';
			menuClose.style.display = 'none';
			menuBtn.style.display = 'block';

			showMenu = false;
	}
}


window.addEventListener('mouseup', function(event) {
	let box = menu;
	if (event.target != box && event.target.parentNode != box) {
		box.style.display = 'none'
		hamburger.classList.remove('open');
		menuClose.style.display = 'none';
		menuBtn.style.display = 'block';
	}
});



// Scroll Reveal

ScrollReveal().reveal('.reveal', { distance: '100px' });