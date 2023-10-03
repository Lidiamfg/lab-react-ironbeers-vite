import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [beer, setBeer] = useState();

  const fetchOneBeer = async () => {
    const response = await fetch(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    if (response.ok) {
      const oneBeer = await response.json();
      console.log(oneBeer);
      setBeer(oneBeer);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, []);

  return beer ? (
    <div style={{ textAlign: "left" }}>
      <img src={beer.image_url} style={{ height: "350px" }} />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <h3>{beer.name}</h3>
        <p>{beer.attenuation_level}</p>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  ) : (
    <>
      <h1>loading...</h1>
    </>
  );
}

export default BeerDetailsPage;
