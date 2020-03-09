function checkCriteria () {
    let username = document.getElementById().value;
    let password = document.getElementById().value;
    let passCheck = document.getElementById().value

    if (password === passCheck && password != null && password != "") {
        if (localStorage.getItem("login-username") !== username) {
            createAccount(username, password);
        }
    }
}

function createAccount (username, password) {
    localStorage.setItem("login-username", username);
    localStorage.setItem("login-password", password);
    localStorage.setItem("Username", username);
    login();
}

function login () {
    window.location.href = "menu.href";
}

function boot () {
    window.createBtn.addEventListener("click", checkCriteria);
}

window.addEventListener("load", boot);