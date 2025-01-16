import React from "react";
import BasicEffect from "./Components/BasicEffect";
import CounterEffect from "./Components/CounterEffect";
import FetchDataEffect from "./Components/FetchDataEffect";

const App: React.FC = () => {
  return (
    <div>
      <h1>React useEffect Examples</h1>

      <section>
        <h2>BasicEffect Component</h2>
        <BasicEffect />
      </section>

      <section>
        <h2>CounterEffect Component</h2>
        <CounterEffect />
      </section>

      <section>
        <h2>FetchDataEffect Component</h2>
        <FetchDataEffect />
      </section>
    </div>
  );
};

export default App;
