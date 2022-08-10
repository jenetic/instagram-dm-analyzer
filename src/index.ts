import { 
  getSummary,
} from './statistics';
import {
  makeSummaryTable, 
  getSummaryPercentages,
  displayMessages,
  decodeUtf8
} from './display';
import {
  getRandomMessages,
  getLatestMessages,
  getFirstMessages,
} from './messages';
import './main.css';

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
  const fileGroups: any = {};

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
        callback(fileGroups)
      }
    };
    reader.readAsText(file, "UTF-8");
  }
  
  for (let i = 0; i < count; i++) {
    addToDict(files[i]);
  }
}

const displayResults = (fileGroups: any) => {
  for (const thread in fileGroups) {
    const dmList = document.getElementById("dm-list");
    const buttonHeader = document.getElementById("main-header");
    const mainContent = document.getElementById("main-content");

    const sideButton = document.createElement("button");
    sideButton.setAttribute("class", "side-button");
    sideButton.textContent = decodeUtf8(fileGroups[thread][0].title); // get value of key
    sideButton.onclick = () => {
      
      const chats = fileGroups[thread];
      // Sub buttons
      const summaryBtn = document.createElement("button");
      summaryBtn.textContent = "Summary";
      summaryBtn.onclick = () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(makeSummaryTable(getSummary(chats)));
      }

      const percentageBtn = document.createElement("button");
      percentageBtn.textContent = "Percentage";
      percentageBtn.onclick = () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(makeSummaryTable(getSummaryPercentages(), true));
      };

      const latestBtn = document.createElement("button");
      latestBtn.textContent = "Latest Messages";
      latestBtn.onclick = () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(displayMessages(getLatestMessages(chats)));
      };

      const firstBtn = document.createElement("button");
      firstBtn.textContent = "First Messages";
      firstBtn.onclick = () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(displayMessages(getFirstMessages(chats)));
      };

      const randomBtn = document.createElement("button");
      randomBtn.textContent = "Random Message";
      randomBtn.onclick = () => {
        mainContent.innerHTML = "";
        mainContent.appendChild(displayMessages(getRandomMessages(chats)));
      }

      buttonHeader.innerHTML = "";
      mainContent.innerHTML = "";

      buttonHeader.appendChild(summaryBtn);
      buttonHeader.appendChild(percentageBtn);
      buttonHeader.appendChild(latestBtn); 
      buttonHeader.appendChild(firstBtn); 
      buttonHeader.appendChild(randomBtn); 

      document.getElementById("chat-name").textContent = decodeUtf8(fileGroups[thread][0].title);

      // Display summary automatically
      mainContent.appendChild(makeSummaryTable(getSummary(fileGroups[thread])))
    }
    dmList.appendChild(sideButton);
  }
}

// Main
document.getElementById('submit-button').addEventListener("click", function(event) {
  event.preventDefault();
  const files: File[] = processFileInput((<HTMLInputElement>document.getElementById("file-input")).files);
  
  groupFiles(files, displayResults);

  document.getElementById("no-files-message").style.display = "none";
}, false);

