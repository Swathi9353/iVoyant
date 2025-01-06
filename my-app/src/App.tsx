import React from 'react';
import DynamicTable from './DynamicTable';

const data = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Dynamic Table</h1>
      <DynamicTable data={data} columns={columns} />
    </div>
  );
};

export default App;
