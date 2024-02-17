import { signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "../firebase/config.js"


const emailInput = document.getElementById('username')
const passwordlInput = document.getElementById('password')
emailInput.oninput = ()=>{removeBorder(emailInput)}
passwordlInput.oninput = ()=>{removeBorder(passwordlInput)}
function removeBorder(e){
    e.style.border = 'none'
}
const submit = document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,emailInput.value,passwordlInput.value)
    .then((userCredential)=>{
        window.open('/dashboard/','_self')
        console.log(auth.currentUser);
    })
    .catch((error)=>{
        console.log(error.message)
        switch (error.message) {
            case 'Firebase: Error (auth/invalid-email).':
                emailInput.focus()
                emailInput.style.border = '2px solid red'
                break;
            case 'Firebase: Error (auth/missing-password).':
                passwordlInput.focus()
                passwordlInput.style.border = '2px solid red'
                break;
            case 'Firebase: Error (auth/invalid-credential).':
                emailInput.style.border = '2px solid red'
                passwordlInput.style.border = '2px solid red'
                break;
        }
    })
})
document.querySelector('.return span').onclick = (e)=>{
    signOut(auth)
    window.open('/en/','_self')
}