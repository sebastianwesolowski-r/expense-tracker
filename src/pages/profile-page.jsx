import React, {useState, useContext} from 'react';

import {ReactComponent as Plus} from '../assets/plus.svg';

import {GlobalContext} from '../context/global.state';

import SignOut from '../components/sign-out/sign-out.component';
import Balance from '../components/balance/balance.component';
import CustomBtn from '../components/custom-button/custom-button.component';
import GoalsPanel from '../components/goals-panel/goals-panel.component';
import AddGoal from '../components/add-goal/add-goal.component';
import TransactionHistory from '../components/transactions-history/transactions-history.component';

import PageTemplate from '../components/page-template/page-template.styles';

const ProfilePage = () => {
    const {currentUser, signOut} = useContext(GlobalContext);

    const {accountBalance, accountTransactions, email, goals} = currentUser;

    const [goal, setGoal] = useState(false);
    const [amount, setAmount] = useState(accountBalance);
    const [history, setHistory] = useState(accountTransactions);

    const [popupType, setPopupType] = useState(null);
    const openPopup = type => setPopupType(type);
    const closePopup = () => setPopupType(null);

    const renderSwitchPopup = (popupType) => {
        switch(popupType) {
            case 'addGoal':
                return (
                    <AddGoal closePopup={closePopup}/>
                );
            case 'transactionHistory':
                return (
                    <TransactionHistory closePopup={closePopup} history={history}/>
                )
            case null:
            default:
                return;
        }
    }

    return (
        <PageTemplate>
            <SignOut userEmail={email} signOut={signOut}/>
            <Balance goal={goal} amount={amount} openPopup={openPopup}/>
            <CustomBtn updateAmount>
                update
            </CustomBtn>
            <GoalsPanel goals={goals} />
            <CustomBtn onClick={() => openPopup('addGoal')} addGoal>
                <Plus />
            </CustomBtn>
            {
                renderSwitchPopup(popupType)
            }
        </PageTemplate>
    );
};

export default ProfilePage;