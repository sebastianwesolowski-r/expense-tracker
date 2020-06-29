import React, {useState, useContext} from 'react';

import {ReactComponent as Plus} from '../assets/plus.svg';

import {GlobalContext} from '../context/global.state';

import SignOut from '../components/sign-out/sign-out.component';
import Balance from '../components/balance/balance.component';
import CustomBtn from '../components/custom-button/custom-button.component';
import GoalsPanel from '../components/goals-panel/goals-panel.component';
import AddGoal from '../components/add-goal/add-goal.component';
import AddTransaction from '../components/add-transaction/add-transaction.component';
import TransactionHistory from '../components/transactions-history/transactions-history.component';
import AchievedGoals from '../components/achieved-goals/achieved-goals.component';

import PageTemplate from '../components/page-template/page-template.styles';

const ProfilePage = () => {
    const {currentUser, history, selectedGoal, signOut, addTransaction, calculateTotal, addGoal} = useContext(GlobalContext);
    const {email, goals, achievedGoals} = currentUser;

    let amount = calculateTotal(history);

    const [popupType, setPopupType] = useState(null);
    const openPopup = type => setPopupType(type);
    const closePopup = () => setPopupType(null);

    const renderSwitchPopup = (popupType) => {
        switch(popupType) {
            case 'addGoal':
                return (
                    <AddGoal closePopup={closePopup} addGoal={addGoal}/>
                );
            case 'transactionHistory':
                return (
                    <TransactionHistory closePopup={closePopup} history={history}/>
                );
            case 'addTransaction':
                return (
                    <AddTransaction closePopup={closePopup} addTransaction={addTransaction} selectedGoal={selectedGoal}/>
                );
            case 'achievedGoals':
                return (
                    <AchievedGoals closePopup={closePopup}  achievedGoals={achievedGoals}/>
                )
            case null:
            default:
                return;
        }
    }

    return (
        <PageTemplate>
            <SignOut userEmail={email} signOut={signOut}/>
            <Balance selectedGoal={selectedGoal} amount={amount} openPopup={openPopup}/>
            <CustomBtn onClick={() => openPopup('addTransaction')} updateAmount>
                update
            </CustomBtn>
            <GoalsPanel goals={goals} openPopup={openPopup}/>
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