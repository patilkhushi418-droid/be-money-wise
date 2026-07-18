import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from "recharts";

import { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";


function ExpenseChart(){


  const { transactions } = useContext(TransactionContext);



  const categoryData = {};



  transactions.forEach((item)=>{


    if(item.type==="Expense"){


      if(categoryData[item.category]){

        categoryData[item.category] += Number(item.amount);

      }

      else{

        categoryData[item.category] = Number(item.amount);

      }


    }


  });




  const data = Object.keys(categoryData).map((category)=>({

    name:category,

    value:categoryData[category]

  }));





  return(


    <div className="chart-card">


      <h2>
        Spending by Category
      </h2>



      {

      data.length===0

      ?

      <p>
        Add expenses to see chart 📊
      </p>


      :

      <PieChart width={350} height={350}>


        <Pie

        data={data}

        dataKey="value"

        nameKey="name"

        cx="50%"

        cy="50%"

        outerRadius={120}

        >


        {

          data.map((entry,index)=>(

            <Cell key={index}/>

          ))

        }


        </Pie>


        <Tooltip/>

        <Legend/>


      </PieChart>


      }



    </div>


  );


}


export default ExpenseChart;