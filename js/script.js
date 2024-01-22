'use strict';
//Реализация функции для класса ibg
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

//Фиксация шапки при скролле
let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
  const scrollPosition = document.documentElement.scrollTop;
  if(scrollPosition>80){
  	header.classList.add('active');
  }else{
  	header.classList.remove('active');
  }
});
//Меню-бургер
let headerIcon = document.querySelector('.menu-header__icon');
let headerMenu = document.querySelector('.menu-header__menu');
let headerLinks = document.querySelectorAll('.menu-header__link');
headerIcon.addEventListener('click',function(){
	headerIcon.classList.toggle('active');
	headerMenu.classList.toggle('active');
	header.classList.toggle('active_menu');
});
for(let link of headerLinks) {
	link.addEventListener('click', function(){
		headerIcon.classList.remove('active');
	headerMenu.classList.remove('active');
	header.classList.remove('active_menu');
	});
}
//Кнопки для вывода контента
const contentItems = document.querySelectorAll(".photography__photoblock");
const contentBtns = document.querySelectorAll("[data-button]");

for(let i=0; i<contentBtns.length; i++) {
	contentBtns[i].addEventListener('click', function(event){
		if(contentBtns[i].dataset.button === contentItems[i].id) {
			for(let k=0; k<contentBtns.length; k++){
				if(contentItems[k] !== contentItems[i]){
					contentItems[k].classList.remove('active');
				}
				if(contentBtns[k] !== contentBtns[i]){
					contentBtns[k].classList.remove('active');
				}
			}
			contentItems[i].classList.add('active');
			contentBtns[i].classList.add('active');
		}
	});
}