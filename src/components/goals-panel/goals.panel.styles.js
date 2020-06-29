import styled from 'styled-components';

import {themes} from '../../themes/themes';

export const GoalsPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: ${themes.colors.darkblack};
    text-shadow: ${themes.effects.shadow};
`;

export const GoalsHeader = styled.p`
    width: 100%;
    position: relative;
    font-size: 19px;
    margin-bottom: 45px;
    text-align: center;
    span {
        position: absolute;
        font-size: 13px;
        color: ${themes.colors.googleblue};
        right: 13%;
        bottom: 0;
        cursor: pointer
    }
`;

export const GoalsMessage = styled.div`
    text-align: center;
    font-size: 16px;
    margin: 0;
`

export const GoalsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
`