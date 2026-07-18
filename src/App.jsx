import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Dashboard from "./pages/Dashboard.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import Analytics from "./pages/Analytics.jsx";

import Navbar from "./components/Navbar.jsx";

import { ThemeContext } from "./context/ThemeContext.jsx";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/add-transaction"
            element={<AddTransaction />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />
        </Routes>

        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;