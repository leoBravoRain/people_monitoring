// import firebase from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAJUAAq-vvEOf4VfxWSAnXqvFGHLJ3Llo",
    authDomain: "people-monitoring-d707a.firebaseapp.com",
    databaseURL: "https://people-monitoring-d707a.firebaseio.com",
    projectId: "people-monitoring-d707a",
    storageBucket: "",
    messagingSenderId: "538538031695",
    appId: "1:538538031695:web:189464de7d65a2e201083a"
  };

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const fs = app.firestore();
// export const st = app.storage();