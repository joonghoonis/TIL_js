const leftImg = document.querySelectorAll('.left_contents > button')
const rightImg = document.querySelector('.right_contents > button')
console.log(leftImg)

leftImg[0].addEventListener('click',function(){imgChange(this, 'like')})
leftImg[1].addEventListener('click',function(){imgChange(this, 'comment')})
leftImg[2].addEventListener('click',function(){imgChange(this, 'paper')})
function imgChange (target,name){
    return target.children[0].src = `./images/${name}_on.png`
}
/* leftImg[0].addEventListener('click',imgChange(0,'like'))
leftImg[1].addEventListener('click',imgChange(1,'comment'))
leftImg[2].addEventListener('click',imgChange(2,'paper'))
function imgChange(index, name) {
    return function() {
        leftImg[index].children[0].src = `./images/${name}_on.png`
    }
} */

/* leftImg[0].addEventListener('click',function(){
    console.log(this)
    return this.children[0].src = './images/like_on.png'
})
leftImg[1].addEventListener('click',()=>{
    const child = leftImg[1].querySelector('img')
    return child.src = './images/comment_on.png'
})
leftImg[2].addEventListener('click',()=>{
    const child = leftImg[2].querySelector('img')
    return child.src = './images/paper_on.png'
}) */
rightImg.addEventListener('click',()=>{
    return rightImg.children[0].src = './images/bookmark_on.png'
})
//사진 클릭 시 스피커 모양 보이기(+애니메이션)
const instaPhoto = document.querySelector('main > .main_img')
const volumeIcon = document.querySelector('#popup');
console.log(instaPhoto, volumeIcon)
volumeIcon.style.transition = 'opacity 1s'

instaPhoto.addEventListener('click',()=>{
    volumeIcon.style.opacity = '1'
})

instaPhoto.addEventListener('mouseout',()=>{
    volumeIcon.style.opacity = '0'
})