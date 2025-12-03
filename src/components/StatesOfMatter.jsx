import React, { useEffect, useState } from 'react'
import ice from "../assets/ice.jpg";
import water from "../assets/water.jpg";
import watervapour from "../assets/watervapour.jpg"
import ".//StatesOfMatter.css"


const StatesOfMatter = () => {
  const [temperature,setTemperature]=useState(24);
  const [state,setState]=useState({state:"liquid",Image:water});

  const IncreaseTemp=()=>{
    setTemperature(temperature+10);
  }
   const DecreaseTemp=()=>{
    setTemperature(temperature-10);
  }

  const ResetTemp=()=>{
    setTemperature(24);
  }
  const currentState=()=>{
    if(temperature>100){
      setState({state:"gas",Image:watervapour});
    }
    else if(temperature<0){
      setState({state:"solid",Image:ice});
    }else{
      setState({state:"liquid",Image:water});
    }
  };
  useEffect(()=>{
    currentState();
   
  }, [temperature]);


  return (
    <><div className='container'>
      <div className='background'>
    <div>
      Temperature  {temperature} 
    </div>
     <img src={state.Image} alt={state.state} height={200} width={200} />
    <div className="button-container">
        <button onClick={() => setTemperature(temperature + 10)}>Heat</button>
        <button onClick={() => setTemperature(temperature - 10)}>Cool</button>
        <button onClick={() => setTemperature(24)}>Reset</button>
      </div>

              <div>State {state.state} </div>
</div>
</div>
    </>
  );
}

export default StatesOfMatter
