function BalanceCard({ balance }) {
  return (
    <div className="balance-card">

      <div className="balance-icon">
        💰
      </div>

      <div className="balance-info">
        <p>Total Balance</p>
        <h2>₹{balance}</h2>
      </div>

    </div>
  );
}

export default BalanceCard;