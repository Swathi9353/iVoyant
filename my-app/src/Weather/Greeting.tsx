import React from 'react';

interface GreetingProps {
  timeOfDay: 'morning' | 'afternoon' | 'evening';
}

const Greeting: React.FC<GreetingProps> = ({ timeOfDay }) => {
  return (
    <p>
      {timeOfDay === 'morning'
        ? 'Good morning!'
        : timeOfDay === 'afternoon'
        ? 'Good afternoon!'
        : 'Good evening!'}
    </p>
  );
};

export default Greeting;
