import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../actions';
import Authentication from '../components/Authentication';
import { Actions } from 'react-native-router-flux';

class AuthenticationContainer extends Component {
    handleLoginPress(email, password) {
        this.props.logInUser(email, password)
            .then(() => {
                Actions.drawer()
            });
    }

    render() {
        return (
            <Authentication {...this.props} onLoginPress={this.handleLoginPress.bind(this)} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, { logInUser })(AuthenticationContainer);
