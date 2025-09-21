import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.area.area);
  // console.log(handleVisitedCountries);

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
    handleVisitedCountries(country);
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
      <button
        onClick={() => {
          handleVisitedFlag(country.flags.flags.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
