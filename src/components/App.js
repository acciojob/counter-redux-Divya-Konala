
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App
