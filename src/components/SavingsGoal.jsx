import "../App.css";


function SavingsGoal(){

  const goals = [

    {
      name:"New Laptop 💻",
      saved:30000,
      target:70000
    },

    {
      name:"Emergency Fund 🏦",
      saved:8000,
      target:20000
    }

  ];



  return(

    <div className="savings-section">


      <h2>
        🎯 Savings Goals
      </h2>



      {

      goals.map((goal,index)=>{


        const percentage =
        (goal.saved / goal.target) * 100;



        return(

          <div 
          className="goal-card"
          key={index}
          >


            <div className="goal-header">


              <h3>
                {goal.name}
              </h3>


              <span>
                {Math.round(percentage)}%
              </span>


            </div>





            <p>
              ₹{goal.saved} / ₹{goal.target}
            </p>





            <div className="progress-bar">


              <div

              className="progress-fill"

              style={{
                width:`${percentage}%`
              }}

              >

              </div>


            </div>



          </div>


        )


      })

      }



    </div>

  );


}


export default SavingsGoal;