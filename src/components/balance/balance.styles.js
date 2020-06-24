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
    font-size: 24px;
    margin-bottom: 15px;
`;

export const BalanceDetails = styled.p`
    color: ${themes.colors.darkblack};
    font-size: 15px;
    text-shadow: none;
    margin: 0;
    cursor: pointer;
`;

