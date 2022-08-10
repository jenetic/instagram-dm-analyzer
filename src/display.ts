import { participantList } from "./statistics";

export const decodeUtf8 = (s: string): string => {
  return decodeURIComponent(escape(s));
};

const rowArrayToTable = (rowArray: HTMLTableElement[], table: HTMLTableElement) => {
  const tableHeader = document.getElementById("table-header");
  table.innerHTML = "";
  table.appendChild(tableHeader);
  rowArray.forEach(row => {
    table.appendChild(row);
  })
}

export const sortTable = (key: string) => {
  // Convert rows to array and sort
  const table = <HTMLTableElement>document.getElementById("summary-table");
  let rows = [].slice.call(table.rows);
  rows.shift();
  rows.sort((row1: HTMLTableElement, row2: HTMLTableElement) => {
    const x = row1.getElementsByClassName(key)[0].textContent;
    const y = row2.getElementsByClassName(key)[0].textContent;
    if (parseFloat(x) > parseFloat(y)) {
      return -1;
    } else if (parseFloat(x) < parseFloat(y)) {
      return 1;
    } else {
      return 0;
    }
  });
  rowArrayToTable(rows, table);
}

export const makeSummaryTable = (participantList: any[], percent=false) => {
  const table = document.createElement("table");
  table.id = "summary-table";
  const tr = document.createElement("tr");
  tr.id = "table-header";
  for (const key in participantList[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    th.onclick = () => {sortTable(key);}
    tr.appendChild(th);
  }
  table.appendChild(tr);
  participantList.forEach((participantObj) => {
    const tr = document.createElement("tr");
    for (const key in participantObj) {
      const td = document.createElement("td");
      if (key == "Name") {
        td.textContent = decodeUtf8(participantObj[key]);
      } else if (percent) {
        td.textContent = participantObj[key] + "%"
      } else {
        td.textContent = participantObj[key]
      }
      td.className = key;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  })
  return table;
} 

/**
 * Gets percentages of current chat
 * @returns participantList
 */
export const getSummaryPercentages = () => {
  const total: any = {};

  // Get total count of all properties
  participantList.forEach((participant: any) => {
    for (const key in participant) {
      if (key !== "Name") {
        key in total ? (
          total[key] += participant[key]
        ) : (
          total[key] = participant[key]
        );
      }
    }
  })
  // Divide everyone's stats by corresponding total to get percentage
  participantList.forEach((person: any) => {
    for (const key in person) {
      if (key !== "Name") {
        if (total[key] !== 0) {
          person[key] = Math.round((person[key] / total[key])*100 *1)/1;
        }
      }
    }
  })
  return participantList;
}

// DISPLAYING MESSAGES
const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  return month + "/" + date.getDate() + "/" + date.getFullYear();
}

export const displayMessages = (messages: any[]) => {
  messages.reverse();
  const messagesElement  = document.createElement('div');
  messages.forEach((message: any) => {
    const headerElement = document.createElement('p');
    headerElement.className = "message-header";
    const textElement = document.createElement('p');
    textElement.className = "message-text";

    headerElement.textContent = decodeUtf8(message.sender_name) + " at " + timestampToDate(message.timestamp_ms);
    if ("content" in message) { textElement.textContent = decodeUtf8(message.content); }
    else {
      textElement.className = "message-media"
      if ("photos" in message) { textElement.textContent = "sent a photo." }
      else if ("videos" in message) { textElement.textContent = "sent a video." }
      else if (message["type"] === "Share" && !("content" in message)) { textElement.textContent = "shared something" }
      else { textElement.textContent = "sent some non-text media." }
    }
   
    const messageElement = document.createElement("div");
    messageElement.className = "message-wrapper"

    messageElement.appendChild(headerElement);
    messageElement.appendChild(textElement);
    messagesElement.appendChild(messageElement);
  })
  return messagesElement;
}