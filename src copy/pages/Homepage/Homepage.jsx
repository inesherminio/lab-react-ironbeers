import { NavLink } from "react-router-dom";
import HomepageStyle from "./Homepage.css";
import beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <NavLink className="navigation" to="/beers">
          <h1>All Beers</h1>
          <img src={beers} alt="" />
        </NavLink>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro
          molestiae ea a, accusantium maiores, tempora illo architecto id
          consequuntur explicabo! Delectus sed possimus quam perspiciatis
          mollitia. Omnis, laudantium tenetur!
        </p>
      </div>
      <div>
        <NavLink className="navigation" to="/beers/random/">
          <h1>Random Beer</h1>
          <img src={randomBeer} alt="" />
        </NavLink>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro
          molestiae ea a, accusantium maiores, tempora illo architecto id
          consequuntur explicabo! Delectus sed possimus quam perspiciatis
          mollitia. Omnis, laudantium tenetur!
        </p>
      </div>
      <div>
        <NavLink className="navigation" to="/new">
          <h1>New Beer</h1>
          <img src={newBeer} alt="" />
        </NavLink>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro
          molestiae ea a, accusantium maiores, tempora illo architecto id
          consequuntur explicabo! Delectus sed possimus quam perspiciatis
          mollitia. Omnis, laudantium tenetur!
        </p>
      </div>
    </div>
  );
}

export default Homepage;
