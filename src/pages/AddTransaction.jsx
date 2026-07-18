import "../App.css";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TransactionContext } from "../context/TransactionContext.jsx";

function AddTransaction() {
  const { addTransaction } = useContext(TransactionContext);

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    amount: "",
    category: "Food",
    date: "",
    description: "",
    type: "Expense",
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const saveTransaction = () => {
    if (!transaction.amount) {
      alert("Please enter amount");
      return;
    }

    addTransaction(transaction);

    navigate("/");
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>➕ Add Transaction</h1>

        <div className="input-group">
          <label>💰 Amount</label>

          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={transaction.amount}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>🏷 Category</label>

          <select
            name="category"
            value={transaction.category}
            onChange={handleChange}
          >
            <option>Food</option>
            <option>Shopping</option>
            <option>Travel</option>
            <option>Education</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Other</option>
          </select>
        </div>

        <div className="input-group">
          <label>📅 Date</label>

          <input
            type="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>📝 Description</label>

          <textarea
            rows="4"
            name="description"
            placeholder="Write something..."
            value={transaction.description}
            onChange={handleChange}
          />
        </div>

        <div className="radio-buttons">
          <label>
            <input
              type="radio"
              name="type"
              value="Income"
              checked={transaction.type === "Income"}
              onChange={handleChange}
            />
            Income
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="Expense"
              checked={transaction.type === "Expense"}
              onChange={handleChange}
            />
            Expense
          </label>
        </div>

        <button
          className="save-btn"
          onClick={saveTransaction}
        >
          ✨ Save Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function AddTransaction() {
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
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

      <form onSubmit={addTransaction}>
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