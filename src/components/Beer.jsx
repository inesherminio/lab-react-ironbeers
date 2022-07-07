import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';

export default function Beer({ name, image_url, tagline, contributed_by, _id }) {
    return (
        <>
            <Link to={`/beers/${_id}`} className='link beer'>
                <img src={image_url} alt={name} className='beerPic'/>
                <div className='beerText'>
                    <h2>{name}</h2>
                    <h3 className='gray'>{tagline}</h3>
                    <p><b>Created by: </b>{contributed_by}</p>
                </div>
            </Link>
            <hr className='line'></hr>
        </>
    )
}