import './App.css';
/* The bellow imports don't work because the paths are incorrect. Attention to structure */
import { Route, Routes } from 'react-router-dom';
import HomePage from './assets/components/pages/HomePage';
import BeersPage from './assets/components/pages/BeersPage';
import BeerPage from './assets/components/pages/BeerPage';
import RandomBeerPage from './assets/components/pages/RandomBeerPage';
import Navbar from './assets/components/Navbar/Navbar';
import BeersFormPage from './assets/components/pages/BeersFormPage';

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
