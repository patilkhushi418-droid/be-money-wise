import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

import { TransactionContext } from "../context/TransactionContext.jsx";

function Dashboard() {
  const navigate = useNavigate();

  const {
    transactions,
    deleteTransaction,
    income,
    expense,
    balance,
  } = useContext(TransactionContext);

  return (
    <div className="dashboard">
      <h1>Be Money Wise 💜</h1>

      <div className="balance-card">
        <div className="balance-icon">💰</div>

        <div className="balance-info">
          <p>Total Balance</p>
          <h2>₹{balance}</h2>
        </div>
      </div>

      <div className="summary-container">
        <div className="summary-card income">
          <h3>🟢 Income</h3>
          <h2>₹{income}</h2>
        </div>

        <div className="summary-card expense">
          <h3>🔴 Expense</h3>
          <h2>₹{expense}</h2>
        </div>
      </div>

      <button
        className="primary-btn"
        onClick={() => navigate("/add-transaction")}
      >
        ➕ Add Transaction
      </button>

      <div className="transaction-section">
        <h2>Recent Transactions 📜</h2>

        {transactions.length === 0 ? (
          <p>No transactions yet</p>
        ) : (
          transactions.map((item) => (
            <div className="transaction-card" key={item.id}>
              <div>
                <h3>{item.category}</h3>
                <p>{item.description}</p>
                <small>{item.date}</small>
              </div>

              <div className="transaction-right">
                <h3
                  className={
                    item.type === "Income"
                      ? "money-income"
                      : "money-expense"
                  }
                >
                  {item.type === "Income" ? "+" : "-"}₹{item.amount}
                </h3>

                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;