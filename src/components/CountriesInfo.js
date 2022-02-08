import React, { useState } from 'react';
import Info from './Info';

const CountriesInfo = ({ matchedNames, allData }) => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [country, setCountry] = useState({
    name: '',
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
          <div key={name} className="filtered-countries">
            <button onClick={() => handleShowBtn(name)} className="show-btn">
              {name}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CountriesInfo;
