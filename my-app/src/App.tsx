import React from 'react';
import UserList from './UserList/UserList';
import ProductList from './UserList/ProductList';

const App: React.FC = () => {
  return (
    <div>
      <UserList />
      <ProductList />
    </div>
  );
};

export default App;
