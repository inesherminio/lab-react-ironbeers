import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import SingleBeer from '../components/SingleBeer';

export default function BeerPage(){
    const { id } = useParams();
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
        <>
        <Header />
        {
            beer ? <SingleBeer {...beer} /> : <p>Loading beer...</p>   
        }
        </>
    )
}