import React from 'react';

import {GoalsPanelContainer, GoalsHeader, GoalsMessage, GoalsList} from './goals.panel.styles';

import Goal from '../goal/goal.component';

const GoalsPanel = ({goals, openPopup}) => (
    <GoalsPanelContainer>
        <GoalsHeader>
            Your goals
            <span onClick={() => openPopup('achievedGoals')}>Achieved</span>
        </GoalsHeader>
        {
            goals.length !== 0 ? (
                <GoalsList>
                    {
                        goals.map(goal => (
                            <Goal key={goal.id} goal={goal} />
                        ))
                    }
                </GoalsList>
            ) : (
                <GoalsMessage>
                    <p>You don't have any goals yet</p>
                    <p>Click the button below to add one</p>
                </GoalsMessage>
            )
        }
    </GoalsPanelContainer>
);

export default GoalsPanel;