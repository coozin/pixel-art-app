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
      console.log("SAVE_PAINTING_TITLE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        painting: {
          ...state.painting,
          textVal: action.textVal,
        }

      };
    case 'SET_COLOR_PALETTE':
      console.log("SET_COLOR_PALETTE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        painting: {
          ...state.painting,
          colorArr: action.colors,
        }

      };
    case 'SAVE_PAINTING_COLORS':
      console.log("SAVE_PAINTING_COLORS in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        painting: {
          ...state.painting,
          paintingColors: action.colors,
        }

      };
    case 'SAVE_CANVAS_SIZE':
      console.log("SAVE_CANVAS_SIZE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        painting: {
          ...state.painting,
          size: action.size,
        }
      };
    case 'SAVE_PAINT_TAGS':
      console.log("SAVE_PAINT_TAGS in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        painting: {
          ...state.painting,
          tags: action.tags,
        }
      };
    case 'SAVE_PAINTING':
      console.log("SAVE_PAINTING in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
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
      console.log("SELECT_PAINTING in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        painting: action.selectedPainting
      }
    case 'LOAD_PAINTINGS':
      console.log("LOAD_PAINTINGS in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
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