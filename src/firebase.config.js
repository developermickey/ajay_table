// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtMSqW8dyu2rQ85CbzseE6XgfNtj9I6tE",
    authDomain: "ajay-bdb67.firebaseapp.com",
    projectId: "ajay-bdb67",
    storageBucket: "ajay-bdb67.appspot.com",
    messagingSenderId: "32455260787",
    appId: "1:32455260787:web:5c2827667d94f6386bc806",
    measurementId: "G-FD61MWN7W3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);