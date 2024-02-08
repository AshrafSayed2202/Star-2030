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
    console.log();
})