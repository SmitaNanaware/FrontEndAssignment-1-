import React, { useState } from 'react';
import TableRow from './TableRow';
import './App.css';

function App() {
  const label1Options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const label2Options = ['Item A', 'Item B', 'Item C'];

  const [rows, setRows] = useState([{ id: Date.now(), selectedOption: '', selectedItems: [] }]);

  const addRow = () => {
    setRows([
      ...rows,
      { id: Date.now(), selectedOption: '', selectedItems: [] }
    ]);
  };

  return (
    <div className="App">
      <table className="table">
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              rowIndex={index}
              label1Options={label1Options}
              label2Options={label2Options}
              rows={rows}
              setRows={setRows}
            />
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="add-row-btn">Add New Row</button>
    </div>
  );
}

export default App;

