import { useState } from 'react';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import Search from '../search/Search';
import './Header.css';
import LoginForm from '../../components/loginForm/LoginForm';
import RegisterForm from '../../components/registerForm/RegisterForm';
import MenuDropdown from '../menuDropdown/MenuDropdown';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  
  const closeModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div className="header">
      <div className="container_header">
        <div className="logo"></div>
        <button className="button">Продать</button>
        <Search/>
        <button className="button" onClick={() => setIsLoginOpen(true)}>Вход</button>
        <button className="button" onClick={() => setIsRegisterOpen(true)}>Регистрация</button>
        <MenuDropdown />
               
      </div>

      {isLoginOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="close" onClick={closeModal}>X</button>
            <LoginForm />
          </div>
        </div>
      )}

      {isRegisterOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <button className="close" onClick={closeModal}>X</button>
            <RegisterForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;