import "../App.css";

import { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext.jsx";

import ExpenseChart from "../components/ExpenseChart.jsx";

function Analytics() {
  const { transactions } = useContext(TransactionContext);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyExpenses = transactions.filter((item) => {
    if (item.type !== "Expense") return false;

    const date = new Date(item.date);

    return (
      date.getMonth() === currentMonth &&
      date.getFullYear() === currentYear
    );
  });

  const totalMonthlyExpense = monthlyExpenses.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  return (
    <div className="dashboard">
      <h1>📊 Money Analytics</h1>

      <div className="balance-card">
        <div className="balance-icon">📅</div>

        <div className="balance-info">
          <p>This Month's Spending</p>
          <h2>₹{totalMonthlyExpense}</h2>
        </div>
      </div>

      <ExpenseChart />

      <div className="transaction-section">
        <h2>Monthly Expenses</h2>

        {monthlyExpenses.length === 0 ? (
          <p>No expenses this month 🎉</p>
        ) : (
          monthlyExpenses.map((item) => (
            <div className="transaction-card" key={item.id}>
              <div>
                <h3>{item.category}</h3>
                <p>{item.description}</p>
                <small>{item.date}</small>
              </div>

              <h3 className="money-expense">
                - ₹{item.amount}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Analytics;