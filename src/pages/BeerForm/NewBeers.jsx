import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BeerFormStyles from "./BeerForm.css";

function NewBeer() {
  const navigate = useNavigate();
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBeer({ ...beer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer);
      setBeer({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="beerForm">
      <form onSubmit={handleSubmit}>
        <div className="beer-item">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            value={beer.name}
          />
        </div>
        <div className="beer-item">
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={handleInput}
            type="tagline"
            name="tagline"
            value={beer.tagline}
          />
        </div>
        <div className="beer-item">
          <label htmlFor="description">Description</label>
          <input
            onChange={handleInput}
            type="text"
            name="description"
            value={beer.description}
          />
        </div>
        <div className="beer-item">
          <label htmlFor="first_brewed">First brewed</label>
          <input
            onChange={handleInput}
            type="text"
            name="first_brewed"
            value={beer.first_brewed}
          />
        </div>
        <div className="beer-item">
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            onChange={handleInput}
            type="text"
            name="brewers_tips"
            value={beer.brewers_tips}
          />
        </div>
        <div className="beer-item">
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            onChange={handleInput}
            type="number"
            name="attenuation_level"
            value={beer.attenuation_level}
          />
        </div>
        <div className="beer-item">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            onChange={handleInput}
            type="text"
            name="contributed_by"
            value={beer.contributed_by}
          />
        </div>
        <button type="submit">Add new</button>
      </form>
    </div>
  );
}

export default NewBeer;
