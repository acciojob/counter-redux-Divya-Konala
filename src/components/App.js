import React, { useEffect } from "react";
import './../styles/App.css';
import {useSelector, useDispatch} from "react-redux"
import { incrementCounter,decrementCounter } from "../redux/ActionCreators";

const App = () => {
  let dispatch=useDispatch();
  const count=useSelector(state=>state.count.count);
  return <div className="App">
    <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
    {count}
    <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
  </div>
}

export default App