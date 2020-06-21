import React, {useContext} from 'react';

import {GlobalContext} from '../../context/global.state';

import {ReactComponent as Delete} from '../../assets/delete.svg';

import {TransactionContainer} from './transaction.styles';

const Transaction = ({transaction}) => {
    
    const {removeTransaction} = useContext(GlobalContext);
    
    return (
        <TransactionContainer type={transaction.amount < 0 ? 'expense' : 'income'} onClick={() => removeTransaction(transaction)}>
            {transaction.title} <span>{transaction.amount}$</span>
            <button>
                <Delete />
            </button>
        </TransactionContainer>
    );
};

export default Transaction;