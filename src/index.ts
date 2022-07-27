import './main.css';

// Turns file inputs into array and removes non-JSON files
const processFileInput = (fileList: FileList): File[] => {
  let files: File[] = Array.from(fileList);
  files = files.filter(file => {
    return file.name.substring(file.name.length - 4) === "json";
  })
  return files;
}

// Main
document.getElementById('submit-button').addEventListener("click", function(event) {
  event.preventDefault();
  const files: File[] = processFileInput((<HTMLInputElement>document.getElementById("file-input")).files);

  files.forEach(file => {
    const filesList = document.getElementById("files")
    const divElement = document.createElement("div");
    
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      const contentString: string = evt.target.result as string;
      const content = JSON.parse(contentString);

      const p = document.createElement("p");
      p.textContent = content.participants[0].name;
      
      const button = document.createElement("button");
      button.textContent = content.participants[0].name;
      button.onclick = () => {
        console.log(content.participants[0].name);
      }

      divElement.appendChild(p);
      divElement.appendChild(button);
      filesList.appendChild(divElement);
    }
    

    reader.onerror = (evt) => {
      document.getElementById("file-contents").innerHTML = "error reading file";
    }
  })
}, false);

