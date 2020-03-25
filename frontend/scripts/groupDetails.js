/**
 * Function that adds the user to the selected group
 * @param {*} user The user that is to be added
 */

function addUser(user) {
    let groupToEdit = localStorage.getItem("groupToLoad");
    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    let potentialUsers = JSON.parse(localStorage.getItem("userList"));
    let userExists = false;
    potentialUsers.forEach(e => {
        console.log(e)
        console.log(e.length);
        console.log(user.length);
        if (e === user && e.length == user.length) {
            for (let x = 0; x < groupArray.length; x++) {
                let array = JSON.parse(groupArray[x]);
                if (array[0] == groupToEdit) {
                    let users = JSON.parse(array[1]);
                    let check = users.filter(e => e === user);
                    console.log(check);

                    if (check == "") {
                        users.push(user);
                        array[1] = JSON.stringify(users);
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

function deleteUser(user) {
    let admin = localStorage.getItem("groupAdmin");
    if (admin === localStorage.getItem("Username")) {
        let groupToEdit = localStorage.getItem("groupToLoad");
        let groupArray = JSON.parse(localStorage.getItem("groupList"));
        for (let x = 0; x < groupArray.length; x++) {
            let array = JSON.parse(groupArray[x]);
            if (array[0] == groupToEdit) {
                let currentUsers = JSON.parse(array[1]);
                let size = currentUsers.length;
                if (currentUsers.length > 1) {
                    let afterRemove = currentUsers.filter(e => e !== user);
                    if (size !== afterRemove.length) {
                        array[1] = JSON.stringify(afterRemove);
                        let element = JSON.stringify(array);
                        groupArray[x] = element;
                        localStorage.setItem("groupList", JSON.stringify(groupArray));
                    } else {
                        alert("user does not exist");
                    }

                } else alert("unable to remove last member of group. To do this please delete the group an");

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
        console.log(groupArray);

        for (let x = 0; x < groupArray.length; x++) {
            let array = JSON.parse(groupArray[x]);
            console.log(array);
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
            let users = JSON.parse(array[1]);
            localStorage.setItem("groupAdmin", users[0]);

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
}

window.addEventListener("load", boot)