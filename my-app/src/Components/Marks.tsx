import React from 'react';

interface MarksProps {
  score: number;
  status: string;
}

export const Marks: React.FC<MarksProps> = ({ score, status }) => {
  return (
    <div className="profile-section">
      <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>Marks</h2>
      <p>Score: {score}</p>
      <p>Status: {status}</p>
    </div>
  );
};
