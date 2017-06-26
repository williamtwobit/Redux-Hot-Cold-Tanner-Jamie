import './reset.css';
import {addGuess, setFeedback, toggleInstructions, newGame} from './actions/index';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

import './reset.css';
import './index.css';

store.dispatch(newGame());
console.log(store.getState());
store.dispatch(addGuess(24));
store.dispatch(addGuess(12));
store.dispatch(addGuess(89));
store.dispatch(setFeedback("BEANS"));
store.dispatch(toggleInstructions);
console.log(store.getState());
store.dispatch(newGame());
console.log(store.getState());

import Game from './components/game';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
