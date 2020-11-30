     // Initialize Firebase
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
    apiKey: "AIzaSyALyfBlOsvmKDwNQLTKurC5hf_BmFKYnr4",
    authDomain: "vann-53570.firebaseapp.com",
    databaseURL: "https://vann-53570.firebaseio.com",
    projectId: "vann-53570",
    storageBucket: "vann-53570.appspot.com",
    messagingSenderId: "476713717043",
    appId: "1:476713717043:web:93e1c456a05aa8b8130246",
    measurementId: "G-8PRCPKPS2K"
  };
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     
     document.getElementById('send').onclick=function writeUserData(name) {
        var user = document.getElementById('t').value;
        firebase.database().ref().child("name").set(user);
      }