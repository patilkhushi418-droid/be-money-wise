import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";
import "../App.css";

function AddTransaction() {
  const { transactions, setTransactions } =
    useContext(TransactionContext);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !amount) return;

    const newTransaction = {
      id: Date.now(),
      category,
      description,
      amount: Number(amount),
      type,
      date: new Date().toLocaleDateString(),
    };

    setTransactions([
      ...transactions,
      newTransaction,
    ]);

    setCategory("");
    setDescription("");
    setAmount("");
    setType("Expense");
  };

  return (
    <div className="add-transaction">
      <h1>Add Transaction 💰</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Category (Food, Travel...)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Expense">
            Expense
          </option>

          <option value="Income">
            Income
          </option>
        </select>

        <button
          className="primary-btn"
          type="submit"
        >
          Add Transaction
        </button>

      </form>
    </div>
  );
}

export default AddTransaction;