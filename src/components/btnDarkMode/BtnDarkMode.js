import './BtnDarkMode.css';

const BtnDarkMode = () => {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="btn-dark-mode" onClick={toggleDarkMode}>
      Тёмный режим
    </button>
  );
};

export default BtnDarkMode;
