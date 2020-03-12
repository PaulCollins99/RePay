function login() {
    //grab the values from the form input elements
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    // we need our own password database just incase people dont want to use google sign in. Will just use local storage until this is stored
    let detailsArray = JSON.parse(localStorage.getItem("login-details"));
    detailsArray.forEach(e => {
        let innerArray = JSON.parse(e);
        console.log(innerArray[0])
        console.log(innerArray[1])
        if (innerArray[0] == username && innerArray[1] == password) {
            localStorage.setItem("Username", username);
            window.location.href = 'managegroups.html';
        } else {
            alert("Incorrect Details");
        }
    })
    if (username == localStorage.getItem("login-username") && password == localStorage.getItem("login-password")) {
        console.log("Access Granted");
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

function newAccount() {
    window.location.href = 'createAccount.html';
}

function boot() {
    window.loginBtn.addEventListener("click", login);
    window.createAccountBtn.addEventListener("click", newAccount)

    if (localStorage.getItem("groupList") == null) {
        localStorage.setItem("groupList", JSON.stringify([]));
    }
    if (localStorage.getItem("login-details") == null) {
        localStorage.setItem("login-details", JSON.stringify([]));
    }
}

window.addEventListener("load", boot);