export let participantList: any = [];

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