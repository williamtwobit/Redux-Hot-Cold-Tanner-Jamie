export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (number) => ({
  type: ADD_GUESS,
  number
});

export const SET_FEEDBACK = 'SET_FEEDBACK';
export const setFeedback = (feedback) => ({
  type: SET_FEEDBACK,
  feedback
});

export const SET_SECRET_NUMBER = 'SET_SECRET_NUMBER';
export const setSecretNumber = {
  type: SET_SECRET_NUMBER,
  number: Math.round(Math.random() * 100)
};

export const NEW_GAME = 'NEW_GAME';
export const newGame = {
  type: NEW_GAME,
  //need to return initial state
}


// const state = {
//   userGuesses: [],
//   secretNum: Math.random(),
//   feedback: 'Make your guess!',
//   guessCount: 0
// }