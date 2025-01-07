import React from 'react';
import Weather from './Weather/Weather';
import UserStatus from './Weather/UserStatus';
import Greeting from './Weather/Greeting';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus component */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} isAdmin={false} />

      {/* Greeting component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting timeOfDay="evening" />
    </div>
  );
};

export default App;
