import React from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const items = ['Товар 1', 'Товар 2', 'Товар 3', 'Товар 4', 'Товар 5'];

  return (
    <div className="dropdown">
      {items.map((item, index) => (
        <div key={index} className="dropdown-item">{item}</div>
      ))}
    </div>
  );
};

export default Dropdown;
