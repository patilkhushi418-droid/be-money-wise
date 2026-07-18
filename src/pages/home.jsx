import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">

      <div className="card">

        <span className="circle pink"></span>
        <span className="circle purple"></span>
        <span className="circle blue"></span>

        <h1>🌸 Be Money Wise</h1>

        <h2>Welcome!</h2>

        <p>
          Track your money, build better habits,
          and achieve your financial goals with
          a calm and beautiful finance journal.
        </p>

        <button onClick={() => navigate("/dashboard")}>
          ✨ Get Started
        </button>

      </div>

    </div>
  );
}

export default Home;