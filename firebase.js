import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOd--hYb95AlBQSEtgw1fx1ppdwX1G_zA",
    authDomain: "signal-clone-9143b.firebaseapp.com",
    projectId: "signal-clone-9143b",
    storageBucket: "signal-clone-9143b.appspot.com",
    messagingSenderId: "1086082613670",
    appId: "1:1086082613670:web:b209faad33f7c268b74f67"
  };
let app;


if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
app = firebase.app();
}


 const db = app.firestore();
 const auth = firebase.auth();

 export { db, auth};