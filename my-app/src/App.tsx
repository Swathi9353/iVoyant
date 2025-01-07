// App.tsx
import React from 'react';
import Greeting from './assets/Greeting/Greeting';
import ProductInfo from './assets/Greeting/ProductInfo';

const App: React.FC = () => {
  return (
    <div>
      <Greeting />
      <ProductInfo />
    </div>
  );
}

export default App;
