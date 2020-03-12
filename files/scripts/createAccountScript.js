function checkCriteria() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passCheck = document.getElementById("confirmPassword").value

    if (password === passCheck && password != null && password != "") {
        if (localStorage.getItem("login-username") !== username) {
            createAccount(username, password);
        } else {
            console.log("username already exists");

        }
    } else {
        console.log("password invalid");

    }
}

function createAccount(username, password) {
    //functinoallity required to check if username already exists
    let detailsArray = JSON.parse(localStorage.getItem("login-details"));

    let wrapper = [username, password]

    detailsArray.push(JSON.stringify(wrapper))

    localStorage.setItem("login-details", JSON.stringify(detailsArray));

    localStorage.setItem("Username", username);
    console.log("Account created");
    login();
}

function login() {
    window.location.href = "managegroups.html";
}

function boot() {
    window.createBtn.addEventListener("click", checkCriteria);
}

window.addEventListener("load", boot);