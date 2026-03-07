import React from 'react'

const App = () => {

  function calculator(){
     const [input, setInput] = useState("");

     const calculate = ()=>{
setInput(eval(input));
}

  }

  return (
    <div>
      <input value={input} readOnly/>

      <button onClick={() => setInput(input+"1")}>1</button>
      <button onClick={() => setInput(input+"2")}>2</button>
      <button onClick={() => setInput(input+"+")}>+</button>

      <button onClick={calculate}>=</button>

      <button onClick={() => setInput}>Clear</button>


    </div>
  );
}

export default App