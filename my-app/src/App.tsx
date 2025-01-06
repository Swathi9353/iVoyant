// src/App.tsx

import React from 'react';
import SearchableDropdown from './SearchableDropdown.tsx';


const App: React.FC = () => {
  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  const handleSelect = (option: string) => {
    alert(`You selected: ${option}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Searchable Dropdown Example</h1>
      <SearchableDropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;
