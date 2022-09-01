// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClGhKjw-mGEFhg-26QQ68ymK_aXX953dM",
  authDomain: "sloth-sloth.firebaseapp.com",
  projectId: "sloth-sloth",
  storageBucket: "sloth-sloth.appspot.com",
  messagingSenderId: "461179578690",
  appId: "1:461179578690:web:165eec0ce8587e808900db",
  measurementId: "G-0F7TN09G2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider(app);
export {app,auth,provider};