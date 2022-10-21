// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTAQdsPuoJzbP-fAM4-64Wj1DZKBpaSOQ",
  authDomain: "todo-list-3e0a0.firebaseapp.com",
  projectId: "todo-list-3e0a0",
  storageBucket: "todo-list-3e0a0.appspot.com",
  messagingSenderId: "1033626632978",
  appId: "1:1033626632978:web:34a3362154cf332776a9cb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;