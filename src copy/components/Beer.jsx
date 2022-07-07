function Beer({ beer }) {
  return (
    <div className="beers">
      <img src={beer.image_url} alt="" />
      <div className="beers-item">
        <h2>{beer.name}</h2>
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
}

export default Beer;
