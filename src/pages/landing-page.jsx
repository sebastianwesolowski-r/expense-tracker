import React, {useState} from 'react';

import SignIn from '../components/sign-in/sign-in.component';
import SignUp from '../components/sign-up/sign-up.component';

import PageTemplate from '../components/page-template/page-template.styles';

const LandingPage = () => {
    const [account, setAccount] = useState(true);
    const switchPage = () => setAccount(!account);
    return (
        <PageTemplate>
            {
                account ? (
                    <SignIn switchPage={switchPage} />
                ) : (
                    <SignUp switchPage={switchPage} />
                )
            }
        </PageTemplate>
    );
};

export default LandingPage;