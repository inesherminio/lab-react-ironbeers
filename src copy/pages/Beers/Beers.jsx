import BeerStyles from "./Beers.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Beer from "../../components/Beer";

function Beers() {
  const [beers, setBeers] = useState();
  // retrieve image, name, tagline, contributed_by
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBeers();
  }, []);

  const displayBeers = () => {
    return beers.map((beer) => (
      <NavLink key={beer._id} to={`/beers/${beer._id}`} className="beersLink">
        <Beer beer={beer}></Beer>
      </NavLink>
    ));
  };

  return (
    <div>
      <h1>Beers</h1>
      {beers ? displayBeers() : <p>Loading...</p>}
    </div>
  );
}

export default Beers;
