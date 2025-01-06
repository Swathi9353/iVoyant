import React from 'react';

interface EducationProps {
  degree: string;
  university: string;
}

const Education: React.FC<EducationProps> = ({ degree, university }) => {
  return (
  <div className="profile-section">
      <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>Education</h2>
      <p>Degree: {degree}</p>
      <p>University: {university}</p>
    </div>
  );
};

export default Education;
