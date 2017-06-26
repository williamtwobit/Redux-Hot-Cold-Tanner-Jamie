export const ADD_GUESS = "ADD_GUESS";
export const addGuess = number => ({
  type: ADD_GUESS,
  number
});

export const SET_FEEDBACK = "SET_FEEDBACK";
export const setFeedback = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const TOGGLE_INSTRUCTIONS = "TOGGLE_INSTRUCTIONS";
export const toggleInstructions = {
  type: TOGGLE_INSTRUCTIONS
}

export const NEW_GAME = "NEW_GAME";
export const newGame = () => ({
  type: NEW_GAME,
  number: Math.round(Math.random() * 100)
});
