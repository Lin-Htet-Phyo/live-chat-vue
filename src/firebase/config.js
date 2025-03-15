import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCqPxTGKDYMjSMmhCfekzzI34CQ2Fl3SEk",
    authDomain: "vue-blog-system-10857.firebaseapp.com",
    projectId: "vue-blog-system-10857",
    storageBucket: "vue-blog-system-10857.firebasestorage.app",
    messagingSenderId: "843091639542",
    appId: "1:843091639542:web:2be602d33a4a3af75c00d7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
let timestamp = serverTimestamp();
const auth = getAuth(firebaseApp);

export { db, timestamp, auth };