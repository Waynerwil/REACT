import {React} from 'react';
import GameCard from "./GameCard";

const games = [
    {name: 'GTA V',genre: 'Acción', platform: 'Play Station'},

    {name: 'Fifa 23', genre: 'Simulación',  platform: 'Play Station'},
]

function GameList() {
    return (
        <div className="game-list">
            {games.map((game, index) => (
               <GameCard key={index} game ={game}/> 
            ))}
        </div>
      );
}

export default GameList;