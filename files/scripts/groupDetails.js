function boot () {
    let groupToLoad = localStorage.getItem("groupToLoad")
    document.title = groupToLoad;
}

window.addEventListener("load", boot)