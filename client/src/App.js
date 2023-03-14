import './App.css';
import Meme from './components/Meme/Meme';
import NavBar from './components/NavBar/NavBar';
import RandomCats from './components/RandomCats/RandomCats';

function App() {
  return (
    <div className="App">
      <Meme />
      <NavBar />
      <RandomCats />


    </div>
  );
}

export default App;
