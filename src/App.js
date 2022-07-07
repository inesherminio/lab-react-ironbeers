import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Beers from "./pages/Beers/Beers";
import NewBeer from "./pages/BeerForm/NewBeers";
import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import BeerDetails from "./pages/BeerDetails/BeerDetails";

function App({ hideLink }) {
  const location = useLocation();
  return (
    <div className="App">
      <Navigation hideLink={location?.pathname === "/"}></Navigation>
      <Routes>
        <Route path="/" element={<Homepage navLink></Homepage>}></Route>
        <Route path="/beers" element={<Beers></Beers>}></Route>
        <Route path="/beers/:id" element={<BeerDetails></BeerDetails>}></Route>
        <Route path="/random" element={<BeerDetails></BeerDetails>}></Route>
        <Route path="/new" element={<NewBeer></NewBeer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
