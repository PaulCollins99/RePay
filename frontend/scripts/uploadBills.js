//doesnt really work as intended

//input the amount you want

//split

//store local storage for the time being

/**
 * Function to load all groups that the user is a member of
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
        newElement.addEventListener("click", selectGroup);
        element.appendChild(newElement);
      }
    })
  });
}

/**
 * Function to store the group that is clicked on
 * @param {*} e Clicked element
 */
function selectGroup(e) {
  localStorage.setItem("usersToBill", JSON.stringify([]));
  localStorage.setItem("groupToLoad", e.target.textContent);
  document.getElementById("groupSelection").style.display = "none";
  document.getElementById("userSelection").style.display = "block";
  loadUserList();
}

/**
 * Function to store the user that is clicked on
 * @param {*} e Clicked element 
 */
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
/**
 * Function to select every user that is a member of the group
 */

function selectAll() {
  let groupToLoad = localStorage.getItem("groupToLoad");
  let groupArray = JSON.parse(localStorage.getItem("groupList"));
  let usersToBill = [];
  groupArray.forEach(element => {
    let array = JSON.parse(element);
    if (array[0] == groupToLoad) {
      let userArray = JSON.parse(array[1]);
      userArray.forEach(e => {
        let user = JSON.parse(e);
        usersToBill.push(user[0]);
      })
    }
  });
  localStorage.setItem("usersToBill", JSON.stringify(usersToBill));
  hideUsers();
}

/**
 * Function to load all users of that group
 */
function loadUserList() {
  let groupToLoad = localStorage.getItem("groupToLoad");
  let groupArray = JSON.parse(localStorage.getItem("groupList"));

  groupArray.forEach(element => {
    let array = JSON.parse(element);
    if (array[0] == groupToLoad) {
      let userArray = JSON.parse(array[1]);
      userArray.forEach(e => {
        let user = JSON.parse(e);
        const oldElement = document.getElementById("listofUsers");
        const newElement = document.createElement("a");
        newElement.textContent = user[0];
        newElement.href = "#!";
        newElement.className = "collection-item waves-effect waves-light";
        newElement.addEventListener("click", addSelectedNames);
        oldElement.appendChild(newElement);
      })

    }
  });
}

//check if selected users is emptyu
/**
 * Function to hide the user selection section and display the adding bill section
 */
function hideUsers() {
  if (JSON.parse(localStorage.getItem("usersToBill")).length == 0) {
    alert("Please select a user");
  } else {
    document.getElementById("userSelection").style.display = "none";
    document.getElementById("addingTheBill").style.display = "block";
  }
}

function addItem() {
  let item = document.getElementById("Item/Name").value;
  let price = document.getElementById("Price").value

  if (item != null && item != "") {
    if (!isNaN(price)) {
      let currentPrice = parseFloat(localStorage.getItem("TotalCost"), 10)
      localStorage.setItem("TotalCost", currentPrice + parseFloat(price, 10));
    } else {
      alert("Please input a price")
    }
  } else {
    alert("Please input a name")
  }
}

function hideInputs() {
  document.getElementById("addingTheBill").style.display = "none";
  document.getElementById("splittingTheBill").style.display = "block";
  showUsers();
}

function showUsers() {
  let arrayOfUsers = JSON.parse(localStorage.getItem("usersToBill"));
  arrayOfUsers.forEach(e => {
    const oldElement = document.getElementById("listofUsers2");
    const newElement = document.createElement("a");
    const newElement2 = document.createElement("input");
    newElement2.placeholder = "Amount To Pay";
    newElement2.className = "Input";
    newElement2.id = e
    newElement.textContent = e;
    newElement.href = "#!";
    newElement.className = "collection-item waves-effect waves-light";
    oldElement.appendChild(newElement);
    oldElement.appendChild(newElement2);
  })
}

function billUsers() {
  let usersToBill = JSON.parse(localStorage.getItem("usersToBill"))
  let groupToLoad = localStorage.getItem("groupToLoad");
  let groupArray = JSON.parse(localStorage.getItem("groupList"));
  for (let x = 0; x < groupArray.length; x++) {
    let array = JSON.parse(groupArray[x]);
    if (array[0] == groupToLoad) {
      let usersArray = JSON.parse(array[1]);
      for (let i = 0; i < usersArray.length; i++) {
        let user = JSON.parse(usersArray[i]);
        usersToBill.forEach(el => {
          let cost = parseFloat(document.getElementById(el).value);
          if (user[0] == el) {
            let currentBill = parseFloat(user[1]);
            currentBill += parseFloat(cost)
            let newUser = [user[0], currentBill]          
            usersArray[i] = JSON.stringify(newUser)
            array[1] = JSON.stringify(usersArray);
            groupArray[x] = JSON.stringify(array);
            localStorage.setItem("groupList", JSON.stringify(groupArray));
          }
        })
      }
    }
  }
  window.location.href = "home.html"
}

function split() {
  let element = document.getElementsByClassName("Input");
  let total = 0
  let runningTotal = localStorage.getItem("TotalCost")
  for (let i = 0; i < element.length; i++) {
    total += parseFloat(element[i].value);
  }


  if (total == runningTotal) {
    billUsers();
  } else {
    alert("Values dont reach total of " + runningTotal);
  }
}

/**
 * Boot function with all things that need to be completed on load
 */

function boot() {
  loadGroups();

  window.addItemButton.addEventListener("click", addItem)
  window.splitButton.addEventListener("click", split)
  window.selectAllBtn.addEventListener("click", selectAll);
  window.nextBtn.addEventListener("click", hideUsers);
  window.inputButton.addEventListener("click", hideInputs)

  localStorage.setItem("TotalCost", 0.00);
}

window.addEventListener("load", boot);