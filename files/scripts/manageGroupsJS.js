//function to add new list item into the group list

function addTextBox () {
    const element = document.getElementById("manageGroupsDiv");

    const newElement = document.createElement("input");
    newElement.placeholder = "Enter Name";
    newElement.id = "nameInput";
    
    const newButton = document.createElement("button");
    newButton.textContent = "Create";
    newButton.id = "createButton";
    newButton.addEventListener("click", addLi);

    const oldAddButton = document.getElementById("createNewGroup")
    oldAddButton.style.display = "none";

    element.appendChild(newElement);
    element.appendChild(newButton);

}

function addLi () {
    const element = document.getElementById("listOfGroups");
    const text = document.getElementById("nameInput").value;
    const newElement = document.createElement("li");
    newElement.textContent = text;
    element.appendChild(newElement);

    const addButton = document.getElementById("createNewGroup")
    addButton.style.display = "block";

    const oldButton = document.getElementById("createButton")
    oldButton.style.display = "none";

    const oldInput = document.getElementById("nameInput")
    oldInput.style.display = "none";
}


function boot () {
    window.createNewGroup.addEventListener("click", addTextBox)
    
}

window.addEventListener("load", boot);