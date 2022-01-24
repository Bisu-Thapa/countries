import React, { useState } from "react";
import Info from "./Info";

const CountriesInfo = ({ matchedNames, allData }) => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [country, setCountry] = useState({
    name: "",
    val: {},
  });

  const handleShowBtn = (name) => {
    setIsBtnClicked(true);
    setCountry({
      name: name,
      val: allData.filter((data) => data.name.common === name),
    });
  };

  return (
    <div className="show">
      {isBtnClicked ? (
        <Info matchForOne={country.val} matchedNames={country.name} />
      ) : (
        matchedNames.map((name) => (
          <li key={name} className="list">
            {name} <button onClick={() => handleShowBtn(name)} className="show-btn">Show</button>
          </li>
        ))
      )}
    </div>
  );
};

export default CountriesInfo;
