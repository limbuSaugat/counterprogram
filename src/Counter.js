import React, {useState} from "react";
function Counter(){
  const [inc, setInc] = useState(0);
  const[isdarkmode, setIsdarkmode] = useState(false);
  

  const updateIncrease =()=> {
        setInc(inc+1);
    }
  const updateReset =()=> {
      setInc(0);
    }
  const updateDecrease =()=> {
      setInc(inc-1);
    }
  
  const updateDarkMode =()=> {
      setIsdarkmode(!isdarkmode);
  }

    return(
      <>
        <header className={`myheader ${isdarkmode ? "dark" : ""}`}>

            
            <label className="mylabel">{inc}</label>
            <div className="container">
             <button className="mybut" onClick={updateIncrease}>Increase</button>
             <button className="mybut" onClick={updateReset}>Reset</button>
             <button className="mybut" onClick={updateDecrease}>Decrease</button>
             
      
             
            </div>
            
        </header>
        <button className="mydark" onClick={updateDarkMode}>Dark Mode</button>

        
        
        </>
    );
}
export default Counter