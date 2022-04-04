'use strict'

window.onload = function(){
 const burger = document.querySelector('.header__burger');
  if(burger) {
	const menu = document.querySelector('.header__menu');
	burger.addEventListener("click", function(e){
	document.body.classList.toggle('lock');
	burger.classList.toggle('active');
	menu.classList.toggle('active');
     });
  }
}
//=======================================================
let column = document.querySelector('.brend__columns');
let columnLength = column.children.length;

let rows = 0;

let sizeWidth = document.documentElement.clientWidth;

 let newItem = numbItem=> {
 let div = document.createElement('div');
 div.className = 'brend__column';
  for(let i = 0; i<numbItem; i++){
   column.append(div.cloneNode(true)); 
 }
}

//====================================================
 let editItems = res=> {
  let rezult, numbColumn;
	for(let i = columnLength; i > 0; i--){
	 if(i % res == 0){
	   rows = i;
	   break;
   }
  }
  rezult = columnLength - rows;
  if(rezult === 0) {
   numbColumn = rezult;
 }else {
     numbColumn = res - rezult;
  }
newItem(numbColumn);

}
//============================================================
let funSize = ()=>{ 

if(sizeWidth > 1300) {
  editItems(4);

}else if(sizeWidth > 995) {
  editItems(3);

} else if(sizeWidth > 676) {
  editItems(2);
}else if(sizeWidth < 677){}

};
 funSize();


//=====================Scroll=====================================
 let header = document.querySelector('.header');
 
window.addEventListener('scroll', () => {
 let scrl = pageYOffset;
 if(scrl > 0 && header.classList.contains("active") !== true){
  header.classList.add('active');
 }else if(scrl === 0 && header.classList.contains("active") === true){
   header.classList.remove('active');
 }
}); 

//======================Timer==========================================

document.addEventListener('DOMContentLoaded', () => {

 let deadline = new Date();
 deadline.setDate(deadline.getDate() + 30);


 let timerId = null;

 let declensionNum = (num, words) => {
  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}

 const $days = document.querySelector('.days');
 const $hours = document.querySelector('.hours');
 const $minutes = document.querySelector('.minutes');
 const $seconds = document.querySelector('.seconds');

 let countdownTimer = () => {

 const diff = deadline - new Date();
 if(diff <= 0) {
  clearInterval(timerId);
 }
 
 const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
 const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
 const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
 const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

 $days.textContent = days < 10 ? '0' + days : days;
 $hours.textContent = hours < 10 ? '0' + hours : hours;
 $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
 $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
}
countdownTimer();

timerId = setInterval(countdownTimer, 1000);

});

//===================IfMobile===============================================================


let isTouchDevice = () => {
 return(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); 
}
