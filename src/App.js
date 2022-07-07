import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import BeerPage from './pages/BeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import Navbar from './components/Navbar/Navbar';
import BeersFormPage from './pages/BeersFormPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/randombeer' element={<RandomBeerPage />} />
        <Route path='/create' element={<BeersFormPage />} />
        <Route path='/:id' element={<BeerPage />} />       
      </Routes>
    </div>
  );
}

export default App;
