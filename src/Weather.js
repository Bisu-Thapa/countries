import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capitalCity }) => {
  const my_api = process.env.REACT_APP_MY_API_KEY;
  // Declaring useState variable to get data from API
  const [weatherData, setWeatherData] = useState({
    temp: "",
    speed: "",
    icon: "",
  });
  // Using useEffect to get data from API
  useEffect(() => {
    let isSubscribed = true;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&units=metric&APPID=${my_api}`
      )
      .then((response) => {
        if (isSubscribed) {
          setWeatherData({
            temp: response.data.main.temp,
            speed: response.data.wind.speed,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          });
        }
      });
    return () => (isSubscribed = false);
  }, [capitalCity, my_api]);

  return (
    <div>
      <p>
        <strong>Temperature: </strong>
        {weatherData.temp} Celsius
      </p>
      <img alt="Weather icon" src={weatherData.icon} />
      <p>
        <strong>Wind: </strong>
        {weatherData.speed} mph
      </p>
    </div>
  );
};

export default Weather;
