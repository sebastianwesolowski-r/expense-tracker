import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {config} from './config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfile = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();
    if (!userSnapshot.exists) {
        const {email} = userAuth;
        const displayName = email.slice(0, email.indexOf('@'));
        const createdAt = new Date();
        const accountBalance = 0;
        const goals = [];
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                accountBalance,
                goals,
                ...additionalData
            });
        } catch(error) {
            alert('There was a problem: ', error.message);
        }
    }
    return userRef;
};

export default firebase;
