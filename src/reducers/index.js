import {ADD_GUESS, TOGGLE_INSTRUCTIONS, NEW_GAME} from '../actions';

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
      const difference = Math.abs(action.number - state.secretNum);
      let feedback;
        if(isNaN(action.number)) {
          state = Object.assign({}, state, {feedback: 'Please enter a number'});
          return state;
        } 
        
        if(action.number.toString().split('').length > 2) {
          state = Object.assign({}, state, {feedback: 'Please enter a number between 1 and 99'});
          return state;
        } 

        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

      return Object.assign({}, state, {userGuesses: [...state.userGuesses, action.number], feedback})
    case TOGGLE_INSTRUCTIONS:
      return Object.assign({}, state, {instructions: !state.instructions})
    case NEW_GAME:
      return Object.assign({}, initialState, {secretNum: action.number})
    default:
      return state;
  }
};