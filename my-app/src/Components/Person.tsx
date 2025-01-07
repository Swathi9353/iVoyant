import React from 'react';
import { PersonProps } from '../types/types';



const Person: React.FC<PersonProps> = (Props) => {
  return (
    <div>
      <h2>Name: {Props.name}</h2>
      <p>Age: {Props.age}</p>
    </div>
  );
};

export default Person;
