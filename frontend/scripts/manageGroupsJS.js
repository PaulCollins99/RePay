function showTextBox() {

    const addButton = document.getElementById("createNewGroup");
    addButton.style.display = "none";

    const oldButton = document.getElementById("createButton");
    oldButton.style.display = "block";

    const oldInput = document.getElementById("nameInput");
    oldInput.style.display = "block";
}

function handlerForEachNewLi(e) {    
    localStorage.setItem("groupToLoad", e.target.text);
    window.location.href = "template.html";
}


function addLi() {
    const element = document.getElementById("listOfGroups");
    const input = document.getElementById("nameInput");

    const existingGroups = getListOfGroups()
    if (existingGroups.filter(e => e == input.value) == "" && input.value != "") {
        const newElement = document.createElement("a");
        newElement.textContent = input.value;
        newElement.href="#!";
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
        let username = []; 
        username.push(localStorage.getItem("Username"));

        let wrapper = [groupName, JSON.stringify(username)];

        groupArray.push(JSON.stringify(wrapper));

        localStorage.setItem("groupList", JSON.stringify(groupArray));

        input.value = "";
    } else {
        alert("group name already exists");
        input.value = "";
    }


}

function getListOfGroups() {
    let names = []
    const groupArray = JSON.parse(localStorage.getItem("groupList"));
    groupArray.forEach(e => {
        const array = JSON.parse(e);
        names.push(array[0]);
    })
    return names;
}

function back() {
    window.location.href = "index.html";
}

function boot() {
    window.createNewGroup.addEventListener("click", showTextBox)
    window.createButton.addEventListener("click", addLi);
    window.backArrow.addEventListener("click", back);

    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    groupArray.forEach(element => {
        let array = JSON.parse(element);
        let users = JSON.parse(array[1]);
        users.forEach (e => {
            if (e == localStorage.getItem("Username")) {
                const name = array[0];
            const element = document.getElementById("listOfGroups");
            const newElement = document.createElement("a");
            newElement.textContent = name;
            newElement.href="#!";
            newElement.className = "collection-item waves-effect waves-light";
            newElement.addEventListener("click", handlerForEachNewLi);
            element.appendChild(newElement);
            }
        })
    });
}

window.addEventListener("load", boot);