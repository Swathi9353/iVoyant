import React, { useState } from 'react';

interface Column {
  Header: string;
  accessor: string;
}

interface DynamicTableProps {
  data: Array<Record<string, any>>;
  columns: Column[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ data, columns }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  const [filter, setFilter] = useState('');

  const sortData = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedData(sortedArray);
    setSortConfig({ key, direction });
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredData = sortedData.filter((row) =>
    columns.some((column) =>
      row[column.accessor]?.toString().toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter..."
        value={filter}
        onChange={handleFilter}
      />
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} onClick={() => sortData(column.accessor)}>
                {column.Header}
                {sortConfig.key === column.accessor ? (
                  sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
