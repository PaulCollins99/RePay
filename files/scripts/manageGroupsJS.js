//function to add new list item into the group list

function addTextBox () {
    const element = document.getElementById("manageGroupsDiv");

    const newElement = document.createElement("input");
    newElement.placeholder = "Enter Name";
    
    const newButton = document.createElement("button");
    newButton.textContent = "Create";
    newButton.id = "createButton";
    newButton.addEventListener("click", addLi);

    const oldAddButton = document.getElementById("addNewList")
    oldAddButton.style.display = "none";

    element.appendChild(newElement);
    element.appendChild(newButton);

}

function addLi () {
    const element = document.getElementById("listOfGroups");
    const newElement = document.createElement("li");
    newElement.textContent = "Group name here";
    element.appendChild(newElement);
}


function boot () {
    window.addNewList.addEventListener("click", addTextBox)
    
}

window.addEventListener("load", boot);