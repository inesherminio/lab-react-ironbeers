import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BeerDetailsStyle from "./BeerDetails.css";
import BeerDetail from "../../components/BeerDetail";

function BeerDetails() {
  const { id } = useParams();
  console.log(id);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${id}`
        );
        setDetails(response.data);
        /* console.log(response.data); */
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [id]);

  const displayDetails = () => {
    return <BeerDetail details={details}></BeerDetail>;
  };

  return <div>{details ? displayDetails() : <p>Loading...</p>}</div>;
}

export default BeerDetails;
