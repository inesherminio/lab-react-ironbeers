import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import BeerPage from './pages/BeerPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/beers' element={<AllBeersPage />}/>
      <Route path='/random-beer' element={<RandomBeerPage />}/>
      <Route path='/new-beer' element={<NewBeerPage />}/>
      <Route path='/beers/:id' element={<BeerPage />} />
    </Routes>
    </div>
  );
}

export default App;
