import React, { useState } from 'react';
import './Header.css';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="headerTop">
      <div className="logo">Лого</div>
      <button className="button">Продать</button>
      <SearchBar />
      <button className="button">Вход</button>
      <button className="button">Регистрация</button>
      <button className="button">Меню</button>
    </div>
  );
};

export default Header;