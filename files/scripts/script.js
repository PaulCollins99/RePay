function login() {
    let usrname = document.getElementById("username");
    let password = document.getElementById("password");

    if (usrname == "username" && password == "password") {
        console.log("Access Granted")
    } else {
        console.log("Fuck off");
    }
}

function boot (){
    window.loginBtn.addEventListener("click", login)
}

window.addEventListener("load", boot);