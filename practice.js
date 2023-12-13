
//ADD YOUR FIREBASE LINKS
// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC2a_bgTIwgjKjKhATomrjTkbI51h6c2Ck",
    authDomain: "qwitter-f9858.firebaseapp.com",
    databaseURL: "https://qwitter-f9858-default-rtdb.firebaseio.com",
    projectId: "qwitter-f9858",
    storageBucket: "qwitter-f9858.appspot.com",
    messagingSenderId: "496720287952",
    appId: "1:496720287952:web:6e1804e104a332d8a7a6d5"
  };

   firebase.initializeApp(firebaseConfig);

function addUser()
{
 user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
 });
}