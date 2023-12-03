// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCev7dKI90znAHiyk8O5i6CXA1ptFLTl78",
    authDomain: "c-shop-8731f.firebaseapp.com",
    projectId: "c-shop-8731f",
    storageBucket: "c-shop-8731f.appspot.com",
    messagingSenderId: "904538078982",
    appId: "1:904538078982:web:7a15e45e295a035c056887",
    measurementId: "G-ELY8XRCD1C"
};

// 초기화 되어있는 경우 기존 app을 사용하도록 코드 수정
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase
export const store = getFirestore(app);
export const auth = getAuth(app);