// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7nfEF_klnY2cTQrHBWsChiOOTnGCJD6E",
    authDomain: "vegetable-warehouse-shop.firebaseapp.com",
    projectId: "vegetable-warehouse-shop",
    storageBucket: "vegetable-warehouse-shop.appspot.com",
    messagingSenderId: "929659972647",
    appId: "1:929659972647:web:21293b3c5406fbe39f3202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;