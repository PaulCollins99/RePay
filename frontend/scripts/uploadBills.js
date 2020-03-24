//doesnt really work as intended

function importFile() {
    const element = document.getElementById('mainTextArea');
    const fileToImport = document.getElementById('fileToImport');
    const file = fileToImport.files[0];
    const fileReader = new FileReader();
  
    // eslint-disable-next-line func-names
    fileReader.addEventListener('load', function () {
      element.value = this.result;
    });
    fileReader.readAsText(file);
  }

function boot () {

    window.btnImport.addEventListener("click", importFile);


}

window.addEventListener("load", boot);