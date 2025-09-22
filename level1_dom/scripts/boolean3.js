// 상/하/좌/우 버튼 클릭 시 캐릭터 10px 이동
const moveBtn = document.querySelectorAll('#control > .btn')
const character = document.querySelector('#map img')
let num = 0;

//상
moveBtn[0].addEventListener('click',()=>{
    num += 10;
    console.log(num)
    character.style.transform = `rotate(90deg) translateX(-${num}px)`
})
//하
//좌
//우


// input 입력창에 영어로 이동명령어를 작성했을 때 캐릭터 10px 이동
const controlInput = document.querySelector('#control #txt')
console.log(controlInput)
/*  if(left)*{}else if(right){}else if(top){}else if(bottom{}else{오답}) */
controlInput.addEventListener('keyup',(e)=>{
    if(e.key == 'Enter'){
        const inputVal = controlInput.value
        if(inputVal =='left' || inputVal =='right' || inputVal =='top' || inputVal =='bottom')
        {
            console.log(`${inputVal} 이동`)
            controlInput.value = '';
        } else{
        console.log('오답')
        }
    }
})

// 학점에 따라 A~F 등급 나오는 프로그래밍
// 100~90 A
// 89~80 B
// 79~70 C
// 69~60 d
// 59 이하 F
const score = 90//prompt('학점을 입력하세요')
// function scoreCalc() {
//     if (score >= 90){
//         console.log('a등급')
//     } else if (score >= 80){
//         console.log('b등급')
//     } else if (score >= 70){
//         console.log('c등급')
//     }else if (score >= 60){
//         console.log('d등급')
//     } else if (score <= 59){
//         console.log('f등급')
//     }
// }
// scoreCalc()
if (score >= 0 && score <= 100){    
    if ( score >= 90){
        console.log('A등급')
    } else if ( score >= 80){
        console.log('B등급')
    } else if ( score >= 70){
        console.log('C등급')
    }else if ( score >= 60){
        console.log('D등급')
    } else {
        console.log('F등급')
    }
} else {
    console.log('0~100사이의 값만 입력해주세요. ')
}
// switch ~ case
// 쇼핑몰 검색창에 사용자가 입력한 값 조건확인
// 딸기 -> 1000원
// 사과 -> 2000원
// 판매상품이 아닙니다.





//const fruit = prompt('검색어를 입력하세요')
const fruit = '사과'
console.log(fruit);

switch(fruit){
    case'딸기':
        console.log('1000원');
         break; //강제종료
    case'사과':
        console.log('2000원'); 
        break;
        default :console.log('판매상품이 아닙니다.')
}

//if(fruit =='딸기'){console.log('1000원')}
//else if(fruit == '사과'){consoel.log('2000원')}

//전화 단축키
const phoneNumber = 1 //prompt('단축키 입력')
console.log(phoneNumber)
switch(phoneNumber){
    // 1 누르면 엄마
    case '1' :
        console.log('엄마')
        break;
        // 2 누르면 아빠
    case '2' :
        console.log('아빠')
        break;
    default : console.log('해당 단축키가 없습니다.')
}
// 다른 숫자는 "해당 단축키가 없습니다."

//쇼핑몰 수량+가격 알고리즘
//-버튼 클릭 시 수량감소+가격감소(1일 때 - 누르면 경고)
const minusBtn = document.querySelector('#minus')
const plusBtn =  document.querySelector('#plus')
const numberInput = document.querySelector('#num')
const priceP = document.querySelector('p.price')
let numVal = 5;
let originalPrice = 900;
let stock = 10; //재고

numFunc()
function numFunc() {
    numberInput.value = numVal;
    priceP.textContent = `${numVal*originalPrice}원` 
}
minusBtn.addEventListener('click',()=>{
    numVal == 1 ? alert('최소 수량입니다.') : numVal-- ; 
    numFunc()
}) 
plusBtn.addEventListener('click',()=>{
    numVal > stock ? alert('최대 수량입니다.') : numVal++; 
    numFunc()
})