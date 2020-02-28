function login() {
    //grab the values from the form input elements
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    // we need our own password database just incase people dont want to use google sign in. Will just use local storage until this is stored
    if (username == localStorage.getItem("login-username") && password == localStorage.getItem("login-password")) {
        console.log("Access Granted");
        localStorage.setItem("Username", username);
        window.location.href = 'menu.html';
    } else {
        console.log("Access Denied");
    }
}

//googles premaid function for retrieving data from google sign in
function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Gotta use sommin called an id token here... not sure what that is tbh
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 

   // window.location.href = "menu.html";
  }

function boot() {
    window.loginBtn.addEventListener("click", login);
    //create of a local storage "account".
    localStorage.setItem("login-username", "admin");
    localStorage.setItem("login-password", "pass");
}

window.addEventListener("load", boot);