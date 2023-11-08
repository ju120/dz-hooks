import React, { useState } from "react";

function Brojac() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Uvećaj</button>
      <button onClick={decrement}>Umanji</button>
    </div>
  );
}

export default Brojac;
