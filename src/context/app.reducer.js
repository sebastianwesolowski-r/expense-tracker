import ActionTypes from './app.types';
import { addTransaction, addTransactionToGoal, removeTransaction, removeTransactionFromGoal, addGoal, moveGoalToAchieved } from './app.utils';

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
                selectedGoal: null,
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
        case ActionTypes.ADD_TRANSACTION_TO_GOAL:
            return {
                ...state,
                currentUser: {...state.currentUser, goals: addTransactionToGoal(state.currentUser.goals, action.payload)}
            };
        case ActionTypes.REMOVE_TRANSACTION:
            return {
                ...state,
                currentUser: {...state.currentUser, accountTransactions: removeTransaction(state.currentUser.accountTransactions, action.payload)}
            };
        case ActionTypes.REMOVE_TRANSACTION_FROM_GOAL:
            return {
                ...state,
                currentUser: {...state.currentUser, goals: removeTransactionFromGoal(state.currentUser.goals, action.payload)}
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
            };
        case ActionTypes.ADD_GOAL:
            return {
                ...state,
                currentUser: {...state.currentUser, goals: addGoal(state.currentUser.goals, action.payload)}
            };
        case ActionTypes.MOVE_GOAL_TO_ACHIEVED:
            return {
                ...state,
                currentUser: moveGoalToAchieved(state.currentUser, action.payload)
            };
        default: return state;
    };
};

export default AppReducer;