import React from "react";
import Weather from "./Weather";

const Info = ({ matchForOne, matchedNames }) => {
  const flags = matchForOne.map((one) => (
    <img src={one.flags.png} key={one.flags.png} alt="Flags" className="flag" />
  ));
  const capital = matchForOne.map((one) => (
    <p key={one.capital}>
      <strong>Capital:</strong> {one.capital}
    </p>
  ));
  const population = matchForOne.map((one) => (
    <p key={one.population}>
      <strong>Population:</strong> {one.population}
    </p>
  ));
  const languages = Object.values(matchForOne[0].languages).map((one) => (
    <li key={one}>{one}</li>
  ));
  const capitalCity = matchForOne.map((one) => one.capital);

  return (
    <div>
      <h1>{matchedNames}</h1>
      <div>{flags}</div>
      <div>{capital}</div>
      <div>{population}</div>
      <h2>Languages</h2>
      <div>{languages}</div>
      <h2>Weather in {capitalCity}</h2>
      <Weather capitalCity={capitalCity} />
    </div>
  );
};

export default Info;
