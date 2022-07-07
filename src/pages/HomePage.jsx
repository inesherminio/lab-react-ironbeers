import React from 'react'
import { Link } from 'react-router-dom'
import beersPicture from '../assets/beers.png'
import beerRandomPic from '../assets/random-beer.png'
import newBeerPic from '../assets/new-beer.png'
export default function HomePage() {
  return (
    <div>
        <img src={beersPicture} alt='beersPicture'/>
      <Link to="/beers">All Beers</Link>
      <img src={beerRandomPic} alt='beerRandomPic'/>
      <Link to="/random-beer">Random Beer</Link>
      <img src={newBeerPic} alt='newBeerPic'/>
      <Link to="/new-beer">New Beer</Link>
    </div>
  )
}
