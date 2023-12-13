const firebaseConfig = {
    apiKey: "AIzaSyC2a_bgTIwgjKjKhATomrjTkbI51h6c2Ck",
    authDomain: "qwitter-f9858.firebaseapp.com",
    databaseURL: "https://qwitter-f9858-default-rtdb.firebaseio.com",
    projectId: "qwitter-f9858",
    storageBucket: "qwitter-f9858.appspot.com",
    messagingSenderId: "496720287952",
    appId: "1:496720287952:web:6e1804e104a332d8a7a6d5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
     });

    document.getElementsById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot)  {childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") }
firebase_message_id = childKey;
message_data = childData

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like']
name_with_tag = "<h4> "+ name +"<img class='user_tick src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";


row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

} }); }); }
getData();


function updateLike(message_id)
{ 
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
}
