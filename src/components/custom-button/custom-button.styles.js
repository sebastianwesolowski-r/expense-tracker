import styled, {css} from 'styled-components';

import {themes} from '../../themes/themes';

const updateAmountStyles = css`
    width: 190px;
    background: transparent;
    font-size: 15px;
    color: ${themes.colors.leaf};
    border: 2px solid ${themes.colors.leaf};
    margin: 50px 0;
    transition-duration: 350ms;
    &:hover {
        filter: none;
        box-shadow: inset 250px 0 0 0 #EFEFEF;
    }
`;

const addGoalStyles = css`
    width: 55px;
    height: 55px;
    position: absolute;
    bottom: 15px;
    right: 25px;
    background-color: ${themes.colors.lightblue};
    opacity: 0.8;
`

const getButtonStyles = props => {
    if(props.updateAmount) {
        return updateAmountStyles;
    }
    if(props.addGoal) {
        return addGoalStyles;
    }
};

export const CustomBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 155px;
    height: 35px;
    color: #ffffff;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.googleSignIn ? themes.colors.googleblue : themes.colors.darkblack};
    outline: none;
    margin-top: 25px;
    cursor: pointer;
    transition-duration: 200ms;
    &:hover {
        filter: brightness(1.2);
    }
    &:active {
        filter: brightness(1.6);
    }

    ${getButtonStyles}
`;