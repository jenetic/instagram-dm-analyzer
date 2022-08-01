import { getSummary, makeSummaryTable } from './statistics';
import './main.css';

const fileGroups: any = {};

// Turns file inputs into array and removes non-JSON files
const processFileInput = (fileList: FileList): File[] => {
  let files: File[] = Array.from(fileList);
  files = files.filter(file => {
    return file.name.substring(file.name.length - 4) === "json";
  })
  return files;
}

const groupFiles = async (files: File[], callback: any) => {
  let count = files.length;
  // const fileGroups: any = {};

  const addToDict = (file: File) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const contentString: any = evt.target.result;
      const content = JSON.parse(contentString);
      if (content["thread_path"] in fileGroups) {
        fileGroups[content["thread_path"]].push(content);
      } else {
        fileGroups[content["thread_path"]] = [content];
      }
      count--;
      if (count === 0) {
        // return fileGroups;
        callback(fileGroups)
      }
    };
    reader.readAsText(file, "UTF-8");
  }
  
  for (let i = 0; i < count; i++) {
    addToDict(files[i]);
  }
}

const testy = (fileGroups: any) => {
  console.log(fileGroups);
}

// Main
document.getElementById('submit-button').addEventListener("click", function(event) {
  event.preventDefault();
  const files: File[] = processFileInput((<HTMLInputElement>document.getElementById("file-input")).files);
  
  groupFiles(files, testy);

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
        const summaryBtn = document.createElement("button");
        summaryBtn.textContent = "Summary";
        summaryBtn.onclick = () => {
          mainContent.innerHTML = "";
          mainContent.appendChild(makeSummaryTable(getSummary(content)));
        }

        const firstPartipicantBtn = document.createElement("button");
        firstPartipicantBtn.textContent = "First Participant";
        firstPartipicantBtn.onclick = () => {
          mainContent.innerHTML = "";
          // mainContent.textContent = getFirstParticipant(content);
        };

        const contentBtn = document.createElement("button");
        contentBtn.textContent = "Content";
        contentBtn.onclick = () => {
          mainContent.innerHTML = "";
          mainContent.textContent = "";
        };

        buttonHeader.innerHTML = "";
        mainContent.innerHTML = "";

        buttonHeader.appendChild(summaryBtn);
        buttonHeader.appendChild(firstPartipicantBtn);
        buttonHeader.appendChild(contentBtn); 

        document.getElementById("chat-name").textContent = content.title;

        // Display summary automatically
        mainContent.appendChild(makeSummaryTable(getSummary(content)))
      }
      filesList.appendChild(sideButton);
    }
    reader.onerror = (evt) => {
      document.getElementById("file-contents").innerHTML = "error reading file";
    }
  })
  document.getElementById("no-files-message").style.display = "none";
}, false);

