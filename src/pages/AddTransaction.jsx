import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext.jsx";
import "../App.css";

function AddTransaction() {

  const {
    transactions,
    setTransactions
  } = useContext(TransactionContext);


  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!category || !amount) return;


    const newTransaction = {

      id: Date.now(),

      category,

      description,

      amount: Number(amount),

      type,

      date: new Date().toLocaleDateString()

    };


    setTransactions([
      ...transactions,
      newTransaction
    ]);


    setCategory("");
    setDescription("");
    setAmount("");
    setType("Expense");

  };


  return (

    <div className="form-page">

      <div className="form-card">

        <h1>
          Add Transaction 💜
        </h1>


        <form onSubmit={handleSubmit}>


          <div className="input-group">

            <label>
              Category
            </label>

            <input
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              placeholder="Food, Travel..."
            />

          </div>



          <div className="input-group">

            <label>
              Description
            </label>

            <textarea

              value={description}

              onChange={(e)=>setDescription(e.target.value)}

              placeholder="What was this for?"

            />

          </div>




          <div className="input-group">

            <label>
              Amount
            </label>

            <input

              type="number"

              value={amount}

              onChange={(e)=>setAmount(e.target.value)}

              placeholder="Enter amount"

            />

          </div>




          <div className="radio-buttons">


            <label>

              <input

                type="radio"

                value="Income"

                checked={type==="Income"}

                onChange={(e)=>setType(e.target.value)}

              />

              Income

            </label>




            <label>

              <input

                type="radio"

                value="Expense"

                checked={type==="Expense"}

                onChange={(e)=>setType(e.target.value)}

              />

              Expense

            </label>


          </div>




          <button
            className="save-btn"
            type="submit"
          >

            Save Transaction

          </button>



        </form>


      </div>


    </div>

  );

}


export default AddTransaction;