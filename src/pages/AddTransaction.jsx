import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";

function AddTransaction() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([...transactions, newTransaction]);

    setText("");
    setAmount("");
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Transaction name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;