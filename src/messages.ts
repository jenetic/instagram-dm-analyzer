/**
 * @param max max number to pick random int from
 * @returns a random number betwen 0 and max
 */
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}

// Returns array of random messages from thread
export const getRandomMessages = (thread: any): any[] => {
  const threadNum = getRandomInt(thread.length);
  const index = getRandomInt(thread[threadNum].messages.length);
  return thread[threadNum].messages.slice(index, index+3);
}

/**
 * Get latest messages from chat given thread
 * @params 
 */
 export const getLatestMessages = (thread: any) => {
  let latestThread = thread[0];
  // Figure out which chat in thread has the latest messages
  thread.forEach((content: any) => {
    const timestamp = content.messages[0].timestamp_ms;
    if (timestamp > latestThread.messages[0].timestamp_ms) {
      latestThread = content;
    }
  })
  return latestThread.messages.slice(0, 10);
}

/**
 * Get first messages from chat given thread
 * @param thread 
 */
export const getFirstMessages = (thread: any) => {
  let firstThread = thread[0];

  thread.forEach((content: any) => {
    const timestamp = content.messages[0].timestamp_ms;
    if (timestamp < firstThread.messages[0].timestamp_ms) {
      firstThread = content;
    }
  })
  return firstThread.messages.slice(-10);
}