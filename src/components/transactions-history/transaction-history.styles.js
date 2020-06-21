import styled, {css} from 'styled-components';

import {themes} from '../../themes/themes';

const displayFlex = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const IncomeExpenseContainer = styled.div`
    ${displayFlex};
    flex-direction: column;
    width: 80%;
    height: 65px;
    margin-bottom: 20px;
    font-size: 17px;
`;

export const Income = styled.div`
    ${displayFlex};
    width: 100%;
    span {
        color: ${themes.colors.leaf};
    }
`;

export const Expense = styled.div`
    ${displayFlex};
    width: 100%;
    span {
        color: ${themes.colors.darkred};
    }
`;