  import firebase from 'firebase';

//  firebase console:  https://console.firebase.google.com/u/0/project/cardsapplication-cefd0/overview
  
  var firebaseConfig = {
    apiKey: "AIzaSyBEjroWAAOX3IhnypCwmUe1N0SqYqARYcU",
    authDomain: "cardsapplication-cefd0.firebaseapp.com",
    databaseURL: "https://cardsapplication-cefd0.firebaseio.com",
    projectId: "cardsapplication-cefd0",
    storageBucket: "cardsapplication-cefd0.appspot.com",
    messagingSenderId: "639781846672",
    appId: "1:639781846672:web:409d01693ac5bf58e1e215"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
