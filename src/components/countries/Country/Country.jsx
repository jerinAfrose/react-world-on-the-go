import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.area.area);

  const handleVisited = () => {
    // way-1
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // way-2
    // setVisited(visited ? false : true);
    // way-3
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area} <br />
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "NotVisited"}
      </button>
    </div>
  );
};

export default Country;
