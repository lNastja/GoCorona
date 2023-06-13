"use strict"

const menuIcon = document.querySelector('.header__icon');
console.log(menuIcon);
const menuBody = document.querySelector('.menu-header__body');

if (menuIcon) {
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('_active');
		menuBody.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	});
}