// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCG_CgyuBflNFgnP9-SNSWoIDEQFbQSCm0",
    authDomain: "tiktok-843ff.firebaseapp.com",
    projectId: "tiktok-843ff",
    storageBucket: "tiktok-843ff.appspot.com",
    messagingSenderId: "918949824549",
    appId: "1:918949824549:web:d713c073ef5129848cd7cc"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };