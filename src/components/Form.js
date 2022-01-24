import React, { useState } from "react";
import FilterList from "./FilterList";
import "./Style.css";

const Form = ({ length, allData }) => {
  const [typedName, setTypedName] = useState("");

  // Controlling input values
  const handleTypedName = (event) => {
    setTypedName(event.target.value);
  };

  return (
    <div className="container">
      <div className="frame">
        <h1>Countries Info App</h1>
        <form className="form">
          <h4>Search basic information of {length} countries</h4>
          <input
            placeholder="Enter country name here"
            value={typedName}
            onChange={handleTypedName}
          />
        </form>
        <div className="main">
          <h2>Basic information</h2>
          <FilterList allData={allData} typedName={typedName} />
        </div>
      </div>
    </div>
  );
};

export default Form;
