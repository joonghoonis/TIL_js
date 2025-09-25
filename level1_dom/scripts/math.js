console.log(Math);
console.log(Math.PI);
// Math.floor, round, random
let num = Math.floor(3.7) 
console.log(num)
num = Math.floor(3.2)
console.log(num)
num = Math.round(3.8)
console.log(num)
num = Math.round(3.51)
console.log(num)
num = Math.floor(Math.random() * 10)+1; 
console.log(num)
// 10%, 20%, 30%, 40%, 50% 랜덤 출력
const couponDB =['10%','20%','30%','40%','50%']
const couponBtn = document.querySelector('#coupon')

// 버튼 클릭 시 쿠폰 5개 중 1개가 랜덤 alert() 출력
couponBtn.addEventListener('click',()=>{couponRandomFunc()})
function couponRandomFunc() {
    let couponNum = Math.floor(Math.random() * 5)
    alert(couponDB[couponNum])
}

//화면에 접속했을 때 
const adDB = [{
    name:'제주도 여행',
    src:'https://i.pinimg.com/1200x/4b/27/8f/4b278f15676e06d21868f6fa3056be26.jpg',
    link:'http://naver.com'
},{
    name:'일본 여행',
    src:'https://i.pinimg.com/1200x/4f/f6/e5/4ff6e53598109bdc18a176295d7c9718.jpg',
    link:'http://google.com'
}]
const adA = document.querySelector('.ad a')
window.addEventListener('load',()=>{
    const randomNum = Math.floor(Math.random() * 2)
    adA.children[0].src = adDB[randomNum].src 
    adA.children[0].alt = adDB[randomNum].name
    adA.href = adDB[randomNum].link
})
// 더치페이 계산기
// 계산하기 클릭 시 총 금액과 인원수에 따라 계산결과 출력하기
// 금액이 소수점일 경우 소수점에 따라 반올림하기
const calc = document.querySelector('.calc')
const price = document.querySelector('#price')
const person = document.querySelector('#person')
const totalBtn = document.querySelector('#total_btn')
const result = document.querySelector('.result')

totalBtn.addEventListener('click',()=>{
    calcFunc()
})

function calcFunc() {
    let calcResult = Math.round(price.value / person.value)
    result.children[0].textContent = calcResult.toLocaleString('ko-kr')
}
// DB
const shopDB =[{
    shop:'쿠팡',
    id:'하루견과',
    price:1000
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000
}]
// 변수
const minPrice = document.querySelector('.min_price')
const minPriceBtn = document.querySelector('#min_price_btn')

minPriceBtn.addEventListener('click',()=>{
        const priceMap = shopDB.map(i=>i.price)
        // console.log(priceMap)
        // console.log(Math.min(...priceMap))
        minPrice.textContent = `최저가 ${Math.min(...priceMap).toLocaleString('ko-kr')}원`
        //쇼핑몰별 최고가
        const shopListUl = document.querySelector('.min_sort #shop_list')
        const shopSort = [...shopDB].sort((a,b)=>b.price-a.price)
        for(let i of shopSort){
            const li = document.createElement('li')
            li.innerHTML = `<a href="#">${i.shop}</a>`
            li.innerHTML += `<span>${i.id}</span>`
            li.innerHTML += `<em>${i.price}</em>`
            shopListUl.appendChild(li)
        }
})
console.log('---------------------------')
const shopDB2 = [{
    shop:'쿠팡',
    name:'고구마',
    price:2000,
    delivery:2500
},{
    shop:'이마트 몰',
    name:'고구마',
    price:2900,
    delivery:0
},{
    shop:'네이버',
    name:'고구마',
    price:4000,
    delivery:1000
},]
const pBtn = document.querySelector('.min2 #price_btn')
const dBtn = document.querySelector('.min2 #delivery_btn')
const minResult = document.querySelector('.min2 .result1')
const delResult = document.querySelector('.min2 .result2')

pBtn.addEventListener('click',()=>{
    const shopPrice = shopDB2.map(i=>i.price)
    const resultPrice = Math.min(...shopPrice) 
    minResult.textContent = `최저가는 ${resultPrice}원  입니다`
    //최저가 -> 최고가 오름차순 정렬하기 JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a,b)=> a.price - b.price)
    const shopListUl = document.querySelector('#shop_list') 
    console.log(sort)
    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기 
    for(let i of sort ) {
        const li = document.createElement('li')
        console.log(li,i.shop)
        li.innerHTML = `<a href="#"> ${i.shop} </a>`
        li.innerHTML += `<span>가격 :  ${i.price}원</span>`
        li.innerHTML += `<em>배송비 : ${i.delivery}원</em>`
        shopListUl.appendChild(li)
        //createElement로 생성한 JS태그는 appenChild함수로 대입한다.
    }
})
dBtn.addEventListener('click',()=>{
    const shopDelivery = shopDB2.map(i=>i.delivery)
    const resultDelivery = Math.min(...shopDelivery)
    delResult.textContent = `배송비는 ${resultDelivery}원 입니다`
})

