
import './App.css';
import { useState } from "react";
function App() {
  const [Data, setData] = useState("")
  const answer = (string) => {
    return (Number(string))
  }
  const output = () => {
    return setData(eval(Data.toString()))
  }
  return (
    <div className="whole-container">
      <h2>Calculator</h2>
      <div className="grid-contain">
        <div className='input'>{answer() ? <span>{answer()}</span> : <span>{Data}</span>}</div>
        <button className='clear' type="button" onClick={() => { setData("") }}>C</button>
        <button className='1' type="button" onClick={() => { setData(Data + "1") }}>1</button>
        <button className='2' type="button" onClick={() => { setData(Data + "2") }}>2</button>
        <button className='3' type="button" onClick={() => { setData(Data + "3") }}>3</button>
        <button className='divide' type="button" onClick={() => { setData(Data + "/") }}>/</button>
        <button className='4' type="button" onClick={() => { setData(Data + "4") }}>4</button>
        <button className='5' type="button" onClick={() => { setData(Data + "5") }}>5</button>
        <button className='6' type="button" onClick={() => { setData(Data + "6") }}>6</button>
        <button className='substract' type="button" onClick={() => { setData(Data + "-") }}>-</button>
        <button className='7' type="button" onClick={() => { setData(Data + "7") }}>7</button>
        <button className='8' type="button" onClick={() => { setData(Data + "8") }}>8</button>
        <button className='9' type="button" onClick={() => { setData(Data + "9") }}>9</button>
        <button className='add' type="button" onClick={() => { setData(Data + "+") }}>+</button>
        <button className='dot' type="button" onClick={() => { setData(Data + ".") }}>.</button>
        <button className='0' type="button" onClick={() => { setData(Data + "0") }}>0</button>
        <button className='equalTo' type="button" onClick={() => { output() }}>=</button>
        <button className='multiple' type="button" onClick={() => { setData(Data + "*") }}>*</button>
      </div>
    </div >
  )
}

export default App;

