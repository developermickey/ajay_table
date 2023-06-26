import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBtMSqW8dyu2rQ85CbzseE6XgfNtj9I6tE",
    authDomain: "ajay-bdb67.firebaseapp.com",
    projectId: "ajay-bdb67",
    storageBucket: "ajay-bdb67.appspot.com",
    messagingSenderId: "32455260787",
    appId: "1:32455260787:web:5c2827667d94f6386bc806",
    measurementId: "G-FD61MWN7W3"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();