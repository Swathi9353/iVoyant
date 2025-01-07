import React from 'react';
import Person from './Components/Person';
import Product from './Components/Product';

const App: React.FC = () => {
  const age:number = 30;
return (
    <div>
   {age>0? <Person name={"Alice"} age={30} />:
    <Product name="Laptop" price={999.99} />}
    </div>
  );
};

export default App;
