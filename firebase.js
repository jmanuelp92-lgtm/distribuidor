import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { 
    getDatabase, 
    ref, 
    push, 
    onValue, 
    set, 
    update, 
    remove, 
    get, 
    child 
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

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
const db = getDatabase(app);
const auth = getAuth(app);

// ESTA PARTE ES LA CLAVE. SI FALTA ALGUNA PALABRA AQUÍ, TODO FALLA.
export { 
    app, 
    db, 
    auth, 
    ref, 
    push, 
    onValue, 
    set, 
    update, 
    remove, 
    get, 
    child, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
};