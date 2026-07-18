import React from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionList() {
  const { transactions, setTransactions } = useTransactions();

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p>No transactions added yet</p>
      ) : (
        transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction-card"
          >
            <div>
              <h3>{transaction.text}</h3>
              <p>
                ₹ {Math.abs(transaction.amount)}
              </p>
            </div>

            <button
              onClick={() =>
                deleteTransaction(transaction.id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;