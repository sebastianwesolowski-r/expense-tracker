import styled from 'styled-components';

import {themes} from '../../themes/themes';

export const GoalContainer = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 120px;
    background-color: ${props => props.selectedGoal && props.id === props.selectedGoal.id ? '#BAC7E8' : '#FFFFFF'};
    font-size: 16px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0 35px;
    margin-bottom: 20px;
    transition-duration: 250ms;
    cursor: pointer;
    &:hover {
        filter: brightness(0.95);
    }
`;

export const GoalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    span {
        color: ${themes.colors.lightblue};
    }
`;

export const GoalSlider = styled.input`
    width: 100%;
    height: 2px;
    margin-bottom: 10px;
    outline: none;
    &::-webkit-slider-thumb {
        width: 6px;
        height: 6px;
    }
`;

export const GoalAmounts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 7px;
`;