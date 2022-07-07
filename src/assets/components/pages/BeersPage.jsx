import axios from "axios";
import { useEffect, useState } from "react"
import Beer from "../components/Beer";

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
      await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${_id}`);
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
