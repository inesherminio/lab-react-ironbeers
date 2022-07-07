import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AllBeers from "./pages/AllBeers/AllBeers";
import BeerDetail from "./pages/BeerDetail/BeerDetail";
import NewBeer from "./pages/NewBeer/NewBeer";
import RandomBeer from "./pages/RandomBeer/RandomBeer";

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Your routes should be ordered from the more specific to the more generic ones, to reduce errors on routing */}
        <Route path="/:id" element={<BeerDetail apiUrl={apiUrl} />} />
        <Route path="/beers" element={<AllBeers apiUrl={apiUrl} />} />
        <Route path="/random-beer" element={<RandomBeer apiUrl={apiUrl} />} />
        <Route path="/new-beer" element={<NewBeer apiUrl={apiUrl} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
