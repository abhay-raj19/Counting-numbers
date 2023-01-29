
import React,{useState} from "react";

function App() {
  const [Count,setCount] = useState(0);
//console.log(useState(13)
  function increase() {
    setCount(Count+1);
  }
  function decrease() {
    setCount(Count-1);
  }
  return(
    <div className="container">
    <h1>{Count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  );
}
export default App;
