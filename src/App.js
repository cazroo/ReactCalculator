import {useState} from "react";

const App = () => {

  const [calc, setCalc] = useState("");
  const[result, setResult] = useState("");

  const operator = ["+", "-", "*", "/"]

  const updateCalc = (value) =>{ 
    // stops user from using multiple operators after each other
    if ( operator.includes(value) && calc ==="" || operator.includes(value) && operator.includes(calc.slice(-1)) )
  { 
    return
  }

  setCalc(calc+value);
  if(!operator.includes(value)){
    setResult(eval(calc+value).toString());
  }
  
  const createNumbers = () =>{
    const Numbers = [];
    for (let i =1; i <10; i++){
      Numbers.push(
        <button onClick={()=> updateCalc(i.toString())} key={i}>(i)</button>
      )
    }
    return Numbers;
  }

  const calculate = () =>{
    setCalc(eval(calc).toString())
  }

  const del = () => {
    if(calc==""){
      return;
    }
    const value=calc.slice(0-1)

    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ""} {calc || 0}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("*") }>*</button>
      <button onClick={() => updateCalc("/")}> /</button >
        <button onClick={(del)}>DEL</button>

    </div><div className="numbers">
        {createNumbers()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>

      </div>
    </div>
  )
  }
}
export default App;
