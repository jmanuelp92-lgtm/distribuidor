import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase, ref, push, set, onValue, update, get } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDnJVufCnsG--VBGhwSve-90UKbJbxnApY",
    authDomain: "distribucion-animal-pro.firebaseapp.com",
    databaseURL: "https://distribucion-animal-pro-default-rtdb.firebaseio.com",
    projectId: "distribucion-animal-pro",
    storageBucket: "distribucion-animal-pro.firebasestorage.app",
    messagingSenderId: "636945124110",
    appId: "1:636945124110:web:ac03af24472a8b951a655f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export { ref, push, set, onValue, update, get };