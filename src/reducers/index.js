import { combineReducers } from 'redux';
import routes from './routes_reducer';
import auth from './authentication_reducer';

const rootReducer = combineReducers({
    routes,
    auth
});

export default rootReducer;
