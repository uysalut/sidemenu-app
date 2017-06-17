import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import { Actions } from 'react-native-router-flux';
import { logOutUser } from '../actions';

class SideBarContainer extends Component {
    handleLogOut() {
        this.props.logOutUser();
        Actions.auth();
    }

    render() {
        return (
            <SideBar {...this.props} onLogOut={this.handleLogOut.bind(this)} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    };
};

export default connect(mapStateToProps, { logOutUser })(SideBarContainer);
