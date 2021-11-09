import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCSRA1x7MRKKtIaGdiljuCI7vd2PH9mJTI",
    authDomain: "fireweb-a5b83.firebaseapp.com",
    projectId: "fireweb-a5b83",
    storageBucket: "fireweb-a5b83.appspot.com",
    messagingSenderId: "1074179315752",
    appId: "1:1074179315752:web:e04b30e35d386721567d1d"
};


const app = firebase.initializeApp(firebaseConfig)

export default app;