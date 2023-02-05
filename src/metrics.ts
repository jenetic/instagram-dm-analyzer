import { commonWordsSet } from './words';

interface Participant {
  "Average Words Per Text": number;
  Messages: number;
  Name: string;
  Photos: number;
  Shared: number;
  Texts: number;
  Videos: number;
  Words: number;
}

export let participantList: Participant[] = [];

/**
 * Get summary statistics and word frequency
 * @returns [participantList, topWords]
 */
export const getSummary = (thread: any) => {
  const participants: any = {};
  const words: any = {};
  
  thread.forEach((content: any) => {
    const messages = content.messages;

    messages.forEach((message: any) => {
      // Basic statistics
      if (message["sender_name"] in participants) {
        const sender = participants[message["sender_name"]];
        if (!("content" in message) || ("content" in message && message["content"] !== "Liked a message")) {sender["Messages"]++};
        if ("content" in message) {
          sender["Texts"] += 1,
          sender["Words"] += message["content"].split(" ").length;
          message["content"].split(" ").forEach((word: any) => {
            word = word.replace(/[^0-9a-z]/gi, '').toLowerCase();
            if (commonWordsSet.has(word)) {
            } else {
              if (word in words) { words[word]++ }
              else {words[word] = 1};
            }
          })
        } 
        if (message["type"] === "Share" && !("content" in message)) {sender["Shared"]++;}
        if ("photos" in message) {sender["Photos"] += message["photos"].length;}
        if ("videos" in message) {sender["Photos"] += message["videos"].length;}
  
      } else {
        // If we encountered a message by a person whose name is not yet in participants object
        participants[message["sender_name"]] = {};
        const sender = participants[message["sender_name"]];
  
        sender["Name"] = message["sender_name"];
        sender["Messages"] = 1;
        "content" in message ? (
          sender["Texts"] = 1,
          sender["Words"] = message["content"].split(" ").length,
          message["content"].split(" ").forEach((word: any) => {
            word = word.replace(/[^0-9a-z]/gi, '').toLowerCase();
            if (commonWordsSet.has(word)) {
            } else {
              if (word in words) { words[word]++ }
              else {words[word] = 1};
            }
          })
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
          "Videos": 0
        };
      }
    })
  })
  
  // Average words per message & Other
  for (const name in participants) {
    const person = participants[name];
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

  // Sort words object and return the highest few (there's probably a better way to do this?)
  
  const topWords = Object.keys(words).sort((a,b) => {
    return words[b] - words[a];
  })

  return [participantList, topWords.slice(0, 50)];
}
