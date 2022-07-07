import { NavLink } from "react-router-dom";
import NavigationStyle from "./Navigation.css";
import Home from "../../assets/home.png";

function Navigation({ hideLink }) {
  return (
    <div>
      {hideLink ? (
        ""
      ) : (
        <nav className="navigation">
          <NavLink className="house" to="/">
            <img src={Home} alt="" />
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
