export const addTransaction = (userTransactions, newTransaction) => {
    userTransactions.push(newTransaction);
    return userTransactions;
};

export const addTransactionToGoal = (userGoals, newGoalTransaction) => {
    const {selectedGoal, transaction} = newGoalTransaction;
    const goalToUpdate = userGoals.find(goal => goal.id === selectedGoal.id);
    goalToUpdate.goalTransactions.push(transaction);
    return userGoals;
};

export const removeTransactionFromGoal = (userGoals, goalTransactionToRemove) => {
    const {selectedGoal, transaction} = goalTransactionToRemove;
    const goalToUpdate = userGoals.find(goal => goal.id === selectedGoal.id);
    const findTransaction = goalToUpdate.goalTransactions.find(goalTransaction => goalTransaction.id === transaction.id);
    const indexOfTransaction = goalToUpdate.goalTransactions.indexOf(findTransaction);
    goalToUpdate.goalTransactions.splice(indexOfTransaction);
    return userGoals;
};

export const removeTransaction = (userTransactions, transactionToRemove) => {
    const findTransaction = userTransactions.find(transaction => transaction.id === transactionToRemove.id);
    const indexOfTransaction = userTransactions.indexOf(findTransaction);
    userTransactions.splice(indexOfTransaction);
    return userTransactions;
};

export const addGoal = (userGoals, goal) => {
    userGoals.push(goal);
    return userGoals;
};

export const moveGoalToAchieved = (currentUser, goal) => {
    const findGoal = currentUser.goals.find(usergoal => usergoal.id === goal.id);
    const indexOfGoal = currentUser.goals.indexOf(findGoal);
    currentUser.goals.splice(indexOfGoal);
    currentUser.achievedGoals.push(goal);
    return currentUser;
};