import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const fetchAllBeers = async () => {
    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    if (response.ok) {
      const allBeers = await response.json();
      setBeers(allBeers);
      console.log(allBeers);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  return (
    <>
      {beers.map((oneBeer) => {
        return (
          <Link to={`/beers/${oneBeer._id}`} key={oneBeer._id} style={{display: "flex", marginBottom: "50px"}}>
            <div>
              <img src={oneBeer.image_url} style={{ height: "150px" }} />
            </div>
            <div style={{marginLeft: "50px"}}>
              <h3> {oneBeer.name} </h3>
              <p style={{marginBottom: "0px"}}>{oneBeer.tagline}</p>
              <p style={{marginTop: "10px"}}>Created by: {oneBeer.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default AllBeersPage;
