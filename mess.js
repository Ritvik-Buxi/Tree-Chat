//Firebase Database (Please Do not share this to anyone who is not a developerof this website);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyABCnaN2CP7at_U_7c9XDxoGY7V_uEhl4Y",
  authDomain: "tree-chat-db.firebaseapp.com",
  databaseURL: "https://tree-chat-db-default-rtdb.firebaseio.com",
  projectId: "tree-chat-db",
  storageBucket: "tree-chat-db.appspot.com",
  messagingSenderId: "613108623407",
  appId: "1:613108623407:web:74d4726c4c8d4c16073eda"
};

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0,
  });
  document.getElementById("msg").value = "";
}

function getData() {
  firebase
    .database()
    .ref("/" + room_name)
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          
        }
      });
    });
}
getData();