import {ADD_GUESS, SET_FEEDBACK, TOGGLE_INSTRUCTIONS, NEW_GAME} from '../actions';

//used in reducers/index.js
export const initialState = {
  userGuesses: [],
  secretNum: Math.round(Math.random() * 100),
  feedback: 'Make your guess!',
  instructions: false
};

export const reducer = (state=initialState, action) => {
  switch (action.type){
    case ADD_GUESS:
      return Object.assign({}, state, {userGuesses: [...state.userGuesses, action.number]})
    case SET_FEEDBACK:
      return Object.assign({}, state, {feedback: action.feedback})
    case TOGGLE_INSTRUCTIONS:
      return Object.assign({}, state, {instructions: !state.instructions})
    case NEW_GAME:
      return Object.assign({}, initialState, {secretNum: action.number})
    default:
      return state;
  }
};