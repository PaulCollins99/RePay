//doesnt really work as intended

//input the amount you want

//split

//store local storage for the time being

function loadGroups() {
  let groupArray = JSON.parse(localStorage.getItem("groupList"));
  groupArray.forEach(element => {
    let array = JSON.parse(element);
    let users = JSON.parse(array[1]);
    users.forEach(e => {
      if (e == localStorage.getItem("Username")) {
        const name = array[0];
        const element = document.getElementById("listOfGroups");
        const newElement = document.createElement("a");
        newElement.textContent = name;
        newElement.href = "#!";
        newElement.className = "collection-item waves-effect waves-light";
        newElement.addEventListener("click", selectGroup);
        element.appendChild(newElement);
      }
    })
  });

  function selectGroup(e) {
    localStorage.setItem("usersToBill", JSON.stringify([]));
    localStorage.setItem("groupToLoad", e.target.textContent);
    document.getElementById("groupSelection").style.display = "none";
    document.getElementById("userSelection").style.display = "block";
    loadUserList();
  }

}

function addSelectedNames(e) {
  let currentUsersAdded = JSON.parse(localStorage.getItem("usersToBill"));

  let contains = false;

  for (let i = 0; i < currentUsersAdded.length; i++) {
    if (currentUsersAdded[i] === e.target.textContent) {
      contains = true;
      alert("User already selected");
      break;
    }
  }

  if (!contains) {
    currentUsersAdded.push(e.target.textContent);
    localStorage.setItem("usersToBill", JSON.stringify(currentUsersAdded));
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
      users.forEach(element => userArray.push(element));
    }
  });
  localStorage.setItem("usersToBill", JSON.stringify(users));
  hideUsers();
}

function loadUserList() {
  let groupToLoad = localStorage.getItem("groupToLoad");
  let groupArray = JSON.parse(localStorage.getItem("groupList"));
  groupArray.forEach(element => {
    let array = JSON.parse(element);
    if (array[0] == groupToLoad) {
      let users = JSON.parse(array[1]);
      users.forEach(element => {
        const oldElement = document.getElementById("listofUsers");
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

//check if selected users is emptyu

function hideUsers () {
  if (JSON.parse(localStorage.getItem("usersToBill")).length == 0) {
    alert("Please select a user");
  } else {
    document.getElementById("userSelection").style.display = "none";
    document.getElementById("addingTheBill").style.display = "block";
  }
}

function boot() {
  loadGroups();
  

  window.selectAllBtn.addEventListener("click", selectAll);
  window.nextBtn.addEventListener("click", hideUsers);


  document.getElementById("userSelection").style.display = "none";
  document.getElementById("addingTheBill").style.display = "none";

}

window.addEventListener("load", boot);