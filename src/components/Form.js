import React, { useState, Fragment } from "react";
import FilterList from "./FilterList";

const Form = ({ length, allData }) => {
  const [typedName, setTypedName] = useState("");

  // Controlling input values
  const handleTypedName = (event) => {
    setTypedName(event.target.value);
  };

  return (
    <Fragment>
      <form>
        <label htmlFor="input">
          Search basic information of {length} countries
        </label>
        <input
          id="input"
          placeholder="Enter country name here"
          value={typedName}
          onChange={handleTypedName}
        />
      </form>
      <main>
        <h2>List of countries below:</h2>
        <FilterList allData={allData} typedName={typedName} />
      </main>
    </Fragment>
  );
};

export default Form;
