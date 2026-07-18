import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionContext);
}