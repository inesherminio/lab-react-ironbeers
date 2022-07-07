
import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
function App() {
  return (
    <div className="App">
     <Routes>
      {/* Routes should be ordered from the more specific to the more vague one, to avoid routing errors. */}
       <Route path="/beers" element={<Beers/>}/>
       <Route path="/random-beer" element={<RandomBeer/>}/>
       <Route path="/new-beer" element={<NewBeer/>}/>
       <Route path='/' element={<HomePage/>}/>
       </Routes>
    </div>
  );
}

export default App;
