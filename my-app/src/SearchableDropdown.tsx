                                                                       // src/SearchableDropdown.tsx

import React, { useState } from 'react';

interface SearchableDropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({ options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setShowOptions(true);
  };

  const handleSelect = (option: string) => {
    setSearchTerm(option);
    setShowOptions(false);
    onSelect(option);
  };

  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setShowOptions(true)}
        placeholder="Search..."
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      {showOptions && (
        <ul
          style={{
            position: 'absolute',
            width: '100%',
            maxHeight: '150px',
            overflowY: 'auto',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            margin: 0,
            padding: 0,
            listStyleType: 'none',
          }}
        >
          {filteredOptions.map(option => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{ padding: '8px', cursor: 'pointer' }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
