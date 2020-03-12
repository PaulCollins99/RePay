function checkCriteria() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passCheck = document.getElementById("confirmPassword").value
    let existingNames = getListOfNames();

    if (existingNames.filter(e => e == username) == "") {
        if (password === passCheck && password != null && password != "") {
            createAccount(username, password);
        } else {
            console.log("password invalid");
        }
    } else {
        console.log("username already exists");
    }

}


function getListOfNames() {
    let names = []
    const nameArray = JSON.parse(localStorage.getItem("login-details"));
    nameArray.forEach(e => {
        const array = JSON.parse(e);
        names.push(array[0]);
    })
    return names;
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