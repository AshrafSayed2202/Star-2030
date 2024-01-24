var siteLang = localStorage.getItem('sitelang')
document.getElementById('lang-btn').onclick = ()=>{
    if(localStorage.getItem('sitelang') == 'en'){
        localStorage.setItem('sitelang','ar')
        if(localStorage.getItem('page') == 'home'){
            window.open('/front-end/ar/','_self')
        }else{
            window.open(`/front-end/ar/${localStorage.getItem('page')}/`,'_self')
        }
    }else{
        localStorage.setItem('sitelang','en')
        if(localStorage.getItem('page') == 'home'){
            window.open('/front-end/en/','_self')
        }else{
            window.open(`/front-end/en/${localStorage.getItem('page')}/`,'_self')
        }
    }
}
document.querySelectorAll('.nav-list li').forEach((nav)=>{
    nav.onclick = function(e) {
        window.window.open(`/front-end/${localStorage.getItem('sitelang')}/${nav.dataset.page}`,'_self')
    }
})