export const addTransaction = (userTransactions, newTransaction) => {
    userTransactions.push(newTransaction);
    return userTransactions;
};

export const removeTransaction = (userTransactions, transactionToRemove) => {
    const filteredTransactions = userTransactions.filter(transaction => transaction.id !== transactionToRemove.id);
    return filteredTransactions;
};