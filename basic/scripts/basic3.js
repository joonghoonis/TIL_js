// 함수
// 1.함수 대기(생성한 상태)
function func1 () {
    console.log('반복 실행 내용')
}
// 2. 함수 호출(생성 밖)
func1();

// 함수의 매개변수 활용
function storyFunc1(day, data='조약돌') {/* 이야기의 첫   째날 성공사례 */
    console.log(`매개변수 값 확인 " ${data}`)
    // 헨젤, 그레텔 준비
    const person = ['헨젤', '그레텔']
    // 조약돌 준비
    // const src = '조약돌'
    // 집 돌아간다 목표
    // 1일차 헨젤과 그레텔이 조약돌을(를) 이용해서 집을 찾아갔습니다.
    // 2일차 헨젤과 그레텔이 빵부스러기을(를) 이용해서 집을 찾아갔습니다.
    // 3일차 헨젤과 그레텔이 쌀을(를) 이용해서 집을 찾아갔습니다.
    console.log(`${day}일차 ${person[0]}과 ${person[1]}이 ${data}을(를) 이용해서 집을 찾아갔습니다.`)
}
/* 이야기의 둘째날 실패사례 */
/* function storyFunc2() { 
    const person = ['헨젤', '그레텔']
    const src = '빵부스러기'
    alert(`person[0]과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`)
} */
storyFunc1(1); // 기본값 사용 시 매개변수 값 전달안함
storyFunc1(2, '빵부스러기'); // 기본값 변경 시 매개변수 값 전달함
storyFunc1(3, '쌀');
/* 커피 레시피 함수
아메리카노 (hot) 레시피
2컵 물을 채운다
1샷 에스프레소를 넣는다
  */
function recipe(menu,cup,shot=1) {
    const meterial = ['물' , '에스프레소']
    console.log(`${menu}레시피  ${shot}샷 `)
    console.log(`${cup}컵 ${meterial[0]}을 채운다`)
    console.log(`${meterial[1]}를 넣는다`)
}
recipe('아메리카노(hot)',2,);
recipe('에스프레소',0,);
// 커피주문 키오스크 알고리즘 (배열 활용법)
function kiosk(hotice, name,cup) {
    const temp = ['따뜻한' , '차가운'] 
    const menu = ['아메리카노','녹차라떼','카페라떼']
    console.log(`${temp[hotice]} ${menu[name]} ${cup}잔 주문 완료되었습니다.`)
}
kiosk(0,2,2)
kiosk(1,1,1)
kiosk(0,2,2)
kiosk(1,1,1)
console.log('----------------------------')
// 키오스크 주문 출력 (객체 활용법)
function kiosk_obj(hotice,name,num=1) {
    const coffeMenu = {
        type : ['따뜻한', '차가운'],
        menu : ['아메리카노','녹차라떼','카페라떼']
    }
    console.log(`${coffeMenu.type[hotice]} ${coffeMenu.menu[name]} ${num}잔 주문 완료되었습니다.`)
}
kiosk_obj(0,0)
kiosk_obj(1,1,2)
kiosk_obj(0,2)
kiosk_obj(0,0,2)

console.log('---------------------리턴')

function plusFunc1(n1,n2) {
    let calc = `${n1} * ${n2} = ${n1*n2}, `
    calc +=  `${n1} + ${n2} = ${n1+n2}`
    /* 문제1) 곱하기가 아닌 더하기만 나오는 문제 */
    //대입연산자(=) 이전 변수 값을 제거하고 새로운 값 대입
    //calc = calc + '계산식'
    return calc
}
/* function plusFunc2(n1,n2) {
    alert(`${n1} + ${n2} = ${n1+n2}`)
} */
console.log(plusFunc1(3,5))
// alert(plusFunc1(2,4))

// 구구단 함수(2~9단까지)
// 출력예시) 변수 x 2  = 결과
console.log(`-------------------------------`)
function dan99Func(dan) {
    //구구단 식
    let dan99 = `${dan} X 1 = ${dan*1}, `
    dan99 += `${dan} X 2 = ${dan*2}, `
    dan99 += `${dan} X 3 = ${dan*3}, `
    dan99 += `${dan} X 4 = ${dan*4}, `
    dan99 += `${dan} X 5 = ${dan*5}, `
    dan99 += `${dan} X 6 = ${dan*6}, `
    dan99 += `${dan} X 7 = ${dan*7}, `
    dan99 += `${dan} X 8 = ${dan*8}, `
    dan99 += `${dan} X 9 = ${dan*9}, `
    return dan99
    //return 아래 작성된 식은 실행되지 않음.
}
console.log(dan99Func(7))
// prompt(dan99Func())
// alert(dan99Func())

// 할인율 계산기
// KB국민카드 5% 할인적용가 ?원
// 현대카드 10% 할인적용가 ?원
// 삼성카드 20% 할인적용가 ?원

//할인율 계산법 (100-할인율) / 100 = 0.95
//판매가 * 0.95
function cardFunc(type,num) {
    const price = 1051000; //원가
    const card = ['KB국민카드','현대카드','삼성카드'];
    const calc = (100-num) / 100; // 할인율 계산
    const totalprice = price *   calc  ; // 할인가 계산
    const result = `${card[type]} ${num}% 할인적용가 ${totalprice.toLocaleString('ko-kr')}원`; // 출력 결과
    return result// 반환결과
}
// 국민카드 5% 할인적용가 ?원
console.log(cardFunc(0,5))
console.log(cardFunc(1,10))
console.log(cardFunc(2,20))

// 익명함수
// 변수 내 function 키워드를 지정해 생성하는 함수

// 일반함수와 익명함수의 차이
function hello1(user){
    return alert('hello '+user)
}
//hello1('joonghoon')

const hello2 = function(user) {
    return alert('hello '+user)
}
//hello2('yb')

// 익명함수 + 화살표함수(ES6)
// 변수키워드 변수명 대입연산자 (매개변수) 화살표 {실행}
const hello3 = (user) => {
    return console.log('hello '+user)
}
hello3('jh')
