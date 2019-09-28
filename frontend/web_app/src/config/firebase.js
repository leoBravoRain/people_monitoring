// import firebase from "firebase/app";
import firebase from "firebase";
// import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    // apiKey: "AIzaSyBAJUAAq-vvEOf4VfxWSAnXqvFGHLJ3Llo",
    // authDomain: "people-monitoring-d707a.firebaseapp.com",
    // databaseURL: "https://people-monitoring-d707a.firebaseio.com",
    // projectId: "people-monitoring-d707a",
    // storageBucket: "",
    // messagingSenderId: "538538031695",
    // appId: "1:538538031695:web:189464de7d65a2e201083a"

    apiKey: "AIzaSyBAJUAAq-vvEOf4VfxWSAnXqvFGHLJ3Llo",
    authDomain: "people-monitoring-d707a.firebaseapp.com",
    databaseURL: "https://people-monitoring-d707a.firebaseio.com",
    projectId: "people-monitoring-d707a",
    storageBucket: "people-monitoring-d707a.appspot.com",
    messagingSenderId: "538538031695",
    appId: "1:538538031695:web:9ade66afeac96fe101083a",
    measurementId: "G-GQ9J98DJ69"
  };

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const fs = app.firestore();

// export const an = firebase.analytics();

// export const st = app.storage();