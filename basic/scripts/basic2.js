// 1일차 복습 (가계부앱 변수생성과 출력)
// 커피 1500원
// 도시락 6000원
// 대중교통 3000원
// 결과) 오늘 총 지출액은 0000원입니다.
let coffe = 1500;
let lunchpackge = 6000;
let transport = 3000;
let total = coffe + lunchpackge + transport;
console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원입니다`)
console.log(`오늘 총 지출액은 ${(coffe + lunchpackge + transport).toLocaleString('ko-kr')}원입니다`)
// 숫자에 3자리 간격 콤마(,) 표시하기
// 10000 숫자(number)
// 10,000 문자(string)(최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.toLocaleString('ko-kr');    
// (객체.객체.객체). 함수();

// 문자데이터 연습
// 리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 리뷰 글자 수는 000자 입니다.
// 객체.함수();
// 객체.속성;
// 글자 수 체크 속성 length
// let review = prompt('리뷰를 작성하세요'); //하이
// console.log(review); //하이 -> string
// let review_length =review.length; // 2
// console.log(review_length);
// console.log(`현재 작성 글자 수는${review_length}자 입니다.`);

// 오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값...}
// console.log(rectagle.height + 'px'); // 200px
// console.log(rectagle.height, 'px'); // 200px
// console.log(`${rectagle.height} px`); // 200px
// 300px, 200px
// console.log{`${rectagle.width}px, ${rectagle.height}px`};

// 도형의 정보를 저장 할 때
let rectagle = {
    width:300,
    height:200,
    x:0,
    y:-100,
}
// 회원 정보를 저장 할 때
let user_info ={
    name:'가을',
    age:3,
    gender:'female',
    area:'서울'
}
// 쇼핑몰 정보를 저장 할 때
let product = {
    name:'마스크',
    price:1000,
    quantity:999,
    color:'white'
}
//영화관 좌석 지정 할 때
let movie_theater = {
    name:'VIP',
    position:'F1',
    price:14500
}

// 상품명 : 마스크(white)
// 상품가 : 1,000원
// 수량 : 999개
console.log(`상품명 : ${product.name}(${product.color})`)
console.log(`상품가 : ${product.price.toLocaleString('ko-kr')}원`)
console.log(`수량 : ${product.quantity}개`)
// 오브젝트 데이터 타입 2. 배열
// 변수생성키워드 변수명 = [배열값, 값2, 값3]
// 변수생성키워드 변수명 = new Array(값, 값, 값)
// 변수생성키워드 변수명 = new Array(자리값)
const yoil = ['월', '화', '수','목','금','토','일']
console.log(yoil);
console.log(`오늘은 ${yoil[2]}요일`) // 오늘은 수요일
const en = new Array('a', 'b', 'c', 'd', 'e', 'f')
console.log(en);
console.log(en, en[0], en.length)
const year = new Array(4);
console.log(year);
year[0] = 2025;
year[1] = 2024;
year[2] = 2023;
year[3] = 2022;
console.log(year);
console.log(year[0]);

// 좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기
const color = new Array('red','blue','yellow','pink','orange','green')
console.log(color[1],color[5])
const fruit = new Array('apple','orange','banana','watermelon','grape')
console.log(fruit[4],fruit[3],fruit[2],fruit[1],fruit[0])
// Q3. 요일-날씨정보 출력
// 월-맑음
// 화 - 비
// 수 -흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 흐림
const weather = new Array ('맑음','흐림','비')
console.log(`${yoil[0]} - ${weather[0]}`)
console.log(`${yoil[1]} - ${weather[2]}`)
console.log(`${yoil[2]} - ${weather[1]}`)
console.log(`${yoil[3]} - ${weather[0]}`)
console.log(`${yoil[4]} - ${weather[0]}`)
console.log(`${yoil[5]} - ${weather[2]}`)
console.log(`${yoil[6]} - ${weather[1]}`)

const megabox = new Array(8) // 빈 좌석 준비
megabox[0] = 'A1';
megabox[1] = 'A2';
console.log(`현재 예매 좌석 : ${megabox[0]}${megabox[1]}`)
megabox[0] = ''
megabox[1] = null
console.log(`현재 예매 좌석 : ${megabox[0]}${megabox[1]}`)

// cgv 좌석 예매와 취소
const cgv = [] // 빈 배열 준비
console.log(cgv.length)
//좌석 A1 선택
cgv.push('A1')
console.log(cgv)
cgv.push('A2')
console.log(cgv)
cgv.pop()
console.log(cgv)
cgv.unshift('A2')
console.log(cgv)
cgv.shift()
console.log(cgv)
cgv.push('B1','B2')
console.log(cgv)
// 선택 좌석이 8개일 때 좌석 추가 금지
console.log(cgv.length >= 8)
const price = 11000;
//출력결과예시
// 선택 좌석 수 :
// 총 결제 금액 :
let cgv_length = cgv.length;
let cgv_total_price = (cgv_length * price).toLocaleString('ko-kr');
console.log(`선택 좌석 수 : ${cgv.length}`)
console.log(`총 결제 금액 : ${cgv_total_price}`)

console.log('-----------------------------')
// 연산자 연습
// 1. 산술연산자
let num1 = 5;
let num2 = 2;
let result = num1 + num2
console.log(result)
result = num1 - num2
console.log(result)
result = num1 * num2
console.log(result)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)

// Q. 이항 연산자 활용 두 수를 사용자에게 입력받고 입력받은 값 활용 더하기만 되는 계산기 만들기
const firstNum = 2
const lastNum = 2
console.log(firstNum,lastNum) //출력 테스트
console.log(firstNum + lastNum) //연산 테스트 (1+2 = 12 오류)
console.log(typeof(firstNum),typeof(lastNum))//오류찾기
//오류찾기, 데이터타입 확인 typeof() -> string string
//문자+문자 = 문자, 1+2 = 12
//오류해결 -> 문자를 숫자로 변환, 변환하는 함수가 ? Number()
console.log(Number(firstNum), Number(lastNum)) 
// 일회성 출력으로 문제해결 안됨-> 원인은 prompt가 문자열로 바꾸기 때문에 -> prompt를 Number로 감싸기
console.log(`${firstNum}*${lastNum}=${firstNum+lastNum}`)   //최종 1+1 = 2

console.log('-----------------------')
// 증감연산자
let x = 5;
let y = 0;
console.log(x,y); // x 5 y 0
y = x++; 
console.log(x,y); // x 6 y 5
x = ++y;
console.log(x,y); // x 6 y 6
x++;
console.log(x,y); // x 7 y 6
--y; 
console.log(x,y); // x 7 y 5
let a = 10
let b = 20
let c = 30
let d = 40
//a=10, b=20, c=30, d=40
a++
b--
c++
d--
console.log(a,b,c,d)
//a=11 ,b=19,c=31,d=39
a= ++b // a = 20 b=20
b = a++ // a= 21 b = 20  
c = a+b // c41
d = ++c // c= 42 d= 42 
console.log(a,b,c,d)
//a=21,b=,20c=42,d=42
a = ++c + 10 // a = 53 c= 43
b = --d + 1 // 41 b= 42
console.log(a,b,c,d)
//a=53,b=42c=43,d=41

console.log('------------------')
//연산자3.복합대입연산자★
let number = 10;
//number = number + 5;
number += 5; 
console.log(number); //15
number -= 5;
console.log(number); //10
number *=3;
console.log(number); //30
number /=6;
console.log(number); //5
number %=3;
console.log(number); //2

// var number = 1;
// number += 1;
// number++;

// number += 2;
// number++;
// number++;