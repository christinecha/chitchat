export const UPDATE_CURRENT_MESSAGE = (msgData) => {
  return {
    type: 'UPDATE_CURRENT_MESSAGE',
    data: {
      currentAuthor: msgData.author,
      currentMessage: msgData.message
    }
  }
}
