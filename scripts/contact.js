document.querySelector('.contact-arrow-btn').onclick = ()=>{
    if(window.scrollY >= 400){
        window.scroll({top:0,left:0,behavior:'smooth'})
        document.querySelectorAll('.contact-card,.visit-card,.form-card').forEach((e)=>{
            e.classList.remove('switch')
        })
    }else{
        window.scroll({top:400,left:0,behavior:'smooth'})
        document.querySelectorAll('.contact-card,.visit-card,.form-card').forEach((e)=>{
            e.classList.add('switch')
        })
    }
}
window.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0 ){
        window.scroll({top:400,left:0,behavior:'smooth'})
        document.querySelector('.contact-arrow-btn').classList.add('switch')
        document.querySelectorAll('.contact-card,.visit-card,.form-card').forEach((e)=>{
            e.classList.add('switch')
        })
    }
})
