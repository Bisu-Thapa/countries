import React from 'react';
import Weather from './Weather';
import './Style.css';

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
    <section className="info-container">
      <span className="flag-wrapper">
        <h1>{matchedNames}</h1>
        {flags}
      </span>

      <div className="basic">
        <span className="capital-population">
          <h2>Capital:</h2>
          <h3>{capital}</h3>
        </span>

        <span className="capital-population">
          <h2>Population:</h2>
          <h3>{population}</h3>
        </span>
      </div>

      <div className="language">
        <h2>Languages:</h2>
        <h3>{languages}</h3>
      </div>

      <div className="weather">
        <h2>Weather in {capitalCity}</h2>
        <Weather capitalCity={capitalCity} />
      </div>
    </section>
  );
};

export default Info;
