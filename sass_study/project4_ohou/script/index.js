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

// 로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin',true);
// 2. 저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행