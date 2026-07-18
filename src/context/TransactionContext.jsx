import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  const income = transactions
    .filter((item) => item.type === "Income")
    .reduce(
      (total, item) => total + Number(item.amount),
      0
    );

  const expense = transactions
    .filter((item) => item.type === "Expense")
    .reduce(
      (total, item) => total + Number(item.amount),
      0
    );

  const balance = income - expense;

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        deleteTransaction,
        income,
        expense,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}