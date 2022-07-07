import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Beer from '../components/Beer';

export default function AllBeersPage(){
    const [ beers, setBeers ] = useState(null);
    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(response.data);
                console.log(response);
            } catch (error) {
               console.error(error); 
            }
        }
        fetchBeers();
    }, [])

    const displayBeers = () => {
        return beers.map((beer) => (
            <Beer {...beer} key={beer._id} />
        ))
    }

    return (
        <>
        <Header />
        {
            beers ? displayBeers() : <p>Loading...</p>
        }
        </>
    )
}