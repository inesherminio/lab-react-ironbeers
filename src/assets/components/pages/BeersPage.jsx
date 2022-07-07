import axios from "axios";
import { useEffect, useState } from "react"
/* The bellow imports don't work because the paths are incorrect. Attention to structure */
import Beer from "../Beer";

export default function BeersPage() {
  const [ beers, setBeers ] = useState(null);
  useEffect(() => {
    // API CALL
    const fetchBeers = async () => {
      try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        setBeers(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBeers();
  }, [])

  const displayBeers = () => {
    return beers.map((beer) => (
      <Beer {...beer} key={beer._id} handleDelete={handleDelete} />
    ))
  }

  const handleDelete = async (id) => {
    try {
      /* The argument you're passing is id, not _id */
      /* await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${_id}`); */
      /* This api does not have a delete route. You can check the endpoints on the lab. That endpoint you're using gives you the details on a specific beer.
      However, axios.delete will give you a 404, because it does not exist. */
      await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      setBeers(response.data);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div>
      <h1>Beers Page</h1>
      {
        beers ? displayBeers() : <p>Loading...</p>
      }
    </div>
  )
}
