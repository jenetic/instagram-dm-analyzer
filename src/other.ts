const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
}

// Gets random text from thread
export const getRandomMessages = (thread: any): any[] => {
  const threadNum = getRandomInt(thread.length);
  const index = getRandomInt(thread[threadNum].messages.length);
  return thread[threadNum].messages.slice(index, index+3);
}