import { ActionConst } from 'react-native-router-flux';

const INITIAL_STATE = {
    scene: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionConst.FOCUS:
            return { ...state, scene: action.scene };
        default:
            return state;
    }
};
