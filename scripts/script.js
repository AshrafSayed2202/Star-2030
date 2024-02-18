var siteLang = localStorage.getItem('sitelang')
document.getElementById('lang-btn').onclick = ()=>{
    if(localStorage.getItem('sitelang') == 'en'){
        localStorage.setItem('sitelang','ar')
        if(localStorage.getItem('page') == 'home'){
            window.open('/ar/','_self')
        }else{
            window.open(`/ar/${localStorage.getItem('page')}/`,'_self')
        }
    }else{
        localStorage.setItem('sitelang','en')
        if(localStorage.getItem('page') == 'home'){
            window.open('/en/','_self')
        }else{
            window.open(`/en/${localStorage.getItem('page')}/`,'_self')
        }
    }
}
document.querySelectorAll('.nav-list li').forEach((nav)=>{
    nav.onclick = function(e) {
        window.open(`/${localStorage.getItem('sitelang')}/${nav.dataset.page}`,'_self')
    }
})
document.querySelector('figure.nav-logo').onclick = ()=>{
    window.open(`/${localStorage.getItem('sitelang')}/`,'_self')
}
const circleText = document.querySelector('.circle-text');
    circleText.innerHTML = circleText.innerHTML.split("").map(
        (char,i)=>
            `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
    ).join("")

var burgerIcon = document.getElementById('menu_icon')
var closeNav = document.querySelector('.close-nav')

let openCloseNav = function openCloseNav(){
    document.querySelector('.nav-list').classList.toggle("open-and-close")
}
burgerIcon.addEventListener('click',()=>{
    openCloseNav()
})
closeNav.addEventListener('click',()=>{
    openCloseNav()
})