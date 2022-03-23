'use strict';

// .gallery>ul>li에 각각 0.jpg ~ 4.jpg 배경이미지 
// 배열,  .push( ) , for문을 이용해서 설정하시오

const gallery = document.querySelector('.gallery');
const galleryUl = document.querySelector('.gallery>ul');
// const galleryUlLi = document.querySelectorAll('.gallery>ul>li');
// 위 보단 아래가 효율적임....
const galleryUlLi = galleryUl.querySelectorAll('li');
const liSize = galleryUlLi.length      // <- 5


const arrBg = [];

  // (i<5) 
// i = 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, ...
for(let i=0; i<galleryUlLi.length; i++){
  arrBg.push(`url(img/${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}



let i = -1;

const autoGallery=()=>{
  i++;
  console.log(`i -> ${i}`);

  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-i*gap) + 'px';

  // 0, -1200, -2400, -3600, -4800, 0, -1200 .....
  gallery.style.left = goto;
  gallery.style.transition = 'all 0.5s';

  if(i>=liSize-1) i= -1;    
  // i = -1, 0, 1, 2, 3, 
  // (i>=5-1) = (i>=4) 
}

// setInterval(autoGallery,3000);

//////////////////////////////////////////////////////////////////////////////
let setIn = setInterval(autoGallery,2000);




//찾아서  ,  이벤트  ,  구현(함수)
const arrow = document.querySelectorAll('span.arrow');

//////////////////////////
// span.arrow를 마우스 오버시 setInterval 중지
arrow[0].addEventListener('mouseover' , arrowOver);
arrow[1].addEventListener('mouseover' , arrowOver);

function arrowOver(){
  // console.log(event.type);
  clearInterval(setIn);
}

/////////////////
// span.arrow를 마우스 아웃시 setInterval 다시 시작
arrow[0].addEventListener('mouseout' , arrowOut);
arrow[1].addEventListener('mouseout' , arrowOut);

function arrowOut(){
  // console.log(event.type , event.target);
  // setInterval(setIn); 이게 아니라 ▼아래처럼
  setIn = setInterval(autoGallery,2000);
}


// 1111111111
// arrow.forEach(el => el.addEventListener('mouseover',()=>{
//   clearInterval(setIn);
// }));

// 22222222222
// arrow.forEach(el => el.addEventListener('mouseout',()=>{
//   setIn = setInterval(autoGallery,2000);
// }));

// 11111 과  22222 를  하나로 ▼
// arrow.forEach(el=>{
//   el.addEventListener('mouseover' , ()=>{
//     clearInterval(setIn);
//   });
//   el.addEventListener('mouseout' , ()=>{
//     setIn = setInterval(autoGallery,2000);
//   });
// });

// 더 축약해서...
// arrow.forEach(el=>{
//   el.addEventListener('mouseover' , ()=> clearInterval(setIn));
//   el.addEventListener('mouseout' , ()=> setIn = setInterval(autoGallery,2000));
// });




//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////





//찾아서  ,  이벤트  ,  구현(함수)
const itemsUlLi = document.querySelectorAll('.items>ul>li');

//////////////////////////
// .items>ul>li를 마우스 오버시 setInterval 중지
// itemsUlLi[0].addEventListener('mouseover' , itemsOver);
// itemsUlLi[1].addEventListener('mouseover' , itemsOver);
// itemsUlLi[2].addEventListener('mouseover' , itemsOver);
// itemsUlLi[3].addEventListener('mouseover' , itemsOver);
// itemsUlLi[4].addEventListener('mouseover' , itemsOver);
// 이럴 때 forEach 쓰는 겨 ▼
// for문 해도 되는데.. for문은 몇 개부터 몇 개까지 써줘야 한다. 
// for(let i=0; i<itemsUlLi.length; i++){
//   itemsUlLi[i].addEventListener('mouseover',itemsOver)
// }
// 일반적 숫자넣을 땐 괜찮지만, 이 경우는 forEach가 낫다.
// itemsUlLi.forEach(el => el.addEventListener('mouseover',itemsOver));
itemsUlLi.forEach(el => {
  el.addEventListener('mouseover',itemsOver);
  console.log(el);
});


function itemsOver(){
  // console.log(event.type);
  clearInterval(setIn);
}

// ()=>{}   =  function(){}
// ▼ 콜백 함수 ()=>{} 로  위 forEach문과 함수문 축약해서 한 번에 나타내기
// itemsUlLi.forEach(el => el.addEventListener('mouseover',()=>{
//   clearInterval(setIn);
// }));





/////////////////
// .items>ul>li를 마우스 아웃시 setInterval 다시 시작
// itemsUlLi[0].addEventListener('mouseout' , itemsOut);
// itemsUlLi[1].addEventListener('mouseout' , itemsOut);
// itemsUlLi[2].addEventListener('mouseout' , itemsOut);
// itemsUlLi[3].addEventListener('mouseout' , itemsOut);
// itemsUlLi[4].addEventListener('mouseout' , itemsOut);
// 이럴 때 forEach 쓰는 겨 ▼
// for문 해도 되는데.. for문은 몇 개부터 몇 개까지 써줘야 한다. 
// for(let i=0; i<itemsUlLi.length; i++){
//   itemsUlLi[i].addEventListener('mouseout',itemsOut)
// }
// 일반적 숫자넣을 땐 괜찮지만, 이 경우는 forEach가 낫다.
itemsUlLi.forEach(el => el.addEventListener('mouseout',itemsOut));


function itemsOut(){
  // console.log(event.type , event.target);
  // setInterval(setIn); 이게 아니라 ▼아래처럼
  setIn = setInterval(autoGallery,2000);
}
// 함수 arrow함수와 같게 해도 됨...


// ▼ 콜백 함수 ()=>{} 로  위 forEach문과 함수문 축약해서 한 번에 나타내기
// itemsUlLi.forEach(el => el.addEventListener('mouseout',()=>{
//   setIn = setInterval(autoGallery,2000);
// }));



//////////////////////////////////////////////////////////////////////

// 1111111111
// itemsUlLi.forEach(el => el.addEventListener('mouseover',()=>{
//   clearInterval(setIn);
// }));

// 22222222222
// itemsUlLi.forEach(el => el.addEventListener('mouseout',()=>{
//   setIn = setInterval(autoGallery,2000);
// }));

// 11111 과  22222 를  하나로 ▼
// itemsUlLi.forEach(el=>{
//   el.addEventListener('mouseover' , ()=>{
//     clearInterval(setIn);
//   });
//   el.addEventListener('mouseout' , ()=>{
//     setIn = setInterval(autoGallery,2000);
//   });
// });

// 더 축약해서...
// itemsUlLi.forEach(el=>{
//   el.addEventListener('mouseover' , ()=> clearInterval(setIn));
//   el.addEventListener('mouseout' , ()=> setIn = setInterval(autoGallery,2000));
// });






(()=>autoGallery())();