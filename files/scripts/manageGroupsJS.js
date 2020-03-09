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
    const text = document.getElementById("nameInput").textContent;
    const newElement = document.createElement("li");
    newElement.textContent = text;
    element.appendChild(newElement);
}


function boot () {
    window.createNewGroup.addEventListener("click", addTextBox)
    
}

window.addEventListener("load", boot);