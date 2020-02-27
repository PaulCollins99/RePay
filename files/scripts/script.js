function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "username" && password == "password") {
        console.log("Access Granted");
        window.location.href = 'menu.html';
    } else {
        console.log("Fuck off");
    }
}

function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

function boot() {
    window.loginBtn.addEventListener("click", login)
}

window.addEventListener("load", boot);