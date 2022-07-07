import axios from "axios";
import { useEffect, useState } from "react"
import React from 'react'
import { Link } from "react-router-dom";
import Beer from "../components/Beer";


export default function Beers() {
    const [ beers, setBeers ] = useState(null);
    useEffect(() => {
      
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
          /* Console.log the information that comes with the API. Each beer has an "_id" field, not "id" */
          <Beer {...beer} key={beer.id}  />
        ))
      }


    return (
    <div>
         <header>
         <Link to="/">HOME</Link>
        </header>
           <h1>All Beers</h1>
      {
        beers ? displayBeers() : <p>Loading...</p>
        
      }
      
    </div>
  )
}
