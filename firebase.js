import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAQY7zUJ7ra9eGMgSimC1aln8pgyuioHLE",
  authDomain: "signal-clone-1332.firebaseapp.com",
  projectId: "signal-clone-1332",
  storageBucket: "signal-clone-1332.appspot.com",
  messagingSenderId: "376254634983",
  appId: "1:376254634983:web:387b658d81a86f947ffb42",
  measurementId: "G-M34EEXQTE8"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);  
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };