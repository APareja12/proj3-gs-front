import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVG_2wR8Xj3nAaBbj74TKedmBLVfOhYko",
    authDomain: "golden-silence-75a09.firebaseapp.com",
    projectId: "golden-silence-75a09",
    storageBucket: "golden-silence-75a09.appspot.com",
    messagingSenderId: "516077535493",
    appId: "1:516077535493:web:80264102832756ae0a776c",
    measurementId: "G-G52ZBQM34T"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new GoogleAuthProvider();

function signIn() {
    return signInWithPopup(auth, provider);
}

function logOut() {
    return auth.signOut();
}

export {
    auth,
    signIn,
    logOut,
}