import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_REQUEST,
    CHANGE_EMAIL
} from '../actions/types';
// import axios from 'axios';

export const logInUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: AUTH_REQUEST });
        // TODO: Promise will be replaced with API request in real app
        // axios.post('http://www.api.com/auth')
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({ type: AUTH_USER, payload: email });
                resolve();
            }, 100);
        });
    };
};

export const changeEmail = (email) => {
    return (dispatch) => {
        // TODO: Promise will be replaced with API request in real app
        // axios.post('http://www.api.com/email', { email} )
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch({ type: CHANGE_EMAIL, payload: email });
                resolve();
            }, 100);
        });
    };
}

export const logOutUser = () => {
    return { type: UNAUTH_USER };
}