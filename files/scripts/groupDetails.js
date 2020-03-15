function addUser(user) {
    let groupToEdit = localStorage.getItem("groupToLoad");
    let groupArray = JSON.parse(localStorage.getItem("groupList"));

    for (let x = 0; x < groupArray.length; x++) {
        let array = JSON.parse(groupArray[x]);
        if (array[0] == groupToEdit) {
            let users = JSON.parse(array[1]);
            users.push(user);
            array[1] = JSON.stringify(users);
            let element = JSON.stringify(array);
            groupArray[x] = element;
            localStorage.setItem("groupList", JSON.stringify(groupArray));
        }
    }
}

function changeGroupName(groupName) {
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
}

function deleteGroup () {
    let groupToDelete = localStorage.getItem("groupToLoad");
    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    console.log(groupArray);
    
    for (let x = 0; x < groupArray.length; x++) {
        let array = JSON.parse(groupArray[x]);
        console.log(array);
        if (array[0] == groupToDelete) {
            groupArray.splice(x,1);
            localStorage.setItem("groupList", JSON.stringify(groupArray));
        }
    }
    window.location.href = "managegroups.html";
}



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