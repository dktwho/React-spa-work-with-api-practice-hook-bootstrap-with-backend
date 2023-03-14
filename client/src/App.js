import './App.css';
import Meme from './components/Meme/Meme';
import NavBar from './components/NavBar/NavBar';
import RandomCats from './components/RandomCats/RandomCats';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/"  element={<Meme/>} />
        <Route path="/cat"  element={<RandomCats />} />
      </Routes>
    </div>
  );
}

export default App;
