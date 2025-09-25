// index.js
// jq ver
// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
const $resultFlower = $('.result_flower')
const $shareBtn = $('#share') 
const $resultBtn = $('#result')
const $input = $('.input input')
const $year = $('#year')
const $month = $('#month')
const $day = $('#day')
const $flowerImg = $('.flower > img')
$resultFlower.hide()
$shareBtn.hide()
// '만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
$resultBtn.click(function(){
    //조건?참 : 거짓;
    console.log(Boolean($year.val()))
    const ymd = $year.val() && $month.val() && $day.val()
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요');
    function flowerFunc() {
        const $userMonth = $month.val();
        for(let i=0; i<birthday_flower.length; i++){
            if($userMonth == birthday_flower[i].month){
                $resultFlower.find('em').text(birthday_flower[i].flower)
                $resultFlower.find('span').text(birthday_flower[i].content)
                $flowerImg.attr('src',birthday_flower[i].src)
                $resultFlower.show();
                $resultBtn.hide();
                $shareBtn.show();
                $input.hide();
            }
        }
    }
})