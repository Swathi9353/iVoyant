import React from 'react';
import Person  from './Components/Person';
import Product from './Components/Product';
import  './Components/Interface'

const App: React.FC = () => {
  return (
    <div>
      {/* Passing props to Person */}
      <Person name="John Doe" age={28} />
      <Person name="Jane Smith" age={32} />

      {/* Passing props to Product */}
      <Product name="Laptop" price="$1200" />
      <Product name="Smartphone" price="$699" />
    </div>
  );
}

export default App;
