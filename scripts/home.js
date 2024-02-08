document.querySelector('.landing-btn').onclick = function(e){
    document.querySelector('nav').classList.toggle('trans-nav')
    document.querySelector('.landing').classList.toggle('switch')
    document.querySelector('.landing-btn').classList.toggle('switch')
}