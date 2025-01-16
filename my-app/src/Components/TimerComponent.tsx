import React, { useState, useEffect } from "react";

const TimerComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array, runs once on mount and cleans up on unmount

  return <div>Count: {count}</div>;
};

export default TimerComponent;
