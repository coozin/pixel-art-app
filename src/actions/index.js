export const savePaintingTitle = textVal => {
  console.log("savePaintingTitle", textVal)
  return {
    type: 'SAVE_PAINTING_TITLE',
    textVal
  }
};

export const setColorPalette = colors => {
  console.log("setColorPalette", colors)
  return {
    type: 'SET_COLOR_PALETTE',
    colors
  }
};

export const savePaintingColors = colors => {
  console.log("savePaintingColors", colors)
  return {
    type: 'SAVE_PAINTING_COLORS',
    colors
  }
};

export const saveCanvasSize = size => {
  console.log("saveCanvasSize", size)
  return {
    type: 'SAVE_CANVAS_SIZE',
    size
  }
};