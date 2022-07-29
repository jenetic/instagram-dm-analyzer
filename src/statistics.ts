/**
 * Get summary statistics
 */
export const getSummary = (content: any) => {
  const participants: any = {};
  const messages = content.messages;

  messages.forEach((message: any) => {
    // Basic statistics
    if (message["sender_name"] in participants) {
      const sender = participants[message["sender_name"]];
      sender.messages++;
      if ("content" in message && message["content"] !== "Liked a message") {
        sender.words += message["content"].split(" ").length;
      } 
      if ("photos" in message) {sender.photos += message["photos"].length;}
      if ("videos" in message) {sender.videos += message["videos"].length;}
      if (message["is_unsent"]) {sender.unsent++;}

    } else {
      participants[message["sender_name"]] = {};
      const sender = participants[message["sender_name"]];

      sender.name = message["sender_name"];
      sender.messages = 1;
      ("content" in message && message["content"] !== "Liked a message") ? (
        sender.words = message["content"].split(" ").length
      ) : (
        sender.words = 0
      );
      "photos" in message ? (
        sender.photos = message["photos"].length
      ) : (
        sender.photos = 0
      );
      "videos" in message ? (
        sender.videos = message["videos"].length
      ) : (
        sender.videos = 0
      );
      message["is_unsent"] ? (
        sender.unsent = 1
      ) : (
        sender.unsent = 0
      );
    }
  })

  // Check for people who never sent a message
  content["participants"].forEach((participant: any) => {
    if (participant["name"] in participants) {
    } else {
      participants[participant["name"]] = {
        name: participant["name"],
        messages: 0,
        words: 0,
        photos: 0,
        videos: 0,
        unsent: 0
      };
    }
  })

  // Average words per message
  for (const name in participants) {
    if (participants[name].messages === 0) {
      participants[name].averageWordsPerMessage = 0;
    } else {
      participants[name].averageWordsPerMessage = participants[name].words / participants[name].messages; 
    }
  }

  // Turn into list to make table
  const participantList = [];
  for (const name in participants) {
    participantList.push(participants[name]);
  }
  return participantList;
}

export const makeSummaryTable = (participantList: any[]) => {
  const table = document.createElement("table");
  participantList.forEach((participantObj) => {
    const tr = document.createElement("tr");
    for (const key in participantObj) {
      const td = document.createElement("td");
      td.textContent = participantObj[key];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  })
  return table;
} 