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

export const savePaintTags = tags => {
  console.log("savePaintTags", tags)
  return {
    type: 'SAVE_PAINT_TAGS',
    tags
  }
};

export const savePainting = (painting) => {
  console.log("savePainting painting", painting)
  return {
    type: 'SAVE_PAINTING',
    painting
  }
}

export const selectPainting = (selectedPainting) => {
  console.log("selectPainting selectedPainting", selectedPainting)
  return {
    type: 'SELECT_PAINTING',
    selectedPainting
  }
}

export const loadPaintings = () => {
  console.log("loadPaintings")
  return {
    type: 'LOAD_PAINTINGS'
  }
}