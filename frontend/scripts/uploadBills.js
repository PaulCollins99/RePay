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

function addSelectedNames(e) {
  console.log(e.target.textContent);

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
  console.log(userArray);
}

function importBill(total, arrayOfGroupMembers) {
  console.log(total, arrayOfGroupMembers);

}

function boot() {

  window.btnImport.addEventListener("click", importFile);
  window.test1.addEventListener("click", addSelectedNames);
  window.test2.addEventListener("click", addSelectedNames);
  window.selectAllBtn.addEventListener("click", selectAll);

}

window.addEventListener("load", boot);