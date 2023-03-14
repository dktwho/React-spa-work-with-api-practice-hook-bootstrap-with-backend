import './App.css';
import Meme from './components/Meme/Meme';
import NavBar from './components/NavBar/NavBar';
import RandomCats from './components/RandomCats/RandomCats';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RandomCats />
      <Meme />

    </div>
  );
}

export default App;
