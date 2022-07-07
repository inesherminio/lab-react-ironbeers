import React from 'react'
import '../App.css';

export default function SingleBeer({ name, image_url, tagline, contributed_by, attenuation_level, first_brewed, description }) {
    return (
        <div className='singleBeer'>
            <img src={image_url} alt={name} className='singleBeerPic'/>
            <div>
                <div className='row'>
                 <h2>{name}</h2>   
                 <h2 className='gray'>{attenuation_level}</h2>
                </div>
                <div className='row'>
                    <h3 className='gray'>{tagline}</h3>
                    <h3><b>{first_brewed}</b></h3>
                </div>
                <p>{description}</p>
                <p className='gray'>{contributed_by}</p>
            </div>
        </div>
    )
}