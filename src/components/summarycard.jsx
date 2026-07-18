function SummaryCard({ emoji, title, amount, bgColor }) {
  return (
    <div
      className="summary-card"
      style={{ backgroundColor: bgColor }}
    >
      <h3>
        {emoji} {title}
      </h3>

      <h2>₹{amount}</h2>
    </div>
  );
}

export default SummaryCard;