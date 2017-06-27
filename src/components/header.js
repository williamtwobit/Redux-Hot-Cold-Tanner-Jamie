import React from 'react';
import{connect} from 'react-redux';
import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export class Header extends React.Component  {
    render() {
        let infoModal;
        if (this.props.instructions) {
            infoModal = <InfoModal />;
        }

        return (
            <header>
                <TopNav />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = (state) => ({
    instructions: state.instructions
});

export default connect(mapStateToProps)(Header)
