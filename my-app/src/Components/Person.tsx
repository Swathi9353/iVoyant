import React from 'react';
import { PersonProps } from '../types/types';



const Person: React.FC<PersonProps> = ({name,age}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default Person;
