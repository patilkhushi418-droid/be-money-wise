import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";
import "../App.css";

function TransactionList() {

  const {
    transactions,
    deleteTransaction
  } = useContext(TransactionContext);


  return (

    <div className="transaction-section">

      <h2>
        Recent Transactions 📜
      </h2>


      {
        transactions.length === 0 ? (

          <p>
            No transactions yet
          </p>

        ) : (

          transactions.map((item)=>(

            <div
              className="transaction-card"
              key={item.id}
            >

              <div>

                <h3>
                  {item.category}
                </h3>

                <p>
                  {item.description}
                </p>

                <small>
                  {item.date}
                </small>

              </div>



              <div className="transaction-right">

                <h3
                  className={
                    item.type === "Income"
                    ? "money-income"
                    : "money-expense"
                  }
                >

                  {item.type === "Income" ? "+" : "-"}
                  ₹{item.amount}

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

        )

      }


    </div>

  );

}


export default TransactionList;