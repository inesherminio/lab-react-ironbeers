import { Link } from "react-router-dom";

export default function Beer({ image, name, tagline, first_brewed,attenuation_level,description,contributed_by, id, hideLink, handleDelete }) {
  return (
    <div>
      <img src={image_url} alt="Beer image"></img>
      <h3>Name: {name}</h3>
      <p>Tagline: {tagline}</p>
      <p>First brewed: {first_brewed}</p>
      <p>Attenuation level: {attenuation_level}</p>
      <p>Description: {description}</p>
      <p>Contributed by: {contributed_by}</p>
      {hideLink ? <Link to="/">Go back</Link> : <Link  to={`/${id}`}>See details</Link>}
      {handleDelete && <button onClick={() => handleDelete(id)}>Remove</button>}
    </div>
  )
}

