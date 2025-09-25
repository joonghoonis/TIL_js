// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
// '만나기' 버튼 클릭시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
const resultFlower = document.querySelector('.result_flower')
const shareBtn = document.querySelector('#share')
const resultBtn = document.querySelector('#result')
const input = document.querySelector('.input')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')
const flowerImg = document.querySelector('.flower img')
resultFlower.style.display = 'none';
shareBtn.style.display = 'none';
resultBtn.addEventListener('click',()=>{
    ydm = year.value && month.value && day.value 
    ydm ? flowerFunc() : alert('생년월일을 모두 입력해주세요')
    function flowerFunc() {
        if(month.value > 0 && month.value < 13){
            const userMonth = month.value;
            const resultFlowerName = birthday_flower[userMonth-1].flower
            const resultFlowerLang = birthday_flower[userMonth-1].content
            const resultFlowerSrc = birthday_flower[userMonth-1].src
            resultFlower.children[0].children[0].textContent = resultFlowerName
            resultFlower.children[1].children[0].textContent = resultFlowerLang
            flowerImg.src = resultFlowerSrc
            input.style.display = 'none'
            resultBtn.style.display = 'none'
            shareBtn.style.display = 'block'
            resultFlower.style.display = 'block'
        } else{
            alert('1월~12월 중 입력하세요')
        }
    }

})