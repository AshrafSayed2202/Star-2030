var siteLang = localStorage.getItem('sitelang')
console.log(siteLang);
document.getElementById('lang-btn').onclick = function(){
    if(localStorage.getItem('sitelang') == 'en'){
        localStorage.setItem('sitelang','ar')
        window.open('/front-end/ar/index.html','_self')
    }else{
        localStorage.setItem('sitelang','en')
        window.open('/front-end/en/index.html','_self')
    }
}