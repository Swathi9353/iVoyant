import React from 'react';

interface FamilyProps {
  father: string;
  mother: string;
}

const Family: React.FC<FamilyProps> = ({ father, mother }) => {
  return (
    <div className="profile-section">
      <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>Family</h2>
      <p>Father: {father}</p>
      <p>Mother: {mother}</p>
    </div>
  );
};

export default Family;
