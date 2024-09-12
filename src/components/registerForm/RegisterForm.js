import { useState } from 'react';
import styles from './RegisterForm.module.css'; // Подключаем CSS Modules

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    console.log('Регистрация:', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Регистрация</h2>
      <div>
        <label className={styles.label}>Имя пользователя</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.inputRegister}
        />
      </div>
      <div>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputRegister}
        />
      </div>
      <div>
        <label className={styles.label}>Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputRegister}
        />
      </div>
      <div>
        <label className={styles.label}>Подтвердите пароль</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className={styles.inputRegister}
        />
      </div>
      <button type="submit" className={styles.button}>Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
