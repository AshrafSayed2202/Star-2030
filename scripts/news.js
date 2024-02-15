const asideNews = document.querySelectorAll('.aside-new-card')

const LatestNew = document.querySelector('.latest-new')
const LatestHeader = document.querySelector('.latest-header')
const LatestDate = document.querySelector('.latest-date')
const LatestImage = document.querySelector('.latest-image')
const LatestText = document.querySelector('.latest-text')

function changeNew(newCard){
    LatestNew.style.opacity = '0';
    setTimeout(() => {
        LatestHeader.innerHTML = newCard.children[1].innerHTML;
        LatestDate.innerHTML = newCard.children[2].innerHTML;
        LatestText.innerHTML = newCard.children[3].innerHTML;
        LatestImage.attributes.src.value = newCard.children[0].attributes.src.value;
        LatestNew.style.opacity = '1';
    }, 600);
}
asideNews.forEach(newCard => {
    newCard.addEventListener('click',()=>{
        asideNews.forEach(e=>{e.classList.remove('active')})
        newCard.classList.add('active')
        changeNew(newCard)
    })
});