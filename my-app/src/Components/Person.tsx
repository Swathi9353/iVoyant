import React from 'react';
import { PersonProps } from './Interface'; // or './Components/Interface';


const Person: React.FC<PersonProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Person;
