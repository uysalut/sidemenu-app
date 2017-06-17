import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_REQUEST,
    CHANGE_EMAIL
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    user: null,
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            };
        case UNAUTH_USER:
            return INITIAL_STATE;
        case CHANGE_EMAIL:
            return { ...state, user: action.payload };
        case AUTH_REQUEST:
            return { ...state, loading: true };
        default:
            return state;
    }
};
