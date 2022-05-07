import './App.css';
import {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const increase = (number) => {

    setCounter(counter + number);

  }

  const decrease = (number) => {

    setCounter(counter - number);

  }
  return (
    <div className="App">

      <h1>Value of counter is {counter}</h1>
      <h2>Increase section</h2>
      <button onClick={() => increase(10)}> Increase by 10</button>

      <button onClick={() => increase(20)}>Increase by 20</button>

      <button onClick={() => increase(50)}>Increase by 50</button>

      <button onClick={() => increase(100)}>Increase by 100</button>

      <h2>Decrease section</h2>

      <button onClick={() => decrease(10)}>Decrease by 10</button>

      <button onClick={() => decrease(20)}>Decrease by 20</button>

      <button onClick={() => decrease(50)}>Decrease by 50</button>

      <button onClick={() => decrease(100)}>Decrease by 100</button>  




     
    </div>
  );
}

export default App;
