import React, { useState } from "react";
import Info from "./Info";
import "./Style.css";

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
    <div>
      {isBtnClicked ? (
        <Info matchForOne={country.val} matchedNames={country.name} />
      ) : (
        matchedNames.map((name) => (
          <li key={name} className="btn-name">
            {name} <button onClick={() => handleShowBtn(name)}>Show</button>
          </li>
        ))
      )}
    </div>
  );
};

export default CountriesInfo;
