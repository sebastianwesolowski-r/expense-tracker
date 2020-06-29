import styled from 'styled-components';

import {themes} from '../../themes/themes';

export const TransactionContainer = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 35px;
    font-size: 16px;
    padding: 0 10px;
    margin-bottom: 20px;
    border: 1px solid ${themes.colors.lightblue};
    border-right: 6px solid ${props => props.type === 'expense' ? themes.colors.darkred : themes.colors.leaf};
    border-radius: 4px;
    cursor: pointer;
    transition-duration: 200ms;
    button {
        display: none;
        position: absolute;
        left: 30px;
        padding-bottom: 45px;
        border: none;
        background: none;
        outline: none;
    }
    &:hover {
        button {
            display: block;
        }
    }
    &:active {
        background-color: ${themes.colors.darkred};
    }
`;