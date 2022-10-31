// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv52J4ghclv9fMZgTWJ9Ij_YbRRveyRpE",
  authDomain: "weather-safe-364323.firebaseapp.com",
  projectId: "weather-safe-364323",
  storageBucket: "weather-safe-364323.appspot.com",
  messagingSenderId: "644686196266",
  appId: "1:644686196266:web:c5dc46280692b6e4391d53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
