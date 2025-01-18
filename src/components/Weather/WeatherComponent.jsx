import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/WeatherComponent.css';

const API_KEY = 'YOUR_API_KEY_HERE';  // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default function WeatherComponent({ location = 'San Francisco' }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: location,
            appid: API_KEY,
            units: 'metric'
          }
        });
        setWeatherData(response.data);
      } catch (err) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, [location]);

  if (error) {
    return <div className="weather-error">{error}</div>;
  }

  if (!weatherData) {
    return <div className="weather-loading">Loading...</div>;
  }

  const { main, weather, wind } = weatherData;

  return (
    <div className="weather-component">
      <h2>Weather in {location}</h2>
      <div className="weather-info">
        <p>Temperature: {main.temp}°C</p>
        <p>Condition: {weather[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
}
