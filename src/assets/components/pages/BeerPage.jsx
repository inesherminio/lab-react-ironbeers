import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
/* The bellow imports don't work because the paths are incorrect. Attention to structure */
import Beer from '../Beer';

export default function BeerPage() {
  const {id } = useParams();
  /* The param your passing on app.js (line 20) is :id and not :_id */
  const [ beer, setBeer ] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeer(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchBeer();
  }, [id])

  return (
    <div>
      <h1>Beer{id} page</h1>
      {beer ? <Beer hideLink {...beer} /> : <p>Loading..</p> }
     
    </div>
  )
}
