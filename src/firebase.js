import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // add config from firebase -> project settings
    apiKey: "AIzaSyBoyuVgnQJ_IM-gP5kiCBECzUfBBbKe3Oo",
    authDomain: "messenger-clone-c9d9b.firebaseapp.com",
    databaseURL: "https://messenger-clone-c9d9b.firebaseio.com",
    projectId: "messenger-clone-c9d9b",
    storageBucket: "messenger-clone-c9d9b.appspot.com",
    messagingSenderId: "477811859502",
    appId: "1:477811859502:web:0d540ec8817866142d7fbf",
    measurementId: "G-5LWY69LXE2"
});

const db = firebaseApp.firestore();

export default db;