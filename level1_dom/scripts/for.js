/* /* /* for.js */
// for(초기변수선언; 조건식; 증감식) { 조건이 참일때 반복실행문}
// for문의 초기변수로 자주 사용하는 변수명 : i, j, k, m, n

// 1~5 반복문
for(let i=1; i<6; i++){console.log('반복')}
//5~10 반복문 5678910
for(let i=5; i<=10; i++){console.log(i)}
//5~0 반복문 543210
for(let i=5; i>=0; i--) {console.log(i)}
console.log('------------------------')
//초기값 0 시작
//출력형태) JS 1일차, JS 2일차, JS 3일차
for(let i=0; i<=2; i++){console.log(`JS ${i++}일차`)}
console.log('------------------------')
for(let i=0; i<=2; i++){console.log(`JS ${i+1}일차`)}
console.log('------------------------')
for(let i=0; i<=2; i++){console.log(`JS ${i+=1}일차`)}  
// 2단 구구단 2*1 ~ 2*9
const dan2 = document.querySelector('.dan2')
for(let i=1; i<=9; i++){
    // dan2.children[i].innerHTML = `<li>2 * ${i} = ${2*i}<li>`
    dan2.innerHTML += `<li>2 * ${i} = ${2*i}</li>`
}

//querySelectiorAll 함수로 선택한 DOM 변수 for문
//배열 인덱스 for 문
console.log('------------------------')
const array = ['phoroshop', 'illustrator', 'figma']
//위 배열 이용 반복문으로 콘솔에 array값 모두 출력하기
for(let i=0; i<array.length; i++){console.log(array[i])}
//css~photoshop 역순으로 콘솔 출력
console.log('------------------------')
//css ~ photoshop 역순으로 콘솔 출력
for(let i=array.length-1; i>=0; i--){console.log(array[i])}
console.log('------------------------')
const flower = [{
    name:'장미',
    month:1,
}, {
    name:'개나리',
    month:2,
}, {
    name:'수선화',
    month:3,
}]
//출력예) 1월 탄생화 장미, 2월 탄생화 개나리, 3월 탄생화 수선화
console.log(`${flower[0].month}월 탄생화 ${flower[0].name}`)
console.log(`${flower[1].month}월 탄생화 ${flower[1].name}`)
console.log(`${flower[2].month}월 탄생화 ${flower[2].name}`)
console.log('------------------------')
for(let i=0;i<flower.length;i++){
    console.log(`${flower[i].month}월 탄생화 ${flower[i].name}`)
}
console.log('반복문과 조건문--------------------')
// 1~10 반복출력(홀수)
// 변수%2 == 1
for(let i=1; i<11; i++){
    if(i%2==1){console.log(i)}
}
console.log('--------------------')
// 5~20까지 짝수만 출력
for(let i=5; i<21; i++){
    if(i%2==0){console.log(i)}
}
console.log('--------------------')
for(let i=10; i>0; i--){
    if(i%2!=0){console.log(i)}
}
// 0~10까지 역순으로 홀수만 출력
const dan2Li = document.querySelectorAll('li')
console.log(dan2Li) 
//홀수 li 노란 배경,짝수 li 파란 배경
dan2Li[0].style.backgroundColr = 'skyblue'
for(let i=0; i<dan2Li.length; i++){
    if(i%2){dan2Li[i].style.backgroundColor = 'yellow'}
    else {dan2Li[i].style.backgroundColor = 'skyblue'}
}
// 홀수 li w50 h20 bg bg노랑 color파랑
// 짝수 li w50 h20 bg bg파랑 color노랑
// 객체.classList.add(클래스명)
// 객체.classList.remove(클래스명)
// css or sass 클래스를 미리 준비하고 js 동적결과에 따라 적용
for(let i=0; i<dan2Li.length; i++){
    if(i%2 == 0){dan2Li[i].classList.add('color_even')}
    else (dan2Li[i].classList.add('color_odd'))
    dan2Li[i].classList.add('size')
}
console.log('-----------------------')
// while문(반복횟수가 정해지지 않고 특정 조건이 참인 동안 반복실행)
// 활용 예) 사용자로부터 올바른 입력값을 받을때까지 반복
// 활용 예) 웹서비스 및 게임 등에서 계속 실행되어야 하는 프로그램
// while(조건){조건이 참일때 반복실행}'
// let htmlQ = prompt('a태그는 가로,세로 크기를 가질 수 없다.ox중 하나를 입력하세요')// x
// 정답을 맞출때까지 무한반복질문

// while(htmlQ !='x'){
//      htmlQ = prompt('a태그는 가로,세로 크기를 가질 수 없다.o x중 하나를 입력하세요')
// }
// alert('정답입니다')

// let cssQ = prompt('ox퀴즈 : for문은 반복문이다.')
// while(cssQ != o){
//     cssQ = prompt('ox퀴즈 : for문은 반복문이다.')
// }
// alert('정답입니다')

// while(true){
//     const qa = prompt('자바스크립트는 동적언어입니다(o/x)')
//     if(qa != 'o' && qa !== 'x' ){
//         alert('잘못된 입력입니다. 다시 입력해주세요')
//         continue; //다음 구문을 생략하고 반복문의 처음부터 다시 시작한다.
//     } 
//     //정답, 오답 세트
//     if(qa === 'o'){
//         alert('정답입니다'); break;
//     } else if (qa === 'x'){
//         alert('오답입니다'); break;
//     }
// }
// alert('퀴즈종료')

//2단 ~9단까지 구구단 만들기
const dan99 = document.querySelector('.dan99')
let li99 = ''
for(let i=2; i<10; i++){//1단 for 시작
    for(let j=1; j<10; j++) {//2단 for 시작
        li99 += `<li>${i}x${j}=${i*j}</li>`;
    } //2단 for 종료 (2단 for가 모두 반복 후 1단 다시 시작)
    dan99.innerHTML = li99;
}//1단 for 종료

const cat = {
    color:['흰색','검은색','노란색'],
    age:2,
    name:'삼색이',
}
/* console.log(cat.color)
console.log(cat.age)
console.log(cat.name)
 */
for(let i in cat) {
    console.log(i, cat[i])
}
const menuA = document.querySelectorAll('.menu a')
for(let i in menuA){
    console.log(i)
}
console.log('-------------------------')
for (let i of menuA) { 
    console.log(i)
    i.style.color='red'
    i.addEventListener('click',()=>{
        console.log(i)
    })
}