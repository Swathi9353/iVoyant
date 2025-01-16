import { useState, useEffect } from 'react';

function SpecificDependencyExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]); // Runs when 'count' changes

  const handleSubmit=()=>{
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleSubmit}>Increment Count</button>
      
    </div>
  );
}

export default SpecificDependencyExample;
