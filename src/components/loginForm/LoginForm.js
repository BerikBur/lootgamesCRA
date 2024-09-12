import { useState } from 'react';
import styles from './LoginForm.module.css'; // Подключаем CSS Modules

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика входа
    console.log('Вход:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.heading}>Вход</h2>
      <div>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputLogin}
        />
      </div>
      <div>
        <label className={styles.label}>Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.inputLogin}
        />
      </div>
      <button type="submit" className={styles.button}>Войти</button>
    </form>
  );
};

export default LoginForm;
