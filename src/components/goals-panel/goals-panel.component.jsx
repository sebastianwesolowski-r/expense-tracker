import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const GoalsPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${themes.colors.darkblack};
    text-shadow: ${themes.effects.shadow};
`;

const GoalsHeader = styled.p`
    font-size: 19px;
    margin-bottom: 45px;
`;

const GoalsMessage = styled.div`
    text-align: center;
    font-size: 16px;
    margin: 0;
`

const GoalsPanel = ({goals}) => {
    return(
    <GoalsPanelContainer>
        <GoalsHeader>Your Goals</GoalsHeader>
        {
            goals.length !== 0 ? (
                <div></div>
            ) : (
                <GoalsMessage>
                    <p>You don't have any goals yet</p>
                    <p>Click the button below to add one</p>
                </GoalsMessage>
            )
        }
    </GoalsPanelContainer>
);
};

export default GoalsPanel;