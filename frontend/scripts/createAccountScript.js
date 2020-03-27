/**
 * Function to check on the criteria for creating account and call the creation function
 */

function checkCriteria() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let passCheck = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let existingNames = getListOfNames();

    if (existingNames.filter(e => e == username) == "") {
        if (password === passCheck && password != null && password != "") {
            if (email != "" & email != null && emailIsValid(email)) {
                createAccount(base54It(username), base54It(password), base54It(email));
            }
            else {
                alert("Email Invalid")
            }
        } else {
            alert("Password Invalid");
        }
    } else {
        alert("Username already exists");
    }

}

/**
 * Function that converts the item parsed in and returns a base64 equivilant
 * @param {*} item Item to be converted into base64 
 */

function base64It (item) {
    return btoa(item)
} 

/**
 * A function to check the basic syntac of the emai entered matches _@_._
 * @param {*} email Email to be checked 
 */

function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
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
 * @param {*} password Base64 Password input
 * @param {*} email Base64 Email Input
 */

function createAccount(username, password, email) {
    //functinoallity required to check if username already exists
    let detailsArray = JSON.parse(localStorage.getItem("login-details"));

    let wrapper = [username, password, email]

    detailsArray.push(JSON.stringify(wrapper))

    localStorage.setItem("login-details", JSON.stringify(detailsArray));

    let users = JSON.parse(localStorage.getItem("userList"));
    users.push(username);
    localStorage.setItem("userList", JSON.stringify(users));

    localStorage.setItem("Username", username);
    console.log("Account created");
    login();
}

/**
 * Function to move the user onto the home.html page
 */

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