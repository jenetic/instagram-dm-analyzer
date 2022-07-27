const submitFile = () => {
  console.log("hi");
  const file = (<HTMLInputElement>document.getElementById("file-input")).files[0];
  if (file) {
    const reader = new FileReader();

    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      document.getElementById("file-contents").innerHTML = evt.target.result as string;
    }
  }
}

const hi = () => {
  console.log("hi");
}

document.getElementById('submit-button').onclick = function() {submitFile()};