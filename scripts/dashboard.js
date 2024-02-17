import { db , auth , storage} from '../firebase/config.js'
import { ref, onValue, set, update }  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"
import { signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {  ref as storageRef, uploadBytes, getDownloadURL, listAll, deleteObject } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
auth.onAuthStateChanged((user)=>{
    if(user){
        return
    }else{
        window.open('/dashboard/login/','_self')
    }
})
const newsContainer = document.querySelector('.news-container')
let addNew = document.createElement('div')
    addNew.setAttribute('class','add-new')
    addNew.innerHTML = '+'
    addNew.addEventListener('click',(e)=>{
        createPopup('Add New Post:','Post',false)
    })
    newsContainer.append(addNew)
onValue(ref(db,`news/`),(e)=>{
    var newsArray = []
    newsArray = Object.values(e.val());
    newsContainer.innerHTML = ''
    let addNew = document.createElement('div')
    addNew.setAttribute('class','add-new')
    addNew.innerHTML = '+'
    addNew.addEventListener('click',(e)=>{
        createPopup('Add New Post:','Post',false)
    })
    newsContainer.append(addNew)
    newsArray.reverse().forEach(element => {
        createNews(element)
    });
})
function createNews(newsCard){
    let newCard = document.createElement('div')
    newCard.setAttribute('class','news-card')
    let newImage = document.createElement('img')
    newImage.setAttribute('class','news-image')
    newImage.src = `${newsCard.image}`
    let newHeader = document.createElement('p')
    newHeader.innerHTML = newsCard.header
    newCard.append(newImage,newHeader)
    newCard.addEventListener('click',()=>{
        createPopup('Edit Post:',true,'update',newsCard)
    })
    newsContainer.append(newCard)
}
document.querySelector('.return span').onclick = (e)=>{
    signOut(auth)
    window.open('/en/','_self')
}

function createPopup(header,confirmText,type,cardObject){
    window.onkeyup = (e)=>{if(e.key == 'Escape'){closePopup()}}
    var popupContainer = document.createElement('div')
    popupContainer.setAttribute('class','popup_container')
    var popupWindow = document.createElement('div')
    popupWindow.setAttribute('class','popup_window')
    var popupText = document.createElement('p')
    popupText.setAttribute('class','popup_text')
    popupText.innerHTML = header
    var popupButtons = document.createElement('div')
    popupButtons.setAttribute('class','popup_buttons')
    var popupInputs = document.createElement('div')
    popupInputs.setAttribute('class','popup_inputs')
    var inputImage = document.createElement('input')
    inputImage.type = 'file'
    inputImage.accept = 'image/*'
    inputImage.style.display = 'none'
    var popupImageLabel = document.createElement('label')
    popupImageLabel.setAttribute('class','image-label')
    popupImageLabel.append(inputImage)
    type?popupImageLabel.textContent = 'Update Post Image':popupImageLabel.textContent = 'Upload Post Image';
    var popupImageInputField = document.createElement('img')
    popupImageInputField.setAttribute('class','popup-image')
    type?popupImageInputField.src = cardObject.image:popupImageInputField.src = '';
    popupImageLabel.append(popupImageInputField,inputImage)
    var popupHeaderInputField = document.createElement('div')
    popupHeaderInputField.setAttribute('class','popup-input-field')
    var popupHeaderInput = document.createElement('input')
    popupHeaderInput.type = 'text'
    popupHeaderInput.placeholder = 'Subject:'
    type?popupHeaderInput.value = cardObject.header:popupHeaderInput.value = '';
    popupHeaderInput.oninput = (e)=>{popupHeaderInputField.style.borderColor = '#5394BF'}
    popupHeaderInputField.append(popupHeaderInput)
    var popupTextareaInputField = document.createElement('div')
    popupTextareaInputField.setAttribute('class','popup-input-field')
    var popupTextareaInput = document.createElement('textarea')
    popupTextareaInput.cols = '50'
    popupTextareaInput.rows = '5'
    popupTextareaInput.placeholder = 'Post Body:'
    type?popupTextareaInput.value = cardObject.text:popupTextareaInput.value = '';
    popupTextareaInput.oninput = (e)=>{popupTextareaInputField.style.borderColor = '#5394BF'}
    popupTextareaInputField.append(popupTextareaInput)
    var popupConfirm = document.createElement('button')
    popupConfirm.setAttribute('class','popup_button_confirm')
    popupConfirm.onclick = ()=>{
        if(popupHeaderInput.value.length == 0 || popupTextareaInput.value.length == 0){
            if(popupHeaderInput.value.length == 0){
                popupHeaderInput.focus()
                popupHeaderInputField.style.borderColor = 'red'
            }
            if(popupTextareaInput.value.length == 0){
                popupTextareaInput.focus()
                popupTextareaInputField.style.borderColor = 'red'
            }
        }else{
            if(type){
                confirmUpdateNew(inputImage,popupHeaderInput.value ,popupTextareaInput.value ,cardObject)
                closePopup()
            }else{
                confirmUploadNew(inputImage,popupHeaderInput.value,popupTextareaInput.value)
                closePopup()
            }
        }
    }
    popupConfirm.textContent = confirmText
    var popupCancel = document.createElement('button')
    popupCancel.setAttribute('class','popup_button_cancel')
    popupCancel.textContent = 'Cancel'
    popupCancel.onclick = ()=>{
        closePopup()
    }
    popupButtons.append(popupConfirm,popupCancel)
    popupInputs.append(popupImageLabel,popupHeaderInputField,popupTextareaInputField)
    popupWindow.append(popupText,popupInputs,popupButtons)
    popupContainer.append(popupWindow)
    document.body.append(popupContainer)
    setTimeout(() => {
        popupContainer.style.opacity = '1'
    },0);
    function closePopup(){
        popupContainer.style.opacity = '0'
        setTimeout(()=>{popupContainer.remove()},300)
    }
}
function confirmUpdateNew(input,newHeader,newText,cardObject){
    if(input.files.length == 0){
        update(ref(db,`news/${cardObject.index}`),{
            header:newHeader,
            text:newText
        })
    }else{
        var storRef = storageRef(storage)
                var newsImageRef = storageRef(storage,`news/${cardObject.index}/new.jpg`)
                uploadBytes(newsImageRef,input.files[0]).then((e)=>{
                    getDownloadURL(storageRef(storRef,`news/${cardObject.index}/new.jpg`)).then((url)=>{
                        update(ref(db,`news/${cardObject.index}`),{
                            image:url,
                            header:newHeader,
                            text:newText
                        })
                        input.value = null
                    })
                })
    }
}
function confirmUploadNew(input,newHeader,newText){
    let d = new Date()
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var storRef = storageRef(storage)
    onValue(ref(db,`news/`),(news)=>{
        if(news.val() == null){
            var index = 1
        }else{
            var index = Object.values(news.val()).length + 1
        }
        var newsImageRef = storageRef(storage,`news/${index}/new.jpg`)
        uploadBytes(newsImageRef,input.files[0]).then((e)=>{
        getDownloadURL(storageRef(storRef,`news/${index}/new.jpg`)).then((url)=>{
            set(ref(db,`news/${index}`),{
                index:index,
                image:url,
                header:newHeader,
                text:newText,
                date: {
                    day: d.getDate(),
                    month:months[d.getMonth()],
                    year: d.getFullYear()
                }
            })
            input.value = null
        })
    })
    },{onlyOnce:true})
}
