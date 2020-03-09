function checkCriteria () {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passCheck = document.getElementById("confirmPassword").value

    if (password === passCheck && password != null && password != "") {
        if (localStorage.getItem("login-username") !== username) {
            createAccount(username, password);
        }
        else {
            console.log("username already exists");
            
        }
    } else {
        console.log("password invalid");
        
    }
}

function createAccount (username, password) {
    localStorage.setItem("login-username", username);
    localStorage.setItem("login-password", password);
    localStorage.setItem("Username", username);
    console.log("Account created");
    login();
}

function login () {
    window.location.href = "menu.href";
}

function boot () {
    window.createBtn.addEventListener("click", checkCriteria);
}

window.addEventListener("load", boot);