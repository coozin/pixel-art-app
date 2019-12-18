let paintingID = 0;

const defaultState = {
  painting: {
    textVal: "Title (click here to edit)",
    ID: paintingID,
    colorArr: [],
    paintingColors: [],
    size: 16,
    tags: [],
  },
  paintings: [],
  // selectedPainting: {},
}

const painting = (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_PAINTING_TITLE':
      return {
        ...state,
        painting: {
          ...state.painting,
          textVal: action.textVal,
        }

      };
    case 'SET_COLOR_PALETTE':
      return {
        ...state,
        painting: {
          ...state.painting,
          colorArr: action.colors,
        }

      };
    case 'SAVE_PAINTING_COLORS':
      return {
        ...state,
        painting: {
          ...state.painting,
          paintingColors: action.colors,
        }

      };
    case 'SAVE_CANVAS_SIZE':
      return {
        ...state,
        painting: {
          ...state.painting,
          size: action.size,
        }
      };
    case 'SAVE_PAINT_TAGS':
      return {
        ...state,
        painting: {
          ...state.painting,
          tags: action.tags,
        }
      };
    case 'SAVE_PAINTING':
      paintingID++;
      let paintings = JSON.parse(localStorage.getItem("paintings"))
      let newPaintings = [...paintings, action.painting]
      localStorage.setItem("paintings", JSON.stringify(newPaintings))
      return {
        ...state,
        paintings: [
          ...newPaintings
        ]
      }
    case 'SELECT_PAINTING':
      return {
        ...state,
        painting: action.selectedPainting
      }
    case 'LOAD_PAINTINGS':
      let paintingsFromLocal = JSON.parse(localStorage.getItem("paintings"))
      let newPaintingsFromLocal = [...paintingsFromLocal]
      // localStorage.setItem("paintings", JSON.stringify(newPaintings))
      return {
        ...state,
        paintings: [
          ...newPaintingsFromLocal
        ]
      }
    default:
      return state
  }
}

export default painting;