import React, { useState, useEffect } from 'react';

function SpecificDependencyExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something" 
      />
    </div>
  );
}

export default SpecificDependencyExample;
