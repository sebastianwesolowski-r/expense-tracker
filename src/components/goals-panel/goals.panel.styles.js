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
    font-size: 19px;
    margin-bottom: 45px;
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