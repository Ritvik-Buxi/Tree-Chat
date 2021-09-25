//Firebase Database (Please Do not share this to anyone who is not a developer of this website);
const firebaseConfig = {
  apiKey: "AIzaSyABCnaN2CP7at_U_7c9XDxoGY7V_uEhl4Y",
  authDomain: "tree-chat-db.firebaseapp.com",
  databaseURL: "https://tree-chat-db-default-rtdb.firebaseio.com",
  projectId: "tree-chat-db",
  storageBucket: "tree-chat-db.appspot.com",
  messagingSenderId: "613108623407",
  appId: "1:613108623407:web:74d4726c4c8d4c16073eda"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase();
function adduser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    firebaseConfig.database().ref(user_name).push({
      User_name: user_name,
    });
    this.location = "room.html";
    // "this" is actually what you are looking at like when you are in a website it shows the window and "this" variable automatically assigns itself to window.
}