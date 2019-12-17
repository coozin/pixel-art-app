import { savePaintingTitle } from '../actions'

let paintingID = 0;

const defaultState = {
  textVal: "Title (click here to edit)",
  ID: paintingID,
  colorArr: [],
  paintingColors: [],
  size: 16,
  tags: [],
}

const painting = (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVE_PAINTING_TITLE':
      console.log("SAVE_PAINTING_TITLE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        textVal: action.textVal
      };
    case 'SET_COLOR_PALETTE':
      console.log("SET_COLOR_PALETTE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        colorArr: action.colors
      };
    case 'SAVE_PAINTING_COLORS':
      console.log("SAVE_PAINTING_COLORS in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        paintingColors: action.colors
      };
    case 'SAVE_CANVAS_SIZE':
      console.log("SAVE_CANVAS_SIZE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        size: action.size
      };
    case 'SAVE_PAINT_TAGS':
      console.log("SAVE_PAINT_TAGS in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return {
        ...state,
        tags: action.tags
      };
    default:
      return state
  }
}

export default painting;