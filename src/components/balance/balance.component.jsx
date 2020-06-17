import React from 'react';

import {BalanceContainer, BalanceType, BalanceAmountContainer, BalanceAmount, BalanceDetails} from './balance.styles';

const Balance = ({goal, amount}) => {
    return (
        <BalanceContainer>
            <BalanceType>
                {
                    goal ? (
                        'Current Balance'
                    ) : (
                        'Cash Available'
                    )
                }
            </BalanceType>
            <BalanceAmountContainer>
                <BalanceAmount>
                    $ {amount}
                </BalanceAmount>
                <BalanceDetails>
                    details
                </BalanceDetails>
            </BalanceAmountContainer>
        </BalanceContainer>
    );
};

export default Balance;
