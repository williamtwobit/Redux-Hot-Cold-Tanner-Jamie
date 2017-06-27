import React from 'react';
import{connect} from 'react-redux';
import * as actions from '../actions';
import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        this.props.dispatch(actions.newGame());
    }

    onInfo(event) {
        event.preventDefault();
        this.props.dispatch(actions.toggleInstructions);
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.onInfo(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};
const mapStateToProps = (state) => ({
    instructions: state.instructions
});

export default connect(mapStateToProps)(TopNav);
