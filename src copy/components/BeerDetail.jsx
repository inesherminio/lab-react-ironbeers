function BeerDetail({ details }) {
  return (
    <div className="details">
      <img src={details.image_url} alt="" />
      <div className="details-header">
        <div>
          <h2>{details.name}</h2>
          <p>{details.tagline} </p>
        </div>
        <div>
          <p> {details.attenuation_level} </p>
          <span>{details.first_brewed} </span>
        </div>
      </div>
      <div className="description">
        <span>{details.description} </span>
        <p>{details.contributed_by} </p>
      </div>
    </div>
  );
}

export default BeerDetail;
