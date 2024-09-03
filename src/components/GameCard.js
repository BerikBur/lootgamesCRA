// src/components/GameCard.js
import React from 'react';
import './GameCard.css'; // Для стилей карточки

const GameCard = ({ image, title }) => {
    return (
        <div className="game-card">
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GameCard;
