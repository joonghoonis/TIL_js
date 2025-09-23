//1. 마우스를 overview이미지에 올렸을 때 right/left 버튼 나옴 (좌측 이미지가 더 없을때는 오른쪽 버튼만 나옴 (반대도 동일))  -----------완료
//썸네일 이미지를 누르면 overview 이미지가 썸네일 선택한 이미지로 바뀜 + 선택하고있는 썸네일 이미지 밑에 border도 애니메이션 효과와 같이 들어감

//2.수량 버튼 클릭 시 숫자 바뀜 -,+ 0 밑으로는 더이상 내려가지 않음

//3.add to cart버튼 클릭 시
//4. Add to Wishlist 클릭 시 꽉찬 하트로 바뀜 + text가  In Wishlist로 변경

const overview = document.querySelector('.overview')
const ovview = overview.querySelector('.ovview')
const overviewImg = ovview.querySelector('.overview_img')
const thumImg = document.querySelectorAll('.thum_img')
const leftBtn = document.querySelector('.left_arrow_btn')
const rightBtn = document.querySelector('.right_arrow_btn')
const thumImgAfter = document.querySelector('.thumnail::after')
const slidecount = ovview.children.length;
let currentIndex = 0;
//버튼 애니메이션
rightBtn.style.transition = 'transform 0.2s'
leftBtn.style.transition = 'transform 0.2s'
//슬라이드 애니메이션 
ovview.style.transition = 'transform 0.8s'
// 마우스 올렸을 때 버튼 나타나기
overview.addEventListener('mouseover',viewBtnInFunc)
function viewBtnInFunc() {
    if(currentIndex < slidecount-1 ){
        rightBtn.style.transform = 'translateX(-85px)'
    }
    if (currentIndex >= 1) {
        leftBtn.style.transform = 'translateX(85px)'
    }
    }
// 마우스 나갔을 떄 버튼 사라지기
overview.addEventListener('mouseout',viewBtnOutFunc)
function viewBtnOutFunc(){
        leftBtn.style.transform = 'translateX(-85px)'
        rightBtn.style.transform = 'translateX(85px)'
}
// 썸네일  
for(let i=0;i<slidecount;i++ ){
    thumImg[i].addEventListener('click',()=>{thumChangeImgFunc(i)})
}
function thumChangeImgFunc(num){
    //썸네일 활성화 초기화 
    for(let i=0;i<slidecount;i++){
        thumImg[i].classList.remove('active')
    }
    // 썸네일 활성화
    thumImg[num].classList.add('active')
    // 썸네일 이미지 누르면 메인 이미지 슬라이드로 변경
    currentIndex = (num);
    if(currentIndex < slidecount ){
        ovview.style.transform = `translateX(-${ovview.children[0].offsetWidth * currentIndex}px)`
    }
}
function rightLeftBtnFunc() {
    ovview.style.transform = `translateX(-${ovview.children[0].offsetWidth * currentIndex}px)`
    thumChangeImgFunc(currentIndex);
}
// right 버튼 누르면 슬라이드 되면서 넘어가기
rightBtn.addEventListener('click',()=>{
    if(currentIndex < slidecount - 1){
        currentIndex++;
        rightLeftBtnFunc()
    }  else{
        rightBtn.style.transform = 'translateX(85px)'
    }
})
//left 버튼 누르면 슬라이드 되면서 넘어가기
leftBtn.addEventListener('click',()=>{
    if(currentIndex > 0){
        currentIndex--;
        rightLeftBtnFunc()
    } else {
        leftBtn.style.transform = 'translateX(-85px)'
    }
})

// -버튼,+버튼 수량 선택자
const quanPlusBtn = document.querySelector('.quantity_btn > .plus')
const quanMinusBtn = document.querySelector('.quantity_btn > .minus')
const quanNum = document.querySelector('#quantity_num')

// +버튼 클릭했을때 수량 증가
quanPlusBtn.addEventListener('click',()=>{quanNum.value ++})
// -버튼 클릭했을때 0까지 수량 감소
quanMinusBtn.addEventListener('click',()=>{
    if(quanNum.value > 0){
        quanNum.value --
    }
})
// 상품 옵션선택했을 때 안내 가격 바뀜
const inputSelect = document.querySelectorAll('input.input_select')
const optionPrice = document.querySelector('.opt_selc_price')
inputSelect[1].addEventListener('click',()=>{priceChange(24.90)})
inputSelect[2].addEventListener('click',()=>{priceChange(23.90)})
inputSelect[3].addEventListener('click',()=>{priceChange(22.90)})

function priceChange(num) {
    optionPrice.textContent = (num)
}

// cart버튼 , wishlist 버튼 선택자
const cartBtn = document.querySelector('.cart')
const wishBtn = document.querySelector('.wishlist_btn')
const cartText = document.querySelector('.cart_text')
const wishText = wishBtn.querySelector('.wish_text')
const wishHeart= wishBtn.querySelector('.wish_heart')
// cart 버튼 마우스 올렸을 때 애니메이션 

// wishlist 눌렀을 때 svg 바뀜 , 텍스트 변경
wishBtn.addEventListener('click',()=>{wishBtnFunc()})
function wishBtnFunc(){
    const isActive = wishBtn.classList.toggle('active')
    if (isActive){

        wishText.textContent = 'In Wishlist'
    } else {
        wishText.textContent = 'Add to Wishlist'
    }
}
// 목록창 버튼 누르면 그 목록에 대한 설명 
const productDescList = document.querySelectorAll('.product_description_list dd')
const productDescBtn = document.querySelectorAll('.product_description_list .desc_btn')
for(let i=0;i<productDescList.length;i++){
    productDescBtn[i].addEventListener('click',()=>{proDescFunc(i)})
}

function proDescFunc(num) {
    productDescList[0].classList.remove ='active'
    productDescList[1].classList.remove ='active'
    productDescList[2].classList.remove ='active'
    productDescList[3].classList.remove ='active'
    const isActive = productDescList[num].classList.toggle('active')
}
