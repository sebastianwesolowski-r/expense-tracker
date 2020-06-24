import React, {useContext} from 'react';

import {GlobalContext} from '../../context/global.state';

import {GoalContainer, GoalHeader, GoalSlider, GoalAmounts} from './goal.styles';

const Goal = ({goal}) => {

    const {currentUser, selectedGoal, calculateTotal, selectGoal, setHistory} = useContext(GlobalContext);

    const {id, title, goalAmount, goalTransactions} = goal;

    const chooseGoal = () => {
        if(selectedGoal) {
            selectGoal(null);
            setHistory(currentUser.accountTransactions);
        } else {
            selectGoal(goal);
            setHistory(goalTransactions);
        }
    };

    let amount = calculateTotal(goalTransactions);

    const goalPercent = (amount / goalAmount) * 100;

    return (
        <GoalContainer id={id} selectedGoal={selectedGoal} onClick={() => chooseGoal()}>
            <GoalHeader>
                {title}
                <span>{goalPercent.toFixed(0)}%</span>
            </GoalHeader>
            <GoalSlider type="range" min="1" max="100" value={`${goalPercent}`} readOnly></GoalSlider>
            <GoalAmounts>
                <span>$ {amount}</span>
                <span>$ {goalAmount}</span>
            </GoalAmounts>
        </GoalContainer>
    )
}

export default Goal;