import { savePaintingTitle } from '../actions'

const painting = (state = { textVal: "Title (click here to edit)" }, action) => {
  switch (action.type) {
    case 'SAVE_PAINTING_TITLE':
      console.log("SAVE_PAINTING_TITLE in actions")
      console.log("...in actions state", state)
      console.log("...in actions action", action)
      return (
        action
      )
    default:
      return state
  }
}

export default painting;