import React, { useState, useEffect } from 'react';

function TableRow({ rowIndex, label1Options, label2Options, rows, setRows }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleLabel1Change = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);

    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, selectedOption: newValue };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleLabel2Change = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedItems(selected);
  };

  const handleAddItem = () => {
    if (newItem && !label2Options.includes(newItem)) {
      label2Options.push(newItem);
      setNewItem('');
    }
  };

  useEffect(() => {
    setSelectedOption('');
    setSelectedItems([]);
  }, [rowIndex]);

  return (
    <tr>
      <td>
        <select
          value={selectedOption}
          onChange={handleLabel1Change}
        >
          <option value="">Select Option</option>
          {label1Options
            .filter(option => !rows.some(row => row.selectedOption === option))
            .map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
        </select>
      </td>
      <td>
        <select
          multiple
          value={selectedItems}
          onChange={handleLabel2Change}
        >
          {label2Options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
          <option value="">Select Items</option>
        </select>
        <div className="add-item">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
