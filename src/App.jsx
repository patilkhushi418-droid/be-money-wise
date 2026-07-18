import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";

import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Analytics from "./pages/Analytics";

import Navbar from "./components/Navbar";

import { ThemeContext } from "./context/ThemeContext";



function App(){


const {darkMode}=useContext(ThemeContext);



return(


<div className={darkMode ? "dark" : ""}>


<BrowserRouter>


<Routes>


<Route
path="/"
element={<Dashboard/>}
/>



<Route
path="/add-transaction"
element={<AddTransaction/>}
/>



<Route
path="/analytics"
element={<Analytics/>}
/>



</Routes>



<Navbar/>


</BrowserRouter>


</div>


);


}


export default App;