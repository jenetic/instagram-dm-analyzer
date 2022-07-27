import './main.css';

const submitFile = () => {
  console.log("hi");
  const file = (<HTMLInputElement>document.getElementById("file-input")).files[0];
  if (file) {
    const reader = new FileReader();

    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      const contentString: string = evt.target.result as string;
      const content = JSON.parse(contentString);
      console.log(content);

      document.getElementById("file-contents").innerHTML = content.participants[1].name as string;
    }
    reader.onerror = (evt) => {
      document.getElementById("file-contents").innerHTML = "error reading file";
    }
  }
}

// Webpack does not make functions global so HTML onclick doesn't work?
// document.getElementById('submit-button').onclick = function() {submitFile()};

const dropArea = document.getElementById('drop-area');

function traverseFileTree(item: any, path="") {
  // path = path || "";
  if (item.isFile) {
    // Get file
    item.file(function(file: File) {
      console.log("File:", path + file.name);
    });
  } else if (item.isDirectory) {
    // Get folder contents
    var dirReader = item.createReader();
    dirReader.readEntries(function(entries: any) {
      for (var i=0; i<entries.length; i++) {
        traverseFileTree(entries[i], path + item.name + "/");
      }
    });
  }
}

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("hi");

  const items: any = (<HTMLInputElement>document.getElementById("file-input")).files;

  console.log("items:", items);
  // // var items = event.dataTransfer.items;
  // for (var i=0; i<items.length; i++) {
  //   // webkitGetAsEntry is where the magic happens
  //   var item = items[i].webkitGetAsEntry();
  //   if (item) {
  //     traverseFileTree(item);
  //   }
  // }
}, false);