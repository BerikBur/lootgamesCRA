//import React, { useState } from 'react';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import Search from '../search/Search';

import './Header.css';


const Header = () => {
  return (
    <div className="header">
      <div className='container'>
        <div className="logo"></div>
        <button className="button">Продать</button>
        <BtnDarkMode />
        <Search />
        <button className="button">Вход</button>
        <button className="button">Регистрация</button>
        <button className="button">Меню</button>        
      </div> 
    </div>
  );
};

export default Header;