import React from 'react';

interface NameProps {
  firstName: string;
  lastName: string;
}

const Name: React.FC<NameProps> = ({ firstName, lastName }) => {
  return (
    <div className="profile-section">
      <h2>Name</h2>
      <p>{firstName} {lastName}</p>
    </div>
  );
};

export default Name;
