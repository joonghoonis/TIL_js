// dom2.js
//1. 변수 section*2, a*2, btn*2(동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section')
const linkCls = document.querySelectorAll('section > a')
const btnCls = document.querySelectorAll('section > button')
console.log(btnCls,linkCls.length,sectionTag.length)
//2. 이벤트와 함수, 속성
// 초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'
// 이벤트, 함수 추가 생성
//a2 클릭 시 section[1] 배경색 변경 
//a태그에 클릭, 터치 이벤트 적용 시 href 속성때문에 스크롤이 위로 올라가는 문제 발생 ->a의 기본속성기능 해제 preventDefault()
/* linkCls[1].addEventListener('click',bgFunc)
function bgFunc(e){
    console.log(e);
    e.preventDefault()
    return sectionTag[1].style.backgroundColor = '#0ff'
} */
/* linkCls[1].addEventListener('click',function(event){
    console.log(event)
    event.preventDefault();
    sectionTag[1].style.backgroundColor = '#0ff'
}) */
linkCls[1].addEventListener('click',(e)=>{
    e.preventDefault();
    sectionTag[1].style.backgroundColor = '#0ff'
})
/* linkCls[0].addEventListener('click',()=>{
    secBtn[0].style.fontSize = '2rem'
}) */
//a, button(type=button)
//button 이용 JS 진행 시 특정 페이지 이동이 필요할 때 location.href를 사용한다 ((예) 로그인성공 시 메인페이지로 이동)
//JS 상대경로 작성은 html 위치 기준으로 작성한다.
// btnCls[0].addEventListener('click',()=>{
//     window.location.href='./dom1.html'
// })
// btnCls[1].addEventListener('click',()=>{
//     window.location.href='../sass_study/project2/index.html'
// })
btnCls[0].addEventListener('click',sassProjectFunc('project1'))//project1/index
btnCls[1].addEventListener('click',sassProjectFunc('project2'))//project2/index
function sassProjectFunc(src){
    return function() {
        window.location.href=`../sass_study/${src}/index.html`
    }
}
//쇼핑몰 수량 변수
const inputNum = document.querySelector('#num')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')
const priceCls = document.querySelector("#numFrm .price ")
let count = 1;
let price = 12900;
console.log(inputNum, plusBtn, minusBtn)
//수량이 1로 시작해서 + 클릭하면 수량 증가, -클릭하면 수량 감소
//초기값 
//1개당 가격이 12900원
// div.value(x) div.textContent div.innerHTML(읽기 전용 태그일때 수정이 필요하다면)input.value (읽기 쓰기 동시에 되는 태그 input)
inputNum.value = count;
priceCls.textContent = price.toLocaleString('ko-kr')
// 이벤트,함수
// + 클릭하면 수량 증가
plusBtn.addEventListener('click',plusFunc)
minusBtn.addEventListener('click',minusFunc)
function plusFunc() {
    console.log(typeof(inputNum.value),typeof(count))
    // return inputNum.value = Number(inputNum.value) + 1
    // 1 증감연산자 ++ --
    inputNum.value = ++count;
    let totalPrice = price * count;
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
}
function minusFunc(){ inputNum.value = --count
}