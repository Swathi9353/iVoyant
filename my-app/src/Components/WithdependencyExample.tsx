import { useState, useEffect } from 'react';

function SpecificDependencyExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
    </div>
  );
}

export default SpecificDependencyExample;
