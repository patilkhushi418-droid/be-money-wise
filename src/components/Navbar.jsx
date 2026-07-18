import { useNavigate, useLocation } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import "../App.css";



function Navbar(){


const navigate = useNavigate();

const location = useLocation();


const {darkMode,setDarkMode}=useContext(ThemeContext);




return(


<div className="navbar">



<button

className={
location.pathname === "/"
?
"nav-active"
:
""
}

onClick={()=>navigate("/")}

>

🏠

<span>
Home
</span>

</button>






<button

className={
location.pathname === "/add-transaction"
?
"nav-active"
:
""
}

onClick={()=>navigate("/add-transaction")}

>

➕

<span>
Add
</span>

</button>







<button

className={
location.pathname === "/analytics"
?
"nav-active"
:
""
}

onClick={()=>navigate("/analytics")}

>

📊

<span>
Analytics
</span>

</button>







<button

onClick={()=>setDarkMode(!darkMode)}

>

{darkMode ? "☀️" : "🌙"}

<span>
Theme
</span>

</button>





</div>


);


}


export default Navbar;