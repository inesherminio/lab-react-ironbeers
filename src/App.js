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
      {/* Routes should be ordered from the more specific to the more generic, to avoid routing errors */}
      <Route path='/beers/:id' element={<BeerPage />} />
      <Route path='/beers' element={<AllBeersPage />}/>
      <Route path='/random-beer' element={<RandomBeerPage />}/>
      <Route path='/new-beer' element={<NewBeerPage />}/>
      <Route path='/' element={<HomePage />}/>
    </Routes>
    </div>
  );
}

export default App;
