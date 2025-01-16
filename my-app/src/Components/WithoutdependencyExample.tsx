import React, { useState, useEffect } from 'react';

function NoDependencyExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
  }); // No dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default NoDependencyExample;
