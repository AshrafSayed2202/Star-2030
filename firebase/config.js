import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyATWU0dOM24yhwSN1zKpqSiM8A9pAa6kEU",
    authDomain: "starheadrest-2031.firebaseapp.com",
    databaseURL: "https://starheadrest-2031-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "starheadrest-2031",
    storageBucket: "starheadrest-2031.appspot.com",
    messagingSenderId: "526074143802",
    appId: "1:526074143802:web:ca0a2511d250710f59c103",
    measurementId: "G-2BQPYXM12L"
};
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app)
const storage = getStorage(app)

export { db , auth , storage }