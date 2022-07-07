import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Beer from '../components/Beer';

export default function BeerPage() {
  const {_id } = useParams();
  const [ beer, setBeer ] = useState(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`);
        setBeer(response.data)
      } catch (error) {
        console.error(error);
      }
    }

    fetchBeer();
  }, [_id])

  return (
    <div>
      <h1>Beer{_id} page</h1>
      {beer ? <Beer hideLink {...beer} /> : <p>Loading..</p> }
     
    </div>
  )
}
