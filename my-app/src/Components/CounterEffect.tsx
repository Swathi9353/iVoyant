import React, { useState, useEffect } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array with `count` ensures it runs on count changes
const handleSubmit = () => {
  setCount(count + 1);
};

  return (
    <div>
      <h1>Counter Effect Example</h1>
      <p>Current Count: {count}</p>
      <button onClick={handleSubmit}>Increment</button>
    </div>
  );
};

export default CounterEffect;
