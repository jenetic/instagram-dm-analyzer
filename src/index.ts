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
document.getElementById('submit-button').onclick = function() {submitFile()};