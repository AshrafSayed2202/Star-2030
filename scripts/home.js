document.querySelector('.landing-btn').onclick = function(e){
    document.querySelector('nav').classList.toggle('trans-nav')
    document.querySelector('.landing').classList.toggle('switch')
    document.querySelector('.landing-btn').classList.toggle('switch')
}
document.querySelector('.plane-btn').onclick = ()=>{
    window.scroll({top:document.querySelector('.home-news').offsetTop,left:0,behavior:'smooth'})
    document.querySelector('nav').classList.remove('trans-nav')
}
window.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0 ){
        window.scroll({top:document.querySelector('.home-news').offsetTop,left:0,behavior:'smooth'})
        document.querySelector('nav').classList.remove('trans-nav')
    }else{
        window.scroll({top:0,left:0,behavior:'smooth'})
        document.querySelector('nav').classList.add('trans-nav')
    }
})
document.querySelectorAll('.aside-new-card').forEach((e)=>{
    e.onclick = ()=>{window.open(`/${localStorage.getItem('sitelang')}/news/`,'_self')}
})
document.querySelector('.bar-code').onclick = (e)=>{
    window.open(`/${localStorage.getItem('sitelang')}/services`,'_self')
}