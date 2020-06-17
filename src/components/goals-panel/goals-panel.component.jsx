import React from 'react';
import styled from 'styled-components';

import {themes} from '../../themes/themes';

const GoalsPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${themes.colors.black};
    text-shadow: ${themes.effects.shadow};
`;

const GoalsHeader = styled.p`
    font-size: 19px;
    margin-bottom: 45px;
`;

const GoalsMessage = styled.p`
    font-size: 16px;
    margin: 0;
`

const GoalsPanel = ({goals}) => {
    console.log(goals);
    return(
    <GoalsPanelContainer>
        <GoalsHeader>Your Goals</GoalsHeader>
        {
            goals.length !== 0 ? (
                <div></div>
            ) : (
                <GoalsMessage>
                    You don't have any goals yet.
                </GoalsMessage>
            )
        }
    </GoalsPanelContainer>
);
};

export default GoalsPanel;