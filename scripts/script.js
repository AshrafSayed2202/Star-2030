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
        window.window.open(`/${localStorage.getItem('sitelang')}/${nav.dataset.page}`,'_self')
    }
})
var pageHeader = document.getElementById('navHeader')
var closeNav = document.querySelector('.close-nav')
let pageName = ()=>{
    if(localStorage.getItem('sitelang') == 'ar'){
        switch (localStorage.getItem('page')) {
            case "home":
            return "الرئيسية"
                break;
            case "services":
                return "الخدمات"
                break;
            case "news":
                return "آخر الاخبار"
                break;
            case "customers":
                return "عملائنا"
                break;
            case "about":
                return "من نحن؟"
                break;
            case "contact":
                return "تواصل معنا"
                break;
        }
    }else{
        return localStorage.getItem('page')
    }
}
pageHeader.innerText = pageName()
let openCloseNav = function openCloseNav(){
    document.querySelector('.nav-list').classList.toggle("open-and-close")
}
pageHeader.addEventListener('click',()=>{
    openCloseNav()
})
closeNav.addEventListener('click',()=>{
    openCloseNav()
})