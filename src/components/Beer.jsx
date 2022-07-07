import { Link } from "react-router-dom";

export default function Beer({image, name, tagline, contributed_by, id, hideLink}) {
  return (
    <div>
        <img src={image} alt="beer"/>
      <h3> {name}</h3>
      <p> {tagline}</p>
      <p> {contributed_by}</p>
      {hideLink ? <Link to="/">Go back</Link> : <Link  to={"/beers/:beerId"}>See details</Link>}
      
    </div>
  )
}