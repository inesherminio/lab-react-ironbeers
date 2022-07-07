import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Beers from "./pages/Beers/Beers";
import NewBeer from "./pages/BeerForm/NewBeers";
import Homepage from "./pages/Homepage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import BeerDetails from "./pages/BeerDetails/BeerDetails";

/* What is this prop you're passing to App? App normally has no props because its the "root" component */
function App({ hideLink }) {
  const location = useLocation();
  return (
    <div className="App">
      <Navigation hideLink={location?.pathname === "/"}></Navigation>
      <Routes>
        {/* Routes should be ordered from the more specific to the more vegues ones, to avoid routing errors.
        Also, for all components that do not have children, you can use the "easy-close kind"
        <Component /> instead of <Component></>Component>. It gets much more readable! */}
        <Route path="/" element={<Homepage navLink />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random" element={<BeerDetails />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
