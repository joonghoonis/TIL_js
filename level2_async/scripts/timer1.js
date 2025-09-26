// timer1.js
// setInterval(콜백함수, 시간)
/* let num1 = 1;
const timer1 = setInterval(function(){
    num1++
    if(num1 > 5) num1 = 1
    console.log('timer test' + num1)
}, 700) */

// 0~6 반복타이머
// 12345601234560123456
/* let num1 = 0;
const timer1 = setInterval(function(){
    num1++
    if(num1 > 6) num1 = 0
    console.log(num1)
},300) */
//3~0 반복 타이머
// 3210 3210 3210
/* let num2 = 3
const timer2 = setInterval(function() {
    console.log(num2)
    num2 --
    if(num2 < 0) num2 = 3
}, 500) */
// 이미지 슬라이드 타이머 활용
/* const gentleSlide1 = document.querySelectorAll('.gentle_slide_container1 .slide')
console.log(gentleSlide1)

//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345
let slideNum = 0
const slideTimer = setInterval(function(){
    slideNum++
    if(slideNum >= gentleSlide1.length) slideNum = 0
    //console.log(slideNum)
    for(let i of gentleSlide1) i.style.display = 'none'
    gentleSlide1[slideNum].style.display = 'block'
},1000)
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')

let slideNum2 = gentleSlide2.length - 1
const slidetimer2 = setInterval(function(){
    slideNum2--
    if(slideNum2 < 0 ) slideNum2 = gentleSlide2.length -1
    for(let i of gentleSlide2) i.style.display = 'none'
    gentleSlide2[slideNum2].style.display = 'block'
},1000)
 */

// opacity + visiblity 서서히 나타나는 슬라이드 애니메이션
const gentleSlide1 = document.querySelectorAll('.gentle_slide_container1 .slide')
const gentleSlide2 = document.querySelectorAll('.gentle_slide_container2 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum = document.querySelector('.page_number .total')
let slideNum = 0
console.log(gentleSlide1)
//슬라이드 총 번호 표시
gentleSlideTotalNum.textContent = gentleSlide1.length
//현재 페이지
gentleSlideCurrentNum.textContent = slideNum+1


//012345 현재 존재하는 슬라이드 인덱스
//12345 012345 012345
for(let i of gentleSlide1) i.style.transition = 'opacity 1s'
const slideTimer = setInterval(function(){
    slideNum++
    if(slideNum >= gentleSlide1.length) slideNum = 0
    //console.log(slideNum)
    for(let i of gentleSlide1) i.style.opacity = '0'
    gentleSlide1[slideNum].style.opacity = '1'
    gentleSlideCurrentNum.textContent = slideNum+1
    
},3000)
for(let i of gentleSlide2) i.style.transition = 'opacity 1s'
let slideNum2 = gentleSlide2.length - 1
const slidetimer2 = setInterval(function(){
    slideNum2--
    if(slideNum2 < 0 ) slideNum2 = gentleSlide2.length -1
    for(let i of gentleSlide2) i.style.opacity = '0'
    gentleSlide2[slideNum2].style.opacity = '1'
},3000)

