//function to add new list item into the group list

function showTextBox () {

    const addButton = document.getElementById("createNewGroup")
    addButton.style.display = "none";

    const oldButton = document.getElementById("createButton")
    oldButton.style.display = "block";

    const oldInput = document.getElementById("nameInput")
    oldInput.style.display = "block";
}


function addLi () {
    const element = document.getElementById("listOfGroups");
    const input = document.getElementById("nameInput");
    const newElement = document.createElement("li");
    newElement.textContent = input.value;
    element.appendChild(newElement);

    const addButton = document.getElementById("createNewGroup")
    addButton.style.display = "block";

    const oldButton = document.getElementById("createButton")
    oldButton.style.display = "none";

    const oldInput = document.getElementById("nameInput")
    oldInput.style.display = "none";

    input.value = "";
}


function boot () {
    window.createNewGroup.addEventListener("click", showTextBox)
    window.createButton.addEventListener("click", addLi);
}

window.addEventListener("load", boot);