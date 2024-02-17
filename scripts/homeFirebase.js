import { db } from '../firebase/config.js'
import { ref, onValue }  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"

onValue(ref(db,`news/`),(e)=>{
    var newsArray = []
    newsArray = Object.values(e.val());
    createLatest(newsArray[newsArray.length -1])
    for (let i = newsArray.length - 1; i > newsArray.length - 4; i--) {
        creatLastThree(newsArray[i])
    }
})
const LatestContainer = document.querySelector('.latest-new')
const newsAside = document.querySelector('.news-aside')
function createLatest(latest){
    let latestImage = document.createElement('img');
    latestImage.src = `${latest.image}`
    latestImage.setAttribute('class',`latest-image`)
    let latestHeader = document.createElement('div');
    latestHeader.setAttribute('class',`latest-header`)
    latestHeader.innerText = latest.header
    latestHeader.onclick = ()=>{window.open(`/${localStorage.getItem('sitelang')}/news/`,'_self')}
    let LatestDate = document.createElement('div');
    LatestDate.setAttribute('class',`latest-date`)
    LatestDate.innerText = `${latest.date.day} ${latest.date.month} ${latest.date.year}`
    LatestContainer.append(latestImage,latestHeader,LatestDate)
}
function creatLastThree(news){
    let newCard = document.createElement('div')
    newCard.setAttribute('class','aside-new-card')
    let newImage = document.createElement('img');
    newImage.src = `${news.image}`
    newImage.setAttribute('class',`aside-new-image`)
    let newTextContainer = document.createElement('div')
    let newHeader = document.createElement('div');
    newHeader.setAttribute('class',`aside-new-header`)
    newHeader.innerText = news.header
    let newDate = document.createElement('div');
    newDate.setAttribute('class',`aside-new-date`)
    newDate.innerText = `${news.date.day} ${news.date.month} ${news.date.year}`
    newTextContainer.append(newHeader,newDate)
    newCard.append(newImage,newTextContainer)
    newsAside.append(newCard)
    newCard.onclick = ()=>{window.open(`/${localStorage.getItem('sitelang')}/news/`,'_self')}
}