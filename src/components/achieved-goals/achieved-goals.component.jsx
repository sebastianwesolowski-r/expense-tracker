import React from 'react';

import {ReactComponent as Close} from '../../assets/close.svg';

import CustomPopup from '../custom-popup/custom-popup.styles';
import {AchievedGoal} from './achieved-goals.styles';

const AchievedGoals = ({achievedGoals, closePopup}) => (
    <CustomPopup>
        <Close onClick={() => closePopup()}/>
        {
            achievedGoals.length !== 0 ? (
                <>
                    <h3>Your achieved goals</h3>
                    <ul>
                        {
                            achievedGoals.map(goal => (
                                <AchievedGoal key={goal.id}>
                                    {goal.title}
                                    <span>{goal.goalTarget}$</span>
                                </AchievedGoal>
                            ))
                        }
                    </ul>
                </>
            ) : (
                <>
                    <p>You don't have any goals yet</p>
                    <p>Click the button below to add one</p>
                </>
            )
        }
    </CustomPopup>
);

export default AchievedGoals;