function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "username" && password == "password") {
        console.log("Access Granted")
    } else {
        console.log("Fuck off");
    }
}

function boot (){
    window.loginBtn.addEventListener("click", login)
}

window.addEventListener("load", boot);