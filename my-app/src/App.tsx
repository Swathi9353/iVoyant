import React from "react";
import Weather from "./Weather/Weather";
import UserStatus from "./Weather/UserStatus";

import "./App.css";
import DateTimeDisplay from "./Weather/CurrentTime";
import Greeting from "./Weather/Greeting";

const App: React.FC = () => {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>
      <div>
        <DateTimeDisplay/>
        <Greeting/>
      </div>

      {/* Weather component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus component */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} isAdmin={false} />

    
    </div>
  );
};

export default App;
