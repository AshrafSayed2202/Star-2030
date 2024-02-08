let products = document.querySelectorAll('#products li')
let productsDescriptions = document.querySelectorAll('.product-discription')
let productsImages = document.querySelectorAll('.product-images')
let productImage = document.querySelectorAll('.image')

products.forEach((product)=>{
    productSwitch(product)
});
document.querySelector('.shape1').addEventListener('click',()=>{
    document.querySelector('.shape1').classList.add('switch')
    document.querySelector('.shape2').classList.add('switch')
    document.querySelector('.products-table').classList.add('switch')
})

function productSwitch(product){
    product.addEventListener('click',()=>{
        products.forEach((prod)=>{
            prod.classList.remove('active')
        })
        productsDescriptions.forEach((prod)=>{
            prod.classList.remove('active')
        })
        productsImages.forEach((prod)=>{
            prod.classList.remove('active')
        })
        product.classList.add('active')
        document.querySelector(`.product-discription.${product.dataset.prod}`).classList.add('active')
        document.querySelector(`.product-images.${product.dataset.prod}`).classList.add('active')
    })
}

productImage.forEach((image)=>{
    image.style.backgroundImage = `url(../../assets/products-images/${image.parentNode.parentNode.parentNode.classList[1]}-${image.dataset.num}.webp)`
    image.addEventListener('click',()=>{
        document.querySelectorAll(`.product-images.${image.parentNode.parentNode.parentNode.classList[1]} .image`).forEach((e)=>{e.classList.remove('active')})
        image.classList.add('active')
        document.querySelector(`.product-images.${image.parentNode.parentNode.parentNode.classList[1]} .big-image`).style.backgroundImage = image.style.backgroundImage
    })
})

function goRightImage(bigIm){
    let currentActive = document.querySelector(`.product-images.${bigIm.parentNode.classList[1]} .image.active`)
    let currentActiveNum = currentActive.dataset.num
    localStorage.getItem('sitelang')=='en'?currentActiveNum == 2 ? currentActiveNum = 0 : currentActiveNum = parseInt(currentActiveNum)+1:currentActiveNum == 0 ? currentActiveNum = 2 : currentActiveNum = parseInt(currentActiveNum)-1;
    let newActive = document.querySelector(`.product-images.${bigIm.parentNode.classList[1]} .image[data-num="${currentActiveNum}"]`);
    currentActive.classList.remove('active')
    newActive.classList.add('active')
    bigIm.style.backgroundImage = newActive.style.backgroundImage
}
function goLeftImage(bigIm){
    let currentActive = document.querySelector(`.product-images.${bigIm.parentNode.classList[1]} .image.active`)
    let currentActiveNum = currentActive.dataset.num;
    localStorage.getItem('sitelang')=='en'?currentActiveNum == 0 ? currentActiveNum = 2 : currentActiveNum = parseInt(currentActiveNum)-1:currentActiveNum == 2 ? currentActiveNum = 0 : currentActiveNum = parseInt(currentActiveNum)+1;
    let newActive = document.querySelector(`.product-images.${bigIm.parentNode.classList[1]} .image[data-num="${currentActiveNum}"]`);
    currentActive.classList.remove('active')
    newActive.classList.add('active')
    bigIm.style.backgroundImage = newActive.style.backgroundImage
}

document.querySelectorAll('.product-images .big-image').forEach((bigImage)=>{
    bigImage.addEventListener('touchstart', handleTouchStart, false);
    bigImage.addEventListener('touchmove', handleTouchMove, false);
    let xDown = null;
    function getTouches(evt) {
        return evt.touches || evt.originalEvent.touches;
    }
    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
    }
    function handleTouchMove(evt) {
        if (!xDown) return;
        const xUp = evt.touches[0].clientX;
        const xDiff = xDown - xUp;
        if (xDiff > 0) {
            goRightImage(bigImage)
        } else {
            goLeftImage(bigImage)
        }
        xDown = null;
}
})