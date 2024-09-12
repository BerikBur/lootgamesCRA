import React, { useEffect, useState } from 'react';
import Home from './pages/home_page1/Home';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/home_page1/Home'; // Импортируй свой Header
import SellPage from './pages/sellPage/SellPage'; // Страница "Продать"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sell" element={<SellPage />} />
      </Routes>
    </Router>
  );
}

export default App;



/*
  function App() {
  
  const totalGames = 144; // Общее количество карточек
  const games = Array.from({ length: totalGames }, (_, index) => ({
    id: index + 1,
    title: `Игра ${index + 1}`,
    image: `https://example.com/image${index + 1}.jpg`, // Замените на реальные ссылки на изображения
  }));

  const [visibleGames, setVisibleGames] = useState([]);

  const calculateVisibleGames = () => {
    const containerWidth = document.querySelector('.cards-container').clientWidth;
    const cardWidth = 120; // Ширина карточки
    const gap = 10; // Расстояние между карточками

    // Рассчитываем максимальное количество карточек в одном ряду
    const totalCardWidthWithGap = cardWidth + gap; // Общая ширина карточки с учетом отступа
    const maxCardsInRow = Math.floor(containerWidth / totalCardWidthWithGap);
    
    // Убедимся, что мы не превышаем 11 карточек в ряду
    const cardsToDisplay = Math.min(maxCardsInRow, 11); 

    // Общее количество карточек, которые можно отобразить (2 ряда)
    const totalVisibleCards = cardsToDisplay * 2;

    // Обновляем состояние с видимыми карточками
    setVisibleGames(games.slice(0, totalVisibleCards));
  };

  useEffect(() => {
    calculateVisibleGames();
    window.addEventListener('resize', calculateVisibleGames);

    // Убираем обработчик события при размонтировании
    return () => {
      window.removeEventListener('resize', calculateVisibleGames);
    };
  }, []);
  

  return (
    <div className="App">
      <Home />
      
      
      
      {/*       <Header />
      <div className="background-image"></div>
      <div className="header">
        <h1>Игры</h1>
      </div>
      <div className="cards-container">
        {visibleGames.map(game => (
          <GameCard key={game.id} image={game.image} title={game.title} />
        ))}
      </div>}

    </div>
  );
}

export default App;

*/
