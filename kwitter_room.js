
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA5k9PnxJ7TPbyeb--Po0osOyXKXSw-2GE",
      authDomain: "lets-chat-2c277.firebaseapp.com",
      databaseURL: "https://lets-chat-2c277-default-rtdb.firebaseio.com",
      projectId: "lets-chat-2c277",
      storageBucket: "lets-chat-2c277.appspot.com",
      messagingSenderId: "445013129496",
      appId: "1:445013129496:web:fac7a53e227247d1b1c66d",
      measurementId: "G-SKVK4E3809"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - "+ Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"+ Room_names +"</div>>hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}


