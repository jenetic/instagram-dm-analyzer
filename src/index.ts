import './main.css';

let files: File[] = [];
// let dropDownSelection: string = "";

// Turns file inputs into array and removes non-JSON files
const processFileInput = (fileList: FileList): File[] => {
  let files: File[] = Array.from(fileList);
  files = files.filter(file => {
    return file.name.substring(file.name.length - 4) === "json";
  })
  return files;
}

const getFirstParticipant = (content: any) => {
  return content.participants[0].name;
}

// Main
document.getElementById('submit-button').addEventListener("click", function(event) {
  event.preventDefault();
  files = processFileInput((<HTMLInputElement>document.getElementById("file-input")).files);

  files.forEach(file => {
    const filesList = document.getElementById("dm-list");
    const buttonHeader = document.getElementById("main-header");
    const mainContent = document.getElementById("main-content");
    
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      const contentString: string = evt.target.result as string;
      const content = JSON.parse(contentString);
      
      const sideButton = document.createElement("button");
      sideButton.setAttribute("class", "side-button");
      sideButton.textContent = content.title;
      sideButton.onclick = () => {

        // Sub buttons
        const firstPartipicantBtn = document.createElement("button");
        firstPartipicantBtn.textContent = "First Participant";
        firstPartipicantBtn.onclick = () => {
          mainContent.innerHTML = "";
          mainContent.textContent = getFirstParticipant(content);
        };

        const contentBtn = document.createElement("button");
        contentBtn.textContent = "Content";
        contentBtn.onclick = () => {
          mainContent.innerHTML = "";
          mainContent.textContent = JSON.stringify(content);
        };

        buttonHeader.innerHTML = "";
        mainContent.innerHTML = "";
        buttonHeader.appendChild(firstPartipicantBtn);
        buttonHeader.appendChild(contentBtn); 
      }
      filesList.appendChild(sideButton);
    }
    reader.onerror = (evt) => {
      document.getElementById("file-contents").innerHTML = "error reading file";
    }
  })
  document.getElementById("no-files-message").style.display = "none";
}, false);

