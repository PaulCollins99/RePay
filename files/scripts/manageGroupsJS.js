function addLi () {
    const element = document.getElementById("listOfGroups");
    const newElement = document.createElement("li");
    newElement.textContent = "Hi";
    element.appendChild(newElement);
}


function boot () {
    window.addEventListener("click", addLi)
}

window.addEventListener("load", boot);