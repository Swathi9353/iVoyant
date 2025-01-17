import React from "react";

const Greeting: React.FC = () => {
  // Get the current hour of the day (0-23)
  const currentHour = new Date().getHours();

  // Determine time of day based on the current hour
  const timeOfDay =
    currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening";

  return (
    <p>
      {timeOfDay === "morning"
        ? "Good morning!"
        : timeOfDay === "afternoon"
        ? "Good afternoon!"
        : "Good evening!"}
    </p>
  );
};

export default Greeting;
