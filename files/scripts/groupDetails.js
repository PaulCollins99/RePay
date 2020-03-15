function addUser(user) {
    let groupToLoad = localStorage.getItem("groupToLoad");
    let groupArray = JSON.parse(localStorage.getItem("groupList"));

    for (let x = 0; x < groupArray.length -1; x ++) {
        let array = JSON.parse(groupArray[x])
        if (array[0] == groupToLoad) {

            let users = JSON.parse(array[1]);
            users.push(user);
            array[1] = JSON.stringify(users);
            let element = JSON.stringify(array);
            groupArray[x] = element
            localStorage.setItem("groupList", JSON.stringify(groupArray));
        }
    }

    //groupArray.forEach(element => {
    //    let array = JSON.parse(element);
    //    if (array[0] == groupToLoad) {
//
    //        let users = JSON.parse(array[1]);
    //        users.push(user);
    //        array[1] = JSON.stringify(users);
    //        element = JSON.stringify(array);
    //        console.log(element);
    //        console.log(JSON.stringify(groupArray))
    //    }
    //})
}


function boot() {
    let groupToLoad = localStorage.getItem("groupToLoad");
    document.title = groupToLoad;

    let groupArray = JSON.parse(localStorage.getItem("groupList"));
    groupArray.forEach(element => {
        let array = JSON.parse(element)
        if (array[0] == groupToLoad) {
            console.log("Group Name: " + array[0]);
            console.log("Users: " + JSON.parse(array[1]));
        }
    });
}

window.addEventListener("load", boot)