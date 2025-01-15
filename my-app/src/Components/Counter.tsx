import React, { useState } from "react";

const Counter:React.FC=()=> {
  // Initialize state with a value of 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment=() => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
