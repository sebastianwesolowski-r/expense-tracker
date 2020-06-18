import React from 'react';

import {ReactComponent as Close} from '../../assets/close.svg';

import CustomPopup from '../custom-popup/custom-popup.styles';
import Transaction from '../transaction/transaction.component';

const TransactionHistory = ({closePopup, history}) => (
    <CustomPopup>
        <Close onClick={() => closePopup()}/>
        <h3>History</h3>
        <ul>
            {
                history.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))
            }
        </ul>
    </CustomPopup>
);

export default TransactionHistory;