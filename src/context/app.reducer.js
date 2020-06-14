import ActionTypes from './app.types';

const AppReducer = (state, action) => {
    switch(action.type) {
        case ActionTypes.EMAIL_SIGN_IN_START:
        case ActionTypes.SIGN_UP_START:
            return {
                ...state,
                isProcessing: true
            };
        case ActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                isProcessing: false
            };
        case ActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isProcessing: false,
                error: null
            };
        case ActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case ActionTypes.SIGN_IN_FAILURE:
        case ActionTypes.SIGN_OUT_FAILURE:
        case ActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isProcessing: false,
                error: action.payload
            };
        default: return state;
    };
};

export default AppReducer;