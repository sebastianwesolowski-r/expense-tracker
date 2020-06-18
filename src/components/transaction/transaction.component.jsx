import React from 'react';

import {TransactionContainer} from './transaction.styles';

const Transaction = ({transaction}) => {
    return (
        <TransactionContainer type={transaction.amount < 0 ? 'expense' : 'income'}>
            {transaction.title} <span>{transaction.amount}$</span>
        </TransactionContainer>
    );
};

export default Transaction;