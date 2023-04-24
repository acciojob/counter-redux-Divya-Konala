import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";


const App = () => {
  const count=useSelector((state)=>state.count)
  const dispatch=useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button className="increment" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button className="decrement" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default App