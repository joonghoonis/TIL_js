/* for.js */
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
for(let i=0; i<=2; i++){console.log(`JS ${i+1}일차`)}