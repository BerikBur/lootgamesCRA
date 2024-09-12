import React, { useState, useEffect, useRef } from 'react';
import styles from './MenuDropdown.module.css';

const MenuDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.menuContainer} ref={menuRef}>
      <button className={styles.button} onClick={toggleMenu}>Меню</button>
      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <div>
            <button onClick={() => setIsLangOpen(!isLangOpen)} className={styles.dropdownItem}>Выбор языка</button>
            {isLangOpen && (
              <ul className={styles.submenu}>
                <li>Русский</li>
                <li>English</li>
                <li>Français</li>
              </ul>
            )}
          </div>
          <div>
            <button onClick={() => setIsCurrencyOpen(!isCurrencyOpen)} className={styles.dropdownItem}>Выбор валюты</button>
            {isCurrencyOpen && (
              <ul className={styles.submenu}>
                <li>RUB</li>
                <li>USD</li>
                <li>EUR</li>
              </ul>
            )}
          </div>
          <div>
            <button onClick={() => setIsHelpOpen(!isHelpOpen)} className={styles.dropdownItem}>Помощь</button>
            {isHelpOpen && (
              <ul className={styles.submenu}>
                <li>Часто задаваемые вопросы</li>
                <li>Свяжитесь с нами</li>
              </ul>
            )}
          </div>
          <div>
            <button onClick={() => setIsInfoOpen(!isInfoOpen)} className={styles.dropdownItem}>Информация</button>
            {isInfoOpen && (
              <ul className={styles.submenu}>
                <li>О нас</li>
                <li>Условия использования</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
