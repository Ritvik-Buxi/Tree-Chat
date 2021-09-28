//Firebase Database (Please Do not share this to anyone who is not a developerof this website);
var firebaseConfig = {
  apiKey: "AIzaSyABCnaN2CP7at_U_7c9XDxoGY7V_uEhl4Y",
  authDomain: "tree-chat-db.firebaseapp.com",
  databaseURL: "https://tree-chat-db-default-rtdb.firebaseio.com",
  projectId: "tree-chat-db",
  storageBucket: "tree-chat-db.appspot.com",
  messagingSenderId: "613108623407",
  appId: "1:613108623407:web:74d4726c4c8d4c16073eda",
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name_to");
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
  firebase.database().ref("/" + room_name).on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data["name"];
          message = message_data["message"];
          like = message_data["like"];
          name_with_tag =
            "<h4> " +name+"</h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button =
            "<button class='btn btn-warning' id=" +
            firebase_message_id +
            " value=" +
            like +
            " onclick='updateLike(this.id)'>";
          span_with_tag =
            "<span class='glyphicon glyphicon-thumbs-up'> Like: " +
            like +
            "</span></button><hr>";

          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}

getData();

function updateLike(message_id) {
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes,
  });
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

function back(){
  window.location = "room.html";
}