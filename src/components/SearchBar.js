import React, { useState } from 'react';
import './SearchBar.css';
import Dropdown from './Dropdown';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setDropdownVisible(e.target.value.length > 0);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Поиск"
        className="input"
      />
      {isDropdownVisible && <Dropdown />}
    </div>
  );
};

export default SearchBar;
