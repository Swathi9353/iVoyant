import React, { useState, useEffect } from "react";

const DateTimeDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString()); // Get the date and time as a localized string
    };

    updateDateTime(); // Set initial date and time
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return <p>Current Date and Time: {currentDateTime}</p>;
};

export default DateTimeDisplay;
