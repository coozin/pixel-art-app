import { combineReducers } from 'redux';
import painting from './painting';

let paintings = JSON.parse(localStorage.getItem("paintings"))

if (!paintings) {
  localStorage.setItem("paintings", JSON.stringify([]))
}

export default combineReducers({
  painting
})