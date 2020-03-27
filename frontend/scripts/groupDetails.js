/**
 * Function that adds the user to the selected group
 * @param {*} newuser The user that is to be added
 */

function addUser(newuser) {
    let groupToEdit = localStorage.getItem("groupToLoad");
    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    let potentialUsers = JSON.parse(localStorage.getItem("userList"));
    potentialUsers.forEach(e => {
        if (e === newuser && e.length == newuser.length) {
            for (let x = 0; x < groupArray.length; x++) {
                let array = JSON.parse(groupArray[x]);
                if (array[0] == groupToEdit) {
                    let wrapper = JSON.parse(array[1]);
                    let check = false;
                    wrapper.forEach(e=> {
                        let userCheck = JSON.parse(e);
                        if (userCheck[0] == newuser) {
                            check = true;
                        }
                    })
                    
                    let user = []
                    if (!check) {
                        user[0] = newuser;
                        user[1] = 0;
                        wrapper.push(JSON.stringify(user))
                        array[1] = JSON.stringify(wrapper);
                        let element = JSON.stringify(array);
                        groupArray[x] = element;
                        localStorage.setItem("groupList", JSON.stringify(groupArray));
                    } else {
                        alert("User is already a member of the group");
                    }
                }
            }
        } else {
            // alert("User does not exist");
        }
    });

}

/**
 * Function that adds the user to the selected group 
 * @param {*} user The user that is to be added
 */

function deleteUser(theUser) {
    let admin = localStorage.getItem("groupAdmin");
    if (admin === localStorage.getItem("Username")) {
        let groupToEdit = localStorage.getItem("groupToLoad");
        let groupArray = JSON.parse(localStorage.getItem("groupList"));
        for (let x = 0; x < groupArray.length; x++) {
            let array = JSON.parse(groupArray[x]);
            console.log("array is " + array);
            
            if (array[0] == groupToEdit) {
                let userToBeDeleted;
                let currentUsers = JSON.parse(array[1]);
                console.log("current users " + currentUsers);
                for (let i = 1; i<currentUsers.length; i++) {
                    let user = JSON.parse(currentUsers[i]);
                    if (user[0] == theUser) {
                        userToBeDeleted = i;
                    }   
                }
                let deletee = currentUsers[userToBeDeleted];
                console.log("Current array" + currentUsers);
                let newUserArray = currentUsers.filter(e=>e != deletee)
                console.log("New user array " + newUserArray)
                array[1] = JSON.stringify(newUserArray);
                console.log("array " + array);
                groupArray[x] = JSON.stringify(array);
                localStorage.setItem("groupList", JSON.stringify(groupArray));
                break;              
            }
        }
    } else {
        alert("Group admin required for that action. Please contact " + getAdminUser())
    }

}

/**
 * Function to allow the group admin to rename the group
 * @param {*} groupName Name for the rename of the group
 */

function changeGroupName(groupName) {
    let admin = localStorage.getItem("groupAdmin");
    if (admin === localStorage.getItem("Username")) {
        let groupToEdit = localStorage.getItem("groupToLoad");
        let groupArray = JSON.parse(localStorage.getItem("groupList"));

        for (let x = 0; x < groupArray.length; x++) {
            let array = JSON.parse(groupArray[x]);
            if (array[0] == groupToEdit) {

                array[0] = groupName;
                let element = JSON.stringify(array);
                groupArray[x] = element;
                localStorage.setItem("groupList", JSON.stringify(groupArray));
                localStorage.setItem("groupToLoad", groupName);
            }
        }
    } else {
        alert("Group admin required for that action. Please contact " + getAdminUser())
    }

}

/**
 * Functiont to allow the groupAdmin to delete the group
 */

function deleteGroup() {
    let admin = localStorage.getItem("groupAdmin");
    if (admin === localStorage.getItem("Username")) {
        let groupToDelete = localStorage.getItem("groupToLoad");
        let groupArray = JSON.parse(localStorage.getItem("groupList"));

        for (let x = 0; x < groupArray.length; x++) {
            let array = JSON.parse(groupArray[x]);
            if (array[0] == groupToDelete) {
                groupArray.splice(x, 1);
                localStorage.setItem("groupList", JSON.stringify(groupArray));
            }
        }
        window.location.href = "managegroups.html";
    } else {
        alert("Group admin required for that action. Please contact " + getAdminUser())
    }
}

/**
 * Function to navigate to the uplaod bill page
 */
function loadUploadBill() {
    window.location.href = "uploadBill.html";
}

/**
 * Function to find who the group admin is
 */

function getAdminUser() {
    let groupToLoad = localStorage.getItem("groupToLoad");
    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    
    groupArray.forEach(element => {
        let array = JSON.parse(element);
        if (array[0] == groupToLoad) {
            let userArray = JSON.parse(array[1]);
            let user = JSON.parse(userArray[0]);
            localStorage.setItem("groupAdmin", user[0]);
        }
    });
}

/**
 * Function used to call the addUser function when the corresponding button is clicked
 */

function newUser () {
    let user = document.getElementById("NewUserName").value
    addUser(user);
}

/**
 * Function to call the delUser function when the corresponding button is clicked
 */

function delUser () {
    let user = document.getElementById("DeleteUser").value
    deleteUser(user);
}

/**
 * Function to call the changeGroupName function when the corresponding button is clicked
 */

function changeName () {
    let name = document.getElementById("ChangeGroupName").value
    changeGroupName(name);
}

/**
 * Function that loops through all users in the group and creates a new element containing how much they owe the group
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
          const oldElement = document.getElementById("UserList");
          const newElement = document.createElement("a");
          newElement.textContent = user[0] + " owes £" + user[1];
          newElement.href = "#!";
          newElement.className = "collection-item waves-effect waves-light";
          //add in click to remove bill
          oldElement.appendChild(newElement);
        })
  
      }
    });
  }
  

/**
 * Boot function with all things that need to be completed on load
 */

function boot() {
    let groupToLoad = localStorage.getItem("groupToLoad");
    document.title = groupToLoad;
    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    groupArray.forEach(element => {
        let array = JSON.parse(element);
        if (array[0] == groupToLoad) {
            console.log("Group Name: " + array[0]);
            console.log("Users: ")
            let users = JSON.parse(array[1]);
            users.forEach(element => console.log(element))
        }
    });
    
    loadUserList();
    getAdminUser();
    window.newUserButton.addEventListener("click", newUser);
    window.delUserButton.addEventListener("click", delUser);
    window.changeGroupNameButton.addEventListener("click", changeName);
}

window.addEventListener("load", boot)