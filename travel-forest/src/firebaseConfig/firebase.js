import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCotTWpa9gduQgeKjR-K1Ua-towu7aroOs",
    authDomain: "travelforest-eea41.firebaseapp.com",
    projectId: "travelforest-eea41",
    storageBucket: "travelforest-eea41.appspot.com",
    messagingSenderId: "457553975001",
    appId: "1:457553975001:web:b75cf9101836e20843d0c8"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const db = firebase.firestore();
const auth = firebase.auth();

const timestamp = firebase.firestore.Timestamp

export { db, auth, timestamp };


