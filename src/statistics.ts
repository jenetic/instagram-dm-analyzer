let participantList: any = [];

/**
 * Get summary statistics
 * @returns participantList
 */
export const getSummary = (thread: any) => {
  const participants: any = {};
  
  thread.forEach((content: any) => {
    const messages = content.messages;

    messages.forEach((message: any) => {
      // Basic statistics
      if (message["sender_name"] in participants) {
        const sender = participants[message["sender_name"]];
        if (!("content" in message) || ("content" in message && message["content"] !== "Liked a message")) {sender["Messages"]++};
        if ("content" in message && message["content"] !== "Liked a message") {
          sender["Texts"] += 1,
          sender["Words"] += message["content"].split(" ").length;
        } 
        if (message["type"] === "Share" && !("content" in message)) {sender["Shared"]++;}
        if ("photos" in message) {sender["Photos"] += message["photos"].length;}
        if ("videos" in message) {sender["Photos"] += message["videos"].length;}
        if (message["is_unsent"]) {sender["Unsent"]++;}
  
      } else {
        participants[message["sender_name"]] = {};
        const sender = participants[message["sender_name"]];
  
        sender["Name"] = message["sender_name"];
        
        ("content" in message && message["content"] == "Liked a message") ? (
          sender["Messages"] = 0
        ) : (
          sender["Messages"] = 1
        );
        ("content" in message && message["content"] !== "Liked a message") ? (
          sender["Texts"] = 1,
          sender["Words"] = message["content"].split(" ").length
        ) : (
          sender["Texts"] = 0,
          sender["Words"] = 0
        );
        (message["type"] === "Share" && !("content" in message)) ? (
          sender["Shared"] = 1
        ) : (
          sender["Shared"] = 0
        )
        "photos" in message ? (
          sender["Photos"] = message["photos"].length
        ) : (
          sender["Photos"] = 0
        );
        "videos" in message ? (
          sender["Videos"] = message["videos"].length
        ) : (
          sender["Videos"] = 0
        );
        message["is_unsent"] ? (
          sender["Unsent"] = 1
        ) : (
          sender["Unsent"] = 0
        );
      }
    })

    // Check for people who never sent a message
    thread[0]["participants"].forEach((participant: any) => {
      if (participant["name"] in participants) {
      } else {
        participants[participant["name"]] = {
          "Name": participant["name"],
          "Messages": 0,
          "Texts": 0,
          "Words": 0,
          "Shared": 0,
          "Photos": 0,
          "Videos": 0,
          "Unsent": 0,
        };
      }
    })
  })
  
  // Average words per message & Other
  for (const name in participants) {
    const person = participants[name];
    // Other
    person["Other"] = person["Messages"] - person["Texts"] - person["Shared"] - person["Photos"] - person["Videos"];
    // Average words per text
    if (person["Texts"] === 0) {
      person["Average Words Per Text"] = 0;
    } else {
      person["Average Words Per Text"] = Math.round((person["Words"] / person["Texts"])*100)/100; 
    }
  }
  // Turn into list to make table
  participantList = [];
  for (const name in participants) {
    participantList.push(participants[name]);
  }
  return participantList;
}

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
      percent && key !== "Name" ? (
        td.textContent = participantObj[key] + "%"
      ) : (
        td.textContent = participantObj[key]
      )
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