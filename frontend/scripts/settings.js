function logout () {

    

    window.location.href = "loginScript.html"
}

function boot () {
    window.logoutBtn.addEventListener("click", logout)
}

window.addEventListener("load", boot);