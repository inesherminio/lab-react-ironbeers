import { Link } from "react-router-dom";

export default function Beer({ image, name, tagline, first_brewed,attenuation_level,description,contributed_by, _id, hideLink, handleDelete }) {
  return (
    <div>
      {/* You have a prop named image, not image_url */}
      {/* <img src={image_url} alt="Beer image"></img> */}
      <img src={image} alt="Beer image"></img>
      <h3>Name: {name}</h3>
      <p>Tagline: {tagline}</p>
      <p>First brewed: {first_brewed}</p>
      <p>Attenuation level: {attenuation_level}</p>
      <p>Description: {description}</p>
      <p>Contributed by: {contributed_by}</p>
      {/* The bellow link is redirecting the user to "localhost:3000/undefined", because that id
      does not exist. The variable that comes from API is _id */}
      {hideLink ? <Link to="/">Go back</Link> : <Link  to={`/${_id}`}>See details</Link>}
      {handleDelete && <button onClick={() => handleDelete(_id)}>Remove</button>}
    </div>
  )
}

