import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBpPiX9ligvC0rM4-DOMv_P5StU0BHrFS8",
    authDomain: "niladvantage.firebaseapp.com",
    databaseURL: "https://niladvantage.firebaseio.com",
    projectId: "niladvantage",
    storageBucket: "niladvantage.appspot.com",
    messagingSenderId: "747737908934",
    appId: "1:747737908934:web:e33d779e8ace2ac35439c7"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;