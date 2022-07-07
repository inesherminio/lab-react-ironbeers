import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SingleBeer from '../components/SingleBeer';

export default function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null);
    useEffect(() => {
        const fetchBeer = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
                setRandomBeer(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchBeer();
    }, [])

    return (
        <>
            <Header />
            {
                randomBeer ? <SingleBeer {...randomBeer} /> : <p>Loading random beer...</p>
            }
        </>
    )
}