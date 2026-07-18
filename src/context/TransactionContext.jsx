import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {

  const [transactions, setTransactions] = useState(() => {

    const saved = localStorage.getItem("transactions");

    return saved ? JSON.parse(saved) : [];

  });


  const updateTransactions = (data) => {

    setTransactions(data);

    localStorage.setItem(
      "transactions",
      JSON.stringify(data)
    );

  };


  const deleteTransaction = (id) => {

    const updated = transactions.filter(
      (transaction) => transaction.id !== id
    );

    updateTransactions(updated);

  };


  const income = transactions
    .filter(item => item.type === "Income")
    .reduce(
      (total,item)=> total + Number(item.amount),
      0
    );


  const expense = transactions
    .filter(item => item.type === "Expense")
    .reduce(
      (total,item)=> total + Number(item.amount),
      0
    );


  const balance = income - expense;


  return (

    <TransactionContext.Provider

      value={{

        transactions,

        setTransactions: updateTransactions,

        deleteTransaction,

        income,

        expense,

        balance

      }}

    >

      {children}

    </TransactionContext.Provider>

  );

}


export function useTransactions(){

  return useContext(TransactionContext);

}