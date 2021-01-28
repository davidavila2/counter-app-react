import React, { useState } from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.increment}>+1</button>
      <button onClick={props.decrement}>-1</button>
    </div>
  );
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App(props) {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCountrer = () => setCounter(counter - 1);
  return (
    <div>
      <Button increment={incrementCounter} decrement={decrementCountrer} />
      <Display message={counter} />
    </div>
  );
}

export default App;
