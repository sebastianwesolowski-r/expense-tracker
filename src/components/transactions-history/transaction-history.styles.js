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
    max-height: 65px;
    margin-bottom: 20px;
    font-size: 17px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const Income = styled.div`
    ${displayFlex};
    width: 100%;
    margin-bottom: 10px;
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