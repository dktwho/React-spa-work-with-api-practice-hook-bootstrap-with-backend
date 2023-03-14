import './App.css';
import Meme from './components/Meme/Meme';
import NavBar from './components/NavBar/NavBar';
import RandomCats from './components/RandomCats/RandomCats';
import SinatraAlbums from './components/SinatraAlbums/SinatraAlbums';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/"  element={<Meme/>} />
        <Route path="/cat"  element={<RandomCats />} />
        <Route path="/sinatra"  element={<SinatraAlbums />} />
      </Routes>
    </div>
  );
}

export default App;
