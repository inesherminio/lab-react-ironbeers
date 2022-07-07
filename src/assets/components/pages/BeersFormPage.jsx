import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function BeersFormPage() {
  const navigate = useNavigate();
  const [ values, setValues ] = useState({
    name: "",
    tagline: "",
    attenuation_level: "",
    /* Syntax is very important! Bellow you have a typo, so no new beer will be publish because
    the API is looking for first_brewed and you're sending frist_brewed */
    frist_brewed: "",
    description: "",
    contributed_by: ""
  })

  const handleChange = (e) => {
    // setValues(({ ...values, [e.target.name]: e.target.value }))
    const { name, value } = e.target;
    setValues(({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers", values);
      setValues({
        name: "",
        tagline: "",
        attenuation_level: "",
        frist_brewed: "",
        description: "",
        contributed_by: ""
      })
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  } 
  return (
    <div>
      <h1>Create New Beer</h1>

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
          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input onChange={handleChange} type="text" name="attenuation_level" value={values.attenuation_level} />
        </div>


        <div>
          <label htmlFor="first_brewed">First Brewed :</label>
          <input onChange={handleChange} type="text" name="first_brewed" value={values.first_brewed}/>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input onChange={handleChange} type="text" name="debt" value={values.description}/>
        </div>

        <div>
          <label htmlFor="contributed_by">Contributed by :</label>
          <input onChange={handleChange} type="text" name="debt" value={values.contributed_by}/>
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
