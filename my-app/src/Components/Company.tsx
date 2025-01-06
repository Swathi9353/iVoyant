import React from 'react';

interface CompanyProps {
  companyName: string;
  role: string;
}

const Company: React.FC<CompanyProps> = ({ companyName, role }) => {
  return (
    <div className="profile-section">
      <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '5px' }}>Company</h2>
      <p>Company: {companyName}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default Company;
