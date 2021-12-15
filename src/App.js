import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

// So this is the hook
// Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
// Hooks don’t work inside classes — they let you use React without classes.
import React, { useState, useEffect } from 'react';

// function App() {
// // Declare a new state variable, which we'll call "count" and set it to 0
// // when we declare a state variable with useState, it returns a pair, an array with two items
//   const [count, setCount] = useState(0);
  

// // Similar to componentDidMount and componentDidUpdate:
// // this is telling react that it needs to do something after render
//   useEffect(() => {
//   //update browser title using api
//     document.title = `You clicked ${count} times`;
//   }, [count]); // Only re-run the effect if count changes

// // This is writing the html and every time the button is clicked, it does the setCount function.
// // Everytime setCount runs it adds 1 to count.
//   return (
//     <div>
    
//       {/* This is where count is showing up, it is in a paragraph */}
//       <p>You clicked {count} times</p>
    
//       {/* This is where count is being updated by button click, every time its clicked it adds 1 to count */}
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   )
// }

function App() {
  let [total] = useState(0);

  let [number1, setNumber1] = useState(0);
  let [number2, setNumber2] = useState(0);

  if (setNumber1) {
    total = number1 + number2;
  }

  if (setNumber2) {
    total = number1 + number2;
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          id="txtNumOne"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          id="txtNumTwo"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
          placeholder="0"
        />
        <br></br><br></br><p>{number1}+{number2}={total}</p>
      </div>

      <h2>{total}</h2>
    </div>
  );
}

export default App;
