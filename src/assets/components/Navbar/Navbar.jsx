import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      {/* The bellow link is pointing to "/", which is not the route that displays all beers */}
      <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>All Beers </NavLink>
      <NavLink to="/create" className={({ isActive }) => isActive ? "selected" : ""}>Add New Beer</NavLink>
    </nav>
  )
}
