import React from 'react';
import Person from './Components/Person';
import Product from './Components/Product';

const App: React.FC = () => {
return (
    <div>
    <Person name="Alice" age={30} />
      <Product name="Laptop" price={999.99} />
    </div>
  );
};

export default App;
