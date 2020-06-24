import ActionTypes from './app.types';
import { addTransaction, removeTransaction } from './app.utils';

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
                error: null,
                history: action.payload.accountTransactions
            };
        case ActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null,
                goalId: null,
                history: null
            };
        case ActionTypes.SIGN_IN_FAILURE:
        case ActionTypes.SIGN_OUT_FAILURE:
        case ActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                isProcessing: false,
                error: action.payload
            };
        case ActionTypes.ADD_TRANSACTION:
            return {
                ...state,
                currentUser: {...state.currentUser, accountTransactions: addTransaction(state.currentUser.accountTransactions, action.payload)}
            };
        case ActionTypes.REMOVE_TRANSACTION:
            return {
                ...state,
                currentUser: {...state.currentUser, accountTransactions: removeTransaction(state.currentUser.accountTransactions, action.payload)}
            };
        case ActionTypes.SELECT_GOAL:
            return {
                ...state,
                selectedGoal: action.payload
            };
        case ActionTypes.SET_HISTORY:
            return {
                ...state,
                history: action.payload
            }
        default: return state;
    };
};

export default AppReducer;