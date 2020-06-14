import React, {createContext, useReducer} from 'react';
import AppReducer from './app.reducer';

import ActionTypes from './app.types';
import {auth, googleProvider, createUserProfile} from '../firebase/firebase';

const INITIAL_STATE = {
    currentUser: null,
    isProcessing: false,
    error: null
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    async function getSnapshotFromUser(userAuth) {
        try {
            const userRef = await createUserProfile(userAuth);
            const userSnapshot = await userRef.get();
            dispatch({
                type: ActionTypes.SIGN_IN_SUCCESS,
                payload: {id: userSnapshot.id, ...userSnapshot.data()}
            });
        } catch(error) {
            dispatch({
                type: ActionTypes.SIGN_IN_FAILURE,
                payload: error
            });
        }
    };

    async function signInWithGoogle() {
        try {
            const {user} = await auth.signInWithPopup(googleProvider);
            await getSnapshotFromUser(user);
        } catch(error) {
            dispatch({
                type: ActionTypes.SIGN_IN_FAILURE,
                payload: error
            });
            alert(error.message);
        }
    }

    async function signInWithEmail(userData) {
        const {email, password} = userData;
        try {
            const {user} = await auth.signInWithEmailAndPassword(email, password);
            await getSnapshotFromUser(user);
        } catch(error) {
            dispatch({
                type: ActionTypes.SIGN_IN_FAILURE,
                payload: error
            });
            alert(error.message);
        }
    }

    async function signUp(registerData) {
        const {email, password} = registerData;

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            dispatch({
                type: ActionTypes.SIGN_UP_SUCCESS
            });
            await getSnapshotFromUser(user);
        } catch(error) {
            dispatch({
                type: ActionTypes.SIGN_UP_FAILURE,
                payload: error
            });
            alert(error.message);
        }
    }

    return (
        <GlobalContext.Provider value={{
            signInWithGoogle,
            signInWithEmail,
            signUp
        }}>
            {children}
        </GlobalContext.Provider>
    );
};