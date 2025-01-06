import React from 'react';
import './App.css';
import Name from './Components/Name';
import Company from './Components/Company';
import Family from './Components/Family.tsx';
import Education from './Components/Education';
import { Marks } from './Components/Marks';

const App: React.FC = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile</h1>
      <Name firstName="John" lastName="Doe" />
      <Company companyName="ABC Corp" role="Software Engineer" />
      <Family father="Mark Doe" mother="Jane Doe" />
      <Education degree="B.Tech in Computer Science" university="XYZ University" />
      <Marks score={100} status="Pass" />
    </div>
  );
};

export default App;
