import React, {useState} from "react";
function Counter(){
  const [inc, setInc] = useState(0);
  

  const updateIncrease =()=> {
        setInc(inc+1);
    }
  const updateReset =()=> {
      setInc(0);
    }
  const updateDecrease =()=> {
      setInc(inc-1);
    }

    return(
        <header className="myheader">
            
            <label className="mylabel">{inc}</label>
            <div className="container">
             <button className="mybut" onClick={updateIncrease}>Increase</button>
             <button className="mybut" onClick={updateReset}>Reset</button>
             <button className="mybut" onClick={updateDecrease}>Decrease</button>
             
      
             
            </div>
          
        </header>
    );
}
export default Counter