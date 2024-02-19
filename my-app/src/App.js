import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = async() => {
    const res = await fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({number1: number1, number2: number2}),
    })
    const data = await res.json()
    console.log(data)
    console.log(data.output)
    setResult(Number(data.output))  
  }

  const handleSubtract = async() => {
    const res = await fetch('http://localhost:5000/subtract', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({number1: number1, number2: number2}),
    })
    const data = await res.json()
    console.log(data)
    console.log(data.output)
    setResult(Number(data.output))  
  }

  return (
    <div className="App">
      <div className="flex gap-4 justify-center p-10">
        <input type="number" value={number1} onChange={ev => setNumber1(ev.target.value)} className="border-gray-700" >
        </input>
  
        <input type="number" value={number2} onChange={ev => setNumber2(ev.target.value)} className="border-gray-700" >
        </input>
  
        <button className="text-white rounded-md px-2 bg-blue-600" onClick={handleAdd}>
          Add
        </button>
  
        <button className="text-white rounded-md px-2 bg-red-600" onClick={handleSubtract}>
          Subtract
        </button>
        
      </div>
      <div className="bg-green-400 text-white rounded-md p-2 inline-flex justify-center ">Result is: {result}</div>
    </div>
  );
}

export default App;
