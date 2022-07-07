import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function HomePage() {
    return (
        <div className='home'>
            <Link to="/beers" className='link'>
                <img src={beers} alt="beers" />
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos quisquam velit reiciendis officia, totam commodi ipsum
                    quo praesentium id corporis, voluptates ipsa. Incidunt cumque
                    repudiandae accusamus pariatur optio quas omnis.</p>
            </Link>
            <Link to="/random-beer" className='link'>
                <img src={randomBeer} alt="random-beer" />
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos quisquam velit reiciendis officia, totam commodi ipsum
                    quo praesentium id corporis, voluptates ipsa. Incidunt cumque
                    repudiandae accusamus pariatur optio quas omnis.</p>
            </Link>
            <Link to="/new-beer" className='link'>
                <img src={newBeer} alt="new-beer" />
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos quisquam velit reiciendis officia, totam commodi ipsum
                    quo praesentium id corporis, voluptates ipsa. Incidunt cumque
                    repudiandae accusamus pariatur optio quas omnis.</p>
            </Link>
        </div>
    )
}               