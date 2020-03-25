//doesnt really work as intended

function importFile() {
  const element = document.getElementById('mainTextArea');
  const fileToImport = document.getElementById('fileToImport');
  const file = fileToImport.files[0];
  const fileReader = new FileReader();

  fileReader.addEventListener('load', function () {
    element.value = this.result;
  });
  fileReader.readAsText(file);
}

function importBill(total, arrayOfGroupMembers) {
  console.log(total, arrayOfGroupMembers);

}

function addSelectedNames(e) {
  let currentUsersAdded = JSON.parse(localStorage.getItem("usersToBill"));

  let contains = false;

  for (let i = 0; i < currentUsersAdded.length; i++) {
    if (currentUsersAdded[i] === e.target.textContent) {
      contains = true;
      break;
    }
  }

  if (!contains) {
    currentUsersAdded.push(e.target.textContent);
    localStorage.setItem("usersToBill", JSON.stringify(currentUsersAdded))
  }
}

function selectAll() {
  let userArray = [];
  let groupToLoad = localStorage.getItem("groupToLoad");
  let groupArray = JSON.parse(localStorage.getItem("groupList"));
  groupArray.forEach(element => {
    let array = JSON.parse(element);
    if (array[0] == groupToLoad) {
      let users = JSON.parse(array[1]);
      users.forEach(element => userArray.push(element))
    }
  });
  localStorage.setItem("usersToBill", JSON.stringify(users));
}

function loadUserList() {
  let groupToLoad = localStorage.getItem("groupToLoad");
  let groupArray = JSON.parse(localStorage.getItem("groupList"));
  groupArray.forEach(element => {
    let array = JSON.parse(element);
    if (array[0] == groupToLoad) {
      let users = JSON.parse(array[1]);
      users.forEach(element => {
        const oldElement = document.getElementById("listOfGroups");
        const newElement = document.createElement("a");
        newElement.textContent = element;
        newElement.href = "#!";
        newElement.className = "collection-item waves-effect waves-light";
        newElement.addEventListener("click", addSelectedNames);
        oldElement.appendChild(newElement);
      })
    }
  });



}

function boot() {

  loadUserList();

  window.btnImport.addEventListener("click", importFile);
  window.selectAllBtn.addEventListener("click", selectAll);


}

window.addEventListener("load", boot);