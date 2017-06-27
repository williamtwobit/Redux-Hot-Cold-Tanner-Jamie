import './reset.css';
import {addGuess, toggleInstructions, newGame} from './actions/index';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

store.dispatch(newGame());
console.log(store.getState());
store.dispatch(addGuess(24));
store.dispatch(toggleInstructions);
console.log(store.getState());
store.dispatch(addGuess('beans'));
console.log(store.getState());
store.dispatch(addGuess(898));
console.log(store.getState());
store.dispatch(newGame());
console.log(store.getState());

import Game from './components/game';

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
