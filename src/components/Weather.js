import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const Weather = ({ capitalCity }) => {
  const my_api = process.env.REACT_APP_MY_API_KEY;
  // Declaring useState variable to get data from API
  const [weatherData, setWeatherData] = useState({
    temp: '',
    speed: '',
    icon: '',
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
      <div className="results">
        <h3>Temperature:</h3>
        <h3>{weatherData.temp} celsius</h3>
      </div>

      <div className="results">
        <h3>Wind:</h3>
        <h3>{weatherData.speed} mph</h3>
      </div>
      <img alt="Weather icon" src={weatherData.icon} className="icon" />
    </div>
  );
};

export default Weather;
