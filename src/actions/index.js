export const savePaintingTitle = textVal => {
  return {
    type: 'SAVE_PAINTING_TITLE',
    textVal
  }
};

export const setColorPalette = colors => {
  return {
    type: 'SET_COLOR_PALETTE',
    colors
  }
};

export const savePaintingColors = colors => {
  return {
    type: 'SAVE_PAINTING_COLORS',
    colors
  }
};

export const saveCanvasSize = size => {
  return {
    type: 'SAVE_CANVAS_SIZE',
    size
  }
};

export const savePaintTags = tags => {
  return {
    type: 'SAVE_PAINT_TAGS',
    tags
  }
};

export const savePainting = (painting) => {
  return {
    type: 'SAVE_PAINTING',
    painting
  }
}

export const selectPainting = (selectedPainting) => {
  return {
    type: 'SELECT_PAINTING',
    selectedPainting
  }
}

export const loadPaintings = () => {
  return {
    type: 'LOAD_PAINTINGS'
  }
}

export const resetPainting = () => {
  return {
    type: 'RESET_PAINTING'
  }
}