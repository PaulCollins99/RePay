/**
 * Function to check on the criteria for creating account
 */

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

/**
 * Function to return a list of current existing usernames to use in the check criteria function
 */


function getListOfNames() {
    let names = []
    const nameArray = JSON.parse(localStorage.getItem("login-details"));
    nameArray.forEach(e => {
        const array = JSON.parse(e);
        names.push(array[0]);
    })
    return names;
}

/**
 * Function to create an account that uses the check criteria function to determine if the account is valid
 * @param {*} username Username input
 * @param {*} password Password input
 */

function createAccount(username, password) {
    //functinoallity required to check if username already exists
    let detailsArray = JSON.parse(localStorage.getItem("login-details"));

    let wrapper = [username, password]

    detailsArray.push(JSON.stringify(wrapper))

    localStorage.setItem("login-details", JSON.stringify(detailsArray));
    
    let users = JSON.parse(localStorage.getItem("userList"));
    users.push(username);
    localStorage.setItem("userList", JSON.stringify(users));

    localStorage.setItem("Username", username);
    console.log("Account created");
    login();
}

function login() {
    window.location.href = "home.html";
}

/**
 * Boot function with all things that need to be completed on load
 */

function boot() {
    window.createBtn.addEventListener("click", checkCriteria);
}

window.addEventListener("load", boot);