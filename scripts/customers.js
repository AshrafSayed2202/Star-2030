const btnRight = document.getElementById('customers-btn-right')
const btnLeft = document.getElementById('customers-btn-left')
const customersContainer = document.querySelector('.customers-container')
let swiper = 0
var siteLang = localStorage.getItem('sitelang')
var customersSwipe = (e)=>{
    swiper = swiper + e * 25
    customersContainer.style.transform = `translateX(${swiper}%)`;
    if(siteLang == 'ar'){
        if(swiper != 75){
            btnLeft.style.display = 'block'
        }else if(swiper == 75){
            btnLeft.style.display = 'none'
        }
        if (swiper != 0){
            btnRight.style.display = 'block'
        }else if(swiper == 0){
            btnRight.style.display = 'none'
        }
    }else{
        if(swiper != 0){
            btnLeft.style.display = 'block'
        }else if(swiper == 0){
            btnLeft.style.display = 'none'
        }
        if (swiper != -75){
            btnRight.style.display = 'block'
        }else if(swiper == -75){
            btnRight.style.display = 'none'
        }
    }
}
btnRight.addEventListener('click',()=>{
    customersSwipe(-1)
})
btnLeft.addEventListener('click',()=>{
    customersSwipe(1)
})