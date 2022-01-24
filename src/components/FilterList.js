import React from "react";
import CountriesInfo from "./CountriesInfo";
import Info from "./Info";

const FilterList = ({ allData, typedName }) => {
  // Accessing countries info and storing it to variables
  const listOfCountryNames = allData.map((all) => all.name.common);
  const defaultList = listOfCountryNames.map((name) => (
    <li key={name}>{name}</li>
  ));

  // To filter the list we are using regex and filter method
  const regex = new RegExp(typedName, "i");
  const matchedNames = listOfCountryNames.filter((names) => names.match(regex));
  const matchForOne = allData.filter((all) => all.name.common.match(regex));

  // Using ternary statement and returning values
  return (
    <div className="filter-container">
      {typedName === "" ? (
        <ol>{defaultList}</ol>
      ) : matchedNames.length > 10 ? (
        "You have more than 10 countries. Please enter more specific name."
      ) : matchedNames.length === 1 ? (
        <Info matchForOne={matchForOne} matchedNames={matchedNames} />
      ) : (
        <CountriesInfo matchedNames={matchedNames} allData={allData} />
      )}
    </div>
  );
};

export default FilterList;
