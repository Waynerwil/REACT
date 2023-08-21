import logo from './logo.svg';
import './App.css';
import GameList from './components/GameList';
import Navigation from './components/Navigation';
import Counter from './components/Counter';

function Welcome({name}){
  return <h1>Hola, {name}</h1>
}

function App() {
  return (
      <div className="App">
        <header className="App-header">
        <Navigation  isSessionStarted={true} />
        </header>
        <div>
          <Welcome name ="Wilson"/>
          <GameList/>
          <Counter/>
        </div>
      </div>
    );
}

export default App;
