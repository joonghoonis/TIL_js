// index.js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1.변수, 2. 초기값 설정 3. 이벤트,함수 설정

//동적 요소 계획하기
// 1. 상품이미지에 마우스이벤트 시 큰 상품 이미지 변경
// 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기기 숨기기
// 6. 사이즈select 초기 비활성화 (색상 선택 시 활성화)
// 7. 색상-> 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
// 10. 주문목록 - 클릭 시 주문수량+주문금액 감소(수량이 1이라면 경고창 출력)
// 11. (상품 미선택 시)장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고창 출력
// 12. (상품 미선택 시)장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
//-----------------------------------------------------------
// 1. 상품이미지에 마우스이벤트 시 큰 상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
const thumImg = document.querySelectorAll('.thumnail_img > a')
const viewImg = document.querySelector('.overview img')
//초기값(첫번째 썸네일a가 보이고 있단 뜻으로 테두리가 있음)
thumImg[0].style.border = '2px solid #0aa5ff'
//초기값(borderRadius)
thumImg[0].style.borderRadius = '5px'
thumImg[1].style.borderRadius = '5px'
//두번째 썸네일 마우스 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기
// thumImg[0].addEventListener('mouseover',()=>{
//     return viewImg.src = './images/big1.jpg'
// })
//transition 애니메이션 설정(초기값)
thumImg[0].children[0].style.transition = 'transform 0.4s'
thumImg[1].children[0].style.transition = 'transform 0.4s'

/* 마우스 벗어낫을 때 scale 1 */
thumImg[0].addEventListener('mouseout',()=>mouseoutFunc(0))
thumImg[1].addEventListener('mouseout',()=>mouseoutFunc(1))
function mouseoutFunc(num) {
    thumImg[num].children[0].style.transform = 'scale(1)'
}

/* 마우스 올렸을 때 border/scale1.2/border0 */
thumImg[0].addEventListener('mouseover',()=>mouseoverFunc(1,0))
thumImg[1].addEventListener('mouseover',()=>mouseoverFunc(2,1))
function mouseoverFunc(bg,num){
    thumImg[1].style.border='0'
    thumImg[0].style.border='0'
    thumImg[num].style.border = '2px solid #0aa5ff'
    //이미지 확대
    thumImg[num].children[0].style.transform = 'scale(1.3)'
    viewImg.src = `./images/big${bg}.jpg`
}

localStorage.setItem('isLogin',true);
// 로그인 정보 저장
// true == 로그인
// false == 로그아웃
// 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
const bookMark = document.querySelector('.product_info .scrap')
let loginStatus = '';
console.log(bookMark);

bookMark.addEventListener('click',()=>{
    loginStatus = localStorage.getItem('isLogin')
    if(loginStatus == 'false'){//위 변수 이용한 조건 분기
        //로그아웃 시 login html 이동
        location.href = './login.html'
    } else {
        location.href = './wish.html'
        //로그인 시 wish.html 이동
    }
})
// 3. 리뷰 클릭 시 스크롤 이동
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtn = document.querySelector('.product_link')
const productWrap = document.querySelector('main > .product_info')
console.log(reviewBtn,reviewWrap,productInfoBtn,productWrap)

reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault();contentsPstFunc(reviewWrap)})
reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(reviewWrap)})
productInfoBtn.addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(productWrap)})

// 스크롤 이동 window 함수 scrollTo(x,y)
function contentsPstFunc(target){
    return window.scrollTo(0, target.offsetTop)
}
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숩기기
const priceInfoBtn = document.querySelector('.price_info .info_icon');   
const priceInfo = document.querySelector('.price_info .info');
console.log(priceInfo, priceInfoBtn)
//가격 정보  (i) 클릭 시 정보 팝업 출력
// 초기 : 숨김(false)
// 클릭 : 보이기(true) -> false -> true -> false -> true...
let infoBoolean = false; //초기 : 숨김(false)
priceInfoBtn.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭할때마다 값(infoBoolean) 반전
    infoBoolean = !infoBoolean; //★★★★★
    if(infoBoolean) {
        priceInfo.style.display = 'block'
    } else {
        priceInfo.style.display = 'none'
    }
})

// 5.주문 목록 초기 숨기기
// 6. 사이즈 select 초기 비활성화
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
const orderPrice = document.querySelector('.order_price em')
console.log (orderList,sizeSelect)

orderList.style.display = 'none';
sizeSelect.disabled = true;

//6-2(색상 선택 시 활성화)
// 7.색상->사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것) - 콘솔 '선택완료'
// 주문목록 출력(선택한 값이 출력, 주문금액 변경)
colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    //색상 select에서 첫번재 value=none에 해당하는 색상을 제외한 
    //나머지 옵션이 선택되엇을 때 사이즈select 활성화하기
    if(colorSelect.selectedIndex != 0 ) {// 0이 아닌 다른값 선택 시
        sizeSelect.disabled = false;
        //사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            //사이즈 옵션 인덱스 0이 아닌 것 선택 시 콘솔 선택 완료
            if(sizeSelect.selectedIndex != 0){
                console.log('콘솔 선택완료')
                orderList.style.display = 'block';
                let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
                let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
                // let orderColorReplace = orderColor.replace(찾는값,변경값)
                // 정규표현식 시작  과 끝 표시 /검사내용/ 
                // 괄호찾기 \찾는문자\(.*\)
                // 모든 내용.*  
                console.log(orderColor)
                let orderColorReplace = orderColor.replace(/\(.*\)/,'');
                let orderSizeReplace = orderSize.replace(/\(.*\)/,'');
                orderList.children[0].children[0].textContent = orderColorReplace;
                orderList.children[0].children[1].textContent = orderSizeReplace;
                orderPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr')
            }
        })
    } else {
        sizeSelect.disabled = true;
    }
})

// DB 불러오기 테스트
/* console.log(productOptDB[0].name) // 몽셸 패딩 하네스 올인원
console.log(productOptDB[0].color[0]+productOptDB[0].color[1])

// DB-> HTML 적용
// 1. JS에서 HTML 함수로 생성 createElement()
const colorOpt1 =  document.createElement('option')
const colorOpt2 =  document.createElement('option')

console.log(colorOpt1)
// 2. 위에성 생성한 함수에 DB 데이터 대입 innerHTML,textContent
colorOpt1.textContent = `//${productOptDB[0].color[0]}${productOptDB[0].price}`
colorOpt2.textContent = `//${productOptDB[0].color[1]}${productOptDB[0].price}`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect. appendChild(colorOpt1)
colorSelect. appendChild(colorOpt2)
// 생성한 태그가 li면 ul이나ol의 마지막 자식 위치로 삽입
// 생성한 태그가 option이면 select의 마지막 자식 위치로 삽입 */


// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
const closeBtn = document.querySelector('.close_btn')
closeBtn.addEventListener('click', orderListClose)
function orderListClose() {
    orderList.style.display = 'none';
    orderPrice.textContent = 0;
    colorSelect.selectedIndex = colorSelect.options[0]
    sizeSelect.selectedIndex = sizeSelect.options[0]
}

/* closeBtn.addEventListener('click', ()=>{
    closeBtn.parentNode.style.display = 'none';
}) */
/* closeBtn.addEventListener('click', function(){
    this.parentNode.style.display = 'none';
}) */
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+ 주문금액 표시
// 필요목록 : +버튼, 재고수량(productOptDB[0].stock), 주문수량, 주문금액(orderPrice), 증가 숫자 데이터
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const orderNum = document.querySelector('#order_num')
const orderListPrice = document.querySelector('.order_list .price')
let num = 1; //초기 주문 수량
orderNum.value = num;
//초기값 : 주문 수량칸에 값 1 적용하기
console.log(productOptDB.price)
//+버튼 클릭 시 주문수량이 1씩 증가하고 주문수량에 따라 가격 증가하기
// 10. 주문목록 - 클릭 시 주문수량+ 주문금액 감소 (수량이 1이라면 경고창 출력)
plusBtn.addEventListener('click',()=>{
    if(num < productOptDB[0].stock){
        num++;
        minusPlusFunc()
    } else {
        alert ('최대 구매 수량입니다.')
    }
})
minusBtn.addEventListener('click',()=>{
    if (num > 1) {
        num--;
        minusPlusFunc()
    } else { 
        alert('최소 구매 수량입니다.')
    }
})
function minusPlusFunc(){
    orderNum.value = num
    let total = num * productOptDB[0].price 
    orderListPrice.textContent = total.toLocaleString('ko-kr')
    orderPrice.textContent = total.toLocaleString('ko-kr')
    return
}
// 11. (상품 미선택 시)장바구니, 바로구매 클릭 시 '상품 선택하세요' 경고창 출력
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')

cartBtn.addEventListener('click',()=>{
    // if(colorSelect.selectedIndex == 0 || sizeSelect.selectedIndex == 0){
    cartBuyFunc('./cart.html')
})
buyBtn.addEventListener('click',()=>{
    cartBuyFunc('./but.html')
    }
)
function cartBuyFunc(url) {
    if(orderList.style.display === 'none'){
        alert('옵션 선택 후에 버튼을 클릭해 주세요')
    } else {
        loginStatus = localStorage.getItem('isLogin')
        if (loginStatus == "true") {
            location.href = url
        } else {
            location.href = './login.html'
        }
}}
// 12. (상품 미선택 시)장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동