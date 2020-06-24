import React from 'react';

import {BalanceContainer, BalanceType, BalanceAmountContainer, BalanceAmount, BalanceDetails} from './balance.styles';

const Balance = ({selectedGoal, amount, openPopup}) => {
    return (
        <BalanceContainer>
            <BalanceType>
                {
                    selectedGoal ? (
                        'Current balance'
                    ) : (
                        'Cash available'
                    )
                }
            </BalanceType>
            <BalanceAmountContainer>
                <BalanceAmount>
                    $ {amount}
                </BalanceAmount>
                <BalanceDetails onClick={() => openPopup('transactionHistory')}>
                    details
                </BalanceDetails>
            </BalanceAmountContainer>
        </BalanceContainer>
    );
};

export default Balance;
