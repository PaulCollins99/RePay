//implement group admins
/**
 * Function the displays the text box when the user clicks on new group
 */
function showTextBox() {

    const addButton = document.getElementById("createNewGroup");
    addButton.style.display = "none";

    const oldButton = document.getElementById("createButton");
    oldButton.style.display = "block";

    const oldInput = document.getElementById("nameInput");
    oldInput.style.display = "block";
}

/**
 * Function that is assigned to each new group when its created
 * @param {*} e Element clicked
 */

function handlerForEachNewLi(e) {
    localStorage.setItem("groupToLoad", e.target.text);
    window.location.href = "manageGroupTemplate.html";
}

/**
 * Function to create a new group and store in local storage
 */
function addLi() {
    const element = document.getElementById("listOfGroups");
    const input = document.getElementById("nameInput");

    const existingGroups = getListOfGroups()
    if (existingGroups.filter(e => e == input.value) == "" && input.value != "") {
        const newElement = document.createElement("a");
        newElement.textContent = input.value;
        newElement.href = "#!";
        newElement.className = "collection-item waves-effect waves-light";
        element.appendChild(newElement);
        newElement.addEventListener("click", handlerForEachNewLi);

        const addButton = document.getElementById("createNewGroup");
        addButton.style.display = "block";

        const oldButton = document.getElementById("createButton");
        oldButton.style.display = "none";

        const oldInput = document.getElementById("nameInput");
        oldInput.style.display = "none";

        let groupArray = JSON.parse(localStorage.getItem("groupList"));

        let groupName = input.value;
        let userArray = [];
        let user = []
        user[0] = localStorage.getItem("Username");
        user[1] = 0;
        userArray.push(JSON.stringify(user));
        let wrapper = [groupName, JSON.stringify(userArray)];

        groupArray.push(JSON.stringify(wrapper));

        localStorage.setItem("groupList", JSON.stringify(groupArray));

        input.value = "";
    } else {
        alert("group name already exists");
        input.value = "";
    }


}

/**
 * Function to get an array of all group names
 */

function getListOfGroups() {
    let names = []
    const groupArray = JSON.parse(localStorage.getItem("groupList"));
    groupArray.forEach(e => {
        const array = JSON.parse(e);
        names.push(array[0]);
    })
    return names;
}

/**
 * Back button
 */

function back() {
    window.location.href = "home.html";
}

/**
 * Function to load all groups the user is a member of
 */

function loadGroups() {
    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    groupArray.forEach(element => {
        let array = JSON.parse(element);
        let usersArray = JSON.parse(array[1]);        
        usersArray.forEach(e => {
            let user = JSON.parse(e);
            if (user[0] == localStorage.getItem("Username")) {
                const name = array[0];
                const element = document.getElementById("listOfGroups");
                const newElement = document.createElement("a");
                newElement.textContent = name;
                newElement.href = "#!";
                newElement.className = "collection-item waves-effect waves-light";
                newElement.addEventListener("click", handlerForEachNewLi);
                element.appendChild(newElement);
            }
        })
    });
}

/**
 * Boot function to load everything needed
 */

function boot() {
    window.createNewGroup.addEventListener("click", showTextBox)
    window.createButton.addEventListener("click", addLi);
    loadGroups();
}

window.addEventListener("load", boot);