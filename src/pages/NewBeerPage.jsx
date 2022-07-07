import Header from '../components/Header';
import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function NewBeerPage() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', values);
            setValues({
                name: "",
                tagline: "",
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: "",
                contributed_by: ""
            })
            navigate("/beers");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header />
            <h1>Add new beer</h1>

            <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} type="text" name="name" value={values.name} />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input onChange={handleChange} type="text" name="tagline" value={values.tagline} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input onChange={handleChange} type="text" name="description" value={values.description}/>
        </div>
        <div>
          <label htmlFor="first_brewed">First Brewed:</label>
          <input onChange={handleChange} type="text" name="first_brewed" value={values.first_brewed}/>
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewers Tips:</label>
          <input onChange={handleChange} type="text" name="brewers_tips" value={values.brewers_tips}/>
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input onChange={handleChange} type="number" name="attenuation_level" value={values.attenuation_level}/>
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed By:</label>
          <input onChange={handleChange} type="text" name="contributed_by" value={values.contributed_by}/>
        </div>

        <button type='submit'>Create</button>
      </form>
        </>
    )
}