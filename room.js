//Firebase Database (Please Do not share this to anyone who is not a developer of this website);
const firebaseConfig = {
  apiKey: "AIzaSyABCnaN2CP7at_U_7c9XDxoGY7V_uEhl4Y",
  authDomain: "tree-chat-db.firebaseapp.com",
  databaseURL: "https://tree-chat-db-default-rtdb.firebaseio.com",
  projectId: "tree-chat-db",
  storageBucket: "tree-chat-db.appspot.com",
  messagingSenderId: "613108623407",
  appId: "1:613108623407:web:74d4726c4c8d4c16073eda",
};
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome Back " + user_name;

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on("value", function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row =
        "<div class='room_name' id=" +
        Room_names +
        " onclick='redirectToRoomName(this.id)'> #" +
        Room_names +
        "</div><hr>";
      document.getElementById("output").innerHTML = row;
    });
  });
}
getData();
function redirectTooRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.loacation = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
