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
//버튼 애니메이션
rightBtn.style.transition = 'transform 0.2s'
leftBtn.style.transition = 'transform 0.2s'

// 마우스 올렸을 때 버튼 나타나기
overview.addEventListener('mouseover',viewBtnInFunc)
function viewBtnInFunc() {
        rightBtn.style.transform = 'translateX(-85px)'
        if(currentIndex >= 1) {
            leftBtn.style.transform = 'translateX(85px)'
        }
    }
// 마우스 올렸을 떄 버튼 사라지기
overview.addEventListener('mouseout',viewBtnOutFunc)
function viewBtnOutFunc(){
        leftBtn.style.transform = 'translateX(-85px)'
        rightBtn.style.transform = 'translateX(85px)'
}
// 썸네일  
thumImg[0].addEventListener('click',()=>{thumChangeImgFunc(0)})
thumImg[1].addEventListener('click',()=>{thumChangeImgFunc(1)})
thumImg[2].addEventListener('click',()=>{thumChangeImgFunc(2)})
thumImg[3].addEventListener('click',()=>{thumChangeImgFunc(3)})
thumImg[4].addEventListener('click',()=>{thumChangeImgFunc(4)})
thumImg[5].addEventListener('click',()=>{thumChangeImgFunc(5)})
thumImg[6].addEventListener('click',()=>{thumChangeImgFunc(6)})

function thumChangeImgFunc(borderNum){
    thumImg[0].classList.remove('active')
    thumImg[1].classList.remove('active')
    thumImg[2].classList.remove('active')
    thumImg[3].classList.remove('active')
    thumImg[4].classList.remove('active')
    thumImg[5].classList.remove('active')
    thumImg[6].classList.remove('active')
    thumImg[borderNum].classList.add('active')
}

const slidecount = ovview.children.length;
let currentIndex = 0햣;
ovview.style.transition = 'transform 0.8s'

// right 버튼 left 버튼 누르면 슬라이드 되면서 넘어가기
rightBtn.addEventListener('click',()=>{
    if(currentIndex < slidecount - 1){
        currentIndex++;
        console.log(currentIndex)
        ovview.style.transform = `translateX(-${ovview.children[0].offsetWidth * currentIndex}px)`
        
    }
})
leftBtn.addEventListener('click',()=>{
    if(currentIndex > 0){
        currentIndex--;
        console.log(currentIndex)
        ovview.style.transform = `translateX(-${ovview.children[0].offsetWidth * currentIndex}px)`
    }
})


// 메인 슬라이드 마지막 장 도착 시 right버튼 없애기 