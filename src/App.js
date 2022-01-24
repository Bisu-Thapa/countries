import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Form from "./components/Form";

const App = () => {
  const [allData, setAllData] = useState([]);

  // Getting data from server
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllData(response.data);
    });
  }, []);

  return (
    <Fragment>
      <h1>Countries Info</h1>
      <Form length={allData.length} allData={allData} />
    </Fragment>
  );
};

export default App;
