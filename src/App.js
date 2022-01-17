import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterList from "./FilterList";
import "./Style.css";

const App = () => {
  const [allData, setAllData] = useState([]);
  const [typedName, setTypedName] = useState("");

  // Getting data from server
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllData(response.data);
    });
  }, []);

  // Controlling input values
  const handleTypedName = (event) => {
    setTypedName(event.target.value);
  };
  return (
    <div className="body">
      <div className="container">
        <h2 className="headings">
          Search basic information of {allData.length} countries{" "}
        </h2>
        <input
          placeholder="Enter country name here"
          value={typedName}
          onChange={handleTypedName}
          className="input-bar"
        />
        <h2 className="headings">List of countries below:</h2>
        <FilterList allData={allData} typedName={typedName} />
      </div>
    </div>
  );
};

export default App;
