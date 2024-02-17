import { db } from '../firebase/config.js'
import { ref, onValue }  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"
onValue(ref(db,`news/`),(e)=>{
    var newsArray = []
    newsArray = Object.values(e.val());
    createLatest(newsArray[newsArray.length -1])
    for (let i = newsArray.length - 1; i > -1; i--) {
        i == newsArray.length - 1?createNews(newsArray[i],true):createNews(newsArray[i],false);
    }
})
const LatestContainer = document.querySelector('.latest-new')
function createLatest(latest){
    let latestImage = document.createElement('img');
    latestImage.src = `${latest.image}`
    latestImage.setAttribute('class',`latest-image`)
    let latestHeader = document.createElement('div');
    latestHeader.setAttribute('class',`latest-header`)
    latestHeader.innerText = latest.header
    let latestDate = document.createElement('div');
    latestDate.setAttribute('class',`latest-date`)
    latestDate.innerText = `${latest.date.day} ${latest.date.month} ${latest.date.year}`
    let latestText = document.createElement('div');
    latestText.setAttribute('class',`latest-text`)
    latestText.innerText = latest.text
    LatestContainer.append(latestHeader,latestDate,latestImage,latestText)
}

const newsAside = document.querySelector('.news-aside')
function createNews(newsCard,firstChild){
    let newCard = document.createElement('div')
    firstChild? newCard.setAttribute('class','active aside-new-card'):newCard.setAttribute('class','aside-new-card');
    let newImage = document.createElement('img')
    newImage.setAttribute('class','aside-new-image')
    newImage.src = `${newsCard.image}`
    let newHeader = document.createElement('div')
    newHeader.setAttribute('class','aside-new-header')
    newHeader.innerHTML = newsCard.header
    let newDate = document.createElement('div');
    newDate.setAttribute('class',`aside-new-date`)
    newDate.innerText = `${newsCard.date.day} ${newsCard.date.month} ${newsCard.date.year}`
    let newText = document.createElement('div');
    newText.setAttribute('class',`aside-new-text`)
    newText.innerText = newsCard.text
    newCard.append(newImage,newHeader,newDate,newText)
    newCard.addEventListener('click',()=>{
        document.querySelectorAll('.aside-new-card').forEach(e=>{e.classList.remove('active')})
        newCard.classList.add('active')
        changeNew(newCard)
    })
    newsAside.append(newCard)
}

function changeNew(newCard){
    document.querySelector('.latest-new').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.latest-header').innerHTML = newCard.children[1].innerHTML;
        document.querySelector('.latest-date').innerHTML = newCard.children[2].innerHTML;
        document.querySelector('.latest-text').innerHTML = newCard.children[3].innerHTML;
        document.querySelector('.latest-image').attributes.src.value = newCard.children[0].attributes.src.value;
        document.querySelector('.latest-new').style.opacity = '1';
    }, 600);
}