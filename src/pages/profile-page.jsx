import React, {useState, useEffect, useContext} from 'react';

import {ReactComponent as Plus} from '../assets/plus.svg';

import {GlobalContext} from '../context/global.state';

import SignOut from '../components/sign-out/sign-out.component';
import Balance from '../components/balance/balance.component';
import CustomBtn from '../components/custom-button/custom-button.component';
import GoalsPanel from '../components/goals-panel/goals-panel.component';
import AddGoal from '../components/add-goal/add-goal.component';
import AddTransaction from '../components/add-transaction/add-transaction.component';
import TransactionHistory from '../components/transactions-history/transactions-history.component';

import PageTemplate from '../components/page-template/page-template.styles';

const ProfilePage = () => {
    const {currentUser, signOut, addTransaction} = useContext(GlobalContext);
    const {accountTransactions, email, goals} = currentUser;

    useEffect(() => {
        setAmount(calculateTotal(accountTransactions));
        setHistory(accountTransactions);
    }, [accountTransactions]);

    const calculateTotal = transactions => {
        const amounts = transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2);
        return total;
    }

    const [goal, setGoal] = useState(false);
    const [amount, setAmount] = useState(calculateTotal(accountTransactions));
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
                );
            case 'addTransaction':
                return (
                    <AddTransaction closePopup={closePopup} addTransaction={addTransaction}/>
                );
            case null:
            default:
                return;
        }
    }

    return (
        <PageTemplate>
            <SignOut userEmail={email} signOut={signOut}/>
            <Balance goal={goal} amount={amount} openPopup={openPopup}/>
            <CustomBtn onClick={() => openPopup('addTransaction')} updateAmount>
                update
            </CustomBtn>
            <GoalsPanel goals={goals}/>
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