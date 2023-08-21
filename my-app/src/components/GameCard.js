import React from 'react';

function GameCard({game}) {
    return (
        <div className='game-card'>
            <h2>{game.name}</h2>
            <p>Genre: {game.genre}</p>
            <p>Platform: {game.platform}</p>
        </div>
      );
}

export default GameCard;