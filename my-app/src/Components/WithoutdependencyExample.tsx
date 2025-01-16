import { useState, useEffect } from 'react';

function NoDependencyExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect ran');
  }); // No dependency array

  const handleSubmit=() =>
  
  {
    setCount(count + 1);

  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={ handleSubmit}>increment</button>
    </div>
    
  );
}

export default NoDependencyExample;
