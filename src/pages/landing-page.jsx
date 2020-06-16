import React, {useState, useContext} from 'react';

import {GlobalContext} from '../context/global.state';

import SignIn from '../components/sign-in/sign-in.component';
import SignUp from '../components/sign-up/sign-up.component';
import OverlaySpinner from '../components/overlay-spinner/overlay-spinner.component';

import PageTemplate from '../components/page-template/page-template.styles';

const LandingPage = () => {
    const {signInWithGoogle, signInWithEmail, signUp, isProcessing} = useContext(GlobalContext);

    const [account, setAccount] = useState(true);
    const switchPage = () => setAccount(!account);
    return (
        <PageTemplate>
            {
                isProcessing ? (
                    <OverlaySpinner />
                ) : null
            }
            {
                account ? (
                    <SignIn switchPage={switchPage} signInWithGoogle={signInWithGoogle} signInWithEmail={signInWithEmail}/>
                ) : (
                    <SignUp switchPage={switchPage} signUp={signUp}/>
                )
            }
        </PageTemplate>
    );
};

export default LandingPage;