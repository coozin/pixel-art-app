export const savePaintingTitle = textVal => {
  console.log("savePaintingTitle", textVal)
  return {
    type: 'SAVE_PAINTING_TITLE',
    textVal
  }
};