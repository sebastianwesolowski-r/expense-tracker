import styled from 'styled-components';
import {themes} from '../../themes/themes';

export const BalanceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 35px;
    font-size: 19px;
    text-shadow: ${themes.effects.shadow};
`;

export const BalanceType = styled.p`
    color: ${themes.colors.darkblack};
`;

export const BalanceAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BalanceAmount = styled.p`
    color: ${themes.colors.lightblue};
`;

export const BalanceDetails = styled.p`
    color: rgba(0, 0, 0, 0.60);
    font-size: 15px;
    text-shadow: none;
    margin: 0;
    cursor: pointer;
`;

