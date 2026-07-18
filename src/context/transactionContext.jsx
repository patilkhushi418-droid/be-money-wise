import { createContext, useEffect, useState } from "react";


export const TransactionContext = createContext();



export function TransactionProvider({ children }) {


  const [transactions, setTransactions] = useState(() => {

    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];

  });





  // Save data whenever transactions change

  useEffect(() => {

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );

  }, [transactions]);







  // Add Transaction

  const addTransaction = (transaction) => {


    setTransactions([

      ...transactions,

      {
        ...transaction,
        id: Date.now()
      }

    ]);


  };








  // Delete Transaction

  const deleteTransaction = (id) => {


    const updatedTransactions = transactions.filter(

      (transaction) => transaction.id !== id

    );


    setTransactions(updatedTransactions);


  };









  // Calculate Income

  const income = transactions

    .filter(

      (transaction) => transaction.type === "Income"

    )

    .reduce(

      (total, transaction) =>
        total + Number(transaction.amount),

      0

    );








  // Calculate Expense

  const expense = transactions

    .filter(

      (transaction) => transaction.type === "Expense"

    )

    .reduce(

      (total, transaction) =>
        total + Number(transaction.amount),

      0

    );








  // Calculate Balance

  const balance = income - expense;









  return (

    <TransactionContext.Provider

      value={{

        transactions,

        addTransaction,

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