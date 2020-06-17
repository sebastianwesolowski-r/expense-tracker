import React, {useState, useContext} from 'react';

import {GlobalContext} from '../context/global.state';

import SignOut from '../components/sign-out/sign-out.component';
import Balance from '../components/balance/balance.component';
import CustomBtn from '../components/custom-button/custom-button.component';
import GoalsPanel from '../components/goals-panel/goals-panel.component';

import PageTemplate from '../components/page-template/page-template.styles';

const ProfilePage = () => {
    const {currentUser, signOut} = useContext(GlobalContext);

    const {accountBalance, email, goals} = currentUser;

    const [goal, setGoal] = useState(null);
    const [amount, setAmount] = useState(accountBalance);

    return (
        <PageTemplate>
            <SignOut userEmail={email} signOut={signOut} />
            <Balance goal={goal} amount={amount}/>
            <CustomBtn updateAmount>
                update
            </CustomBtn>
            <GoalsPanel goals={goals} />
        </PageTemplate>
    );
};

export default ProfilePage;