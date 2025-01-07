import React from 'react';

interface PersonProps {
  name: string;
  age: number;
}

const Person: React.FC<PersonProps> = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Person;
