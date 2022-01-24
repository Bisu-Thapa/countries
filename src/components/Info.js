import React from "react";
import Weather from "./Weather";
import "./Style.css";

const Info = ({ matchForOne, matchedNames }) => {
  const flags = matchForOne.map((one) => (
    <img
      src={one.flags.png}
      key={one.flags.png}
      alt="Flags"
      className="flags"
    />
  ));
  const capital = matchForOne.map((one) => (
    <p key={one.capital}>{one.capital}</p>
  ));
  const population = matchForOne.map((one) => (
    <p key={one.population}>{one.population}</p>
  ));
  const languages = Object.values(matchForOne[0].languages).map((one) => (
    <li key={one}>{one}</li>
  ));
  const capitalCity = matchForOne.map((one) => one.capital);

  return (
    <div className="info-container">
      <div className="info">
        <h3 className="name">{matchedNames}</h3>
        <div className="results">
          <h4>Capital:</h4>
          {capital}
        </div>
        <div className="results">
          <h4>Population:</h4>
          {population}
        </div>
        <h4>Languages</h4>
        <span>{languages}</span>
        <h3>Weather in {capitalCity}</h3>
        <Weather capitalCity={capitalCity} />
      </div>
      <span>{flags}</span>
    </div>
  );
};

export default Info;
