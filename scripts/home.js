document.querySelector('.landing-btn').onclick = function(e){
    document.querySelector('nav').classList.toggle('trans-nav')
    document.querySelector('.landing').classList.toggle('switch')
    document.querySelector('.landing-btn').classList.toggle('switch')
}
document.querySelector('.plane-btn').addEventListener('click',(e)=>{
    setTimeout(() => {
        window.scroll({top:document.querySelector('.home-news').offsetTop-160,left:0,behavior:'smooth'})
        document.querySelector('nav').classList.remove('trans-nav') 
    }, 100);
})

window.addEventListener('wheel',(e)=>{
    if(e.deltaY > 0 ){
        setTimeout(() => {
            window.scroll({top:document.querySelector('.home-news').offsetTop-160,left:0,behavior:'smooth'})
            document.querySelector('nav').classList.remove('trans-nav')
        }, 100);
    }else{
        setTimeout(() => {
            window.scroll({top:0,left:0,behavior:'smooth'})
            document.querySelector('nav').classList.add('trans-nav')
        }, 100);
    }
})
document.querySelectorAll('.aside-new-card').forEach((e)=>{
    e.onclick = ()=>{window.open(`/${localStorage.getItem('sitelang')}/news/`,'_self')}
})
document.querySelector('.bar-code').onclick = (e)=>{
    window.open(`/${localStorage.getItem('sitelang')}/services`,'_self')
}

var xDown = null; 
var yDown = null; 

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            document.querySelector('nav').classList.remove('trans-nav')
            document.querySelector('.landing').classList.add('switch')
            document.querySelector('.landing-btn').classList.add('switch')
        } else {
            document.querySelector('nav').classList.add('trans-nav')
            document.querySelector('.landing').classList.remove('switch')
            document.querySelector('.landing-btn').classList.remove('switch')
        }                       
    } else {
        if ( yDiff > 0 ) {
            window.scroll({top:document.querySelector('.home-news').offsetTop - 160,left:0,behavior:'smooth'})
            document.querySelector('nav').classList.remove('trans-nav')
        }
    }
    xDown = null;
    yDown = null;
    evt.preventDefault();
};
function handleTouchMoveNews(evt) {
    if (! xDown || ! yDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) < Math.abs( yDiff ) ) {/*most significant*/
        if ( yDiff < 0 ) {
            setTimeout(() => {
                window.scroll({top:0,left:0,behavior:'smooth'})
                document.querySelector('nav').classList.add('trans-nav')
            }, 100);
        }                       
    }
    xDown = null;
    yDown = null;
    evt.preventDefault();
    console.log('DONE');
};

    document.querySelector('.landing').addEventListener('touchstart', handleTouchStart, false);        
    document.querySelector('.landing').addEventListener('touchmove', handleTouchMove, false);
    document.querySelector('.home-news').addEventListener('touchstart', handleTouchStart, false);
    document.querySelector('.home-news').addEventListener('touchmove', handleTouchMoveNews, false);