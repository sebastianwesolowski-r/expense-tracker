import styled from 'styled-components';

import {themes} from '../../themes/themes';

export const TransactionContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 35px;
    font-size: 16px;
    padding-left: 10px;
    padding-right: 20px;
    margin-bottom: 20px;
    border: 2px solid ${themes.colors.lightblue};
    border-right: 10px solid ${props => props.type === 'expense' ? themes.colors.darkred : themes.colors.leaf};
    border-radius: 4px;
`;