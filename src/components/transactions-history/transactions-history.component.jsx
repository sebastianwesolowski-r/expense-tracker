import React from 'react';

import {ReactComponent as Close} from '../../assets/close.svg';

import {IncomeExpenseContainer, Income, Expense} from './transaction-history.styles';

import CustomPopup from '../custom-popup/custom-popup.styles';
import Transaction from '../transaction/transaction.component';

const TransactionHistory = ({closePopup, history}) => {

    const amounts = history.map(transaction => transaction.amount);

    const income = amounts.filter(amount => amount > 0).reduce((acc, amount) => (acc += amount), 0).toFixed(2);
    const expense = (amounts.filter(amount => amount < 0).reduce((acc, amount) => (acc += amount), 0) * -1).toFixed(2);

    return (
        <CustomPopup>
            <Close onClick={() => closePopup()}/>
            <h3>History</h3>
            <IncomeExpenseContainer>
                <Income>
                    Income <span>{income}$</span>
                </Income>
                <Expense>
                    Expense <span>{expense}$</span>
                </Expense>
            </IncomeExpenseContainer>
            <ul>
                {
                    history.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
            </ul>
        </CustomPopup>
    );
};

export default TransactionHistory;