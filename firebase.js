
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0hP2UzeTZj36jKarLoxR1yGfqEqJUT3A",
  authDomain: "blogging-website-82941.firebaseapp.com",
  projectId: "blogging-website-82941",
  storageBucket: "blogging-website-82941.appspot.com",
  messagingSenderId: "827076777385",
  appId: "1:827076777385:web:c2cf65f35ffdfd1cace0b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



let db = firebase.firestore();