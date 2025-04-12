
const firebaseConfig = {
  apiKey: "AIzaSyBfdN0gcs9MrRsGvXfCfeu8IWdIQz60VzY",
  authDomain: "simpleauthapp-1e99c.firebaseapp.com",
  projectId: "simpleauthapp-1e99c",
  storageBucket: "simpleauthapp-1e99c.firebasestorage.app",
  messagingSenderId: "143583537009",
  appId: "1:143583537009:web:df83f7ad7a481a59dc78d0"
};  
 
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const dbURL = firebaseConfig.databaseURL;
  

  function show(msg) {
    document.getElementById("message").innerText = msg;
  }
  

  async function signUp() {
    let name = document.getElementById("signup-name").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let pass = document.getElementById("signup-pass").value;
    let confirm = document.getElementById("signup-confirm").value;
  
    if (pass !== confirm) {
      show("Passwords don't match");
      return;
    }
  
    try {
      let result = await auth.createUserWithEmailAndPassword(email, pass);
      let user = result.user;
  
   
      const dbURL="https://simpleauthapp-1e99c-default-rtdb.firebaseio.com"
      await fetch(`${dbURL}/users/${user.uid}.json`, {
        method: "PUT",
        body: JSON.stringify({ name, email })
      });
  
      show("Signed up successfully!");
    } catch (err) {
      show(err.message);
    }
  }
  

  async function signIn() {
    let email = document.getElementById("signin-email").value.trim();
    let pass = document.getElementById("signin-pass").value;
  
    try {
      let result = await auth.signInWithEmailAndPassword(email, pass);
      let user = result.user;
  
      let res = await fetch(`${dbURL}/users/${user.uid}.json`);
      let data = await res.json();
  
      show("Welcome " + data.name);
    } catch (err) {
      show(err.message);
    }
  }
  