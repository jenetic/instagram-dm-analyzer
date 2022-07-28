/**
 * Get summary statistics
 * @params
 */
export const getSummary = (content: any) => {
  const participants: any = {};
  const messages = content.messages;

  messages.forEach((message: any) => {
    if (message["sender_name"] in participants) {
      const sender = participants[message["sender_name"]];
      sender.messages++;
      if ("content" in message && message["content"] !== "Liked a message") {
        sender.words += message["content"].split(" ").length;
      } 
      if ("photos" in message) {sender.photos += message["photos"].length;}
      if ("videos" in message) {sender.videos += message["videos"].length;}
      if (message["is_unsent"]) {sender.unseent++;}

    } else {
      participants[message["sender_name"]] = {};
      const sender = participants[message["sender_name"]];

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
      )
    }
  })
  for (const name in participants) {
    participants[name].averageWordsPerMessage = participants[name].words / participants[name].messages; 
  }
  console.log(participants);
  return participants;
}