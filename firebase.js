// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoreuaRNHLHjuO3UDQGDAdDWnytoO6FXs",
  authDomain: "christmas-letter-c3776.firebaseapp.com",
  projectId: "christmas-letter-c3776",
  storageBucket: "christmas-letter-c3776.appspot.com",
  messagingSenderId: "175382855335",
  appId: "1:175382855335:web:261ab3a961b13b335c2582",
  measurementId: "G-QSD1GVRRFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);