import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const WeatherDisplay = ({ weatherData }) => {
  const [currentWeather, setCurrentWeather] = useState("");

  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    61: "Slight rain",
    71: "Slight snow",
    95: "Thunderstorm",
    // Add other codes as needed
  };

  useEffect(() => {
    if (weatherData && weatherData.hourly) {
      const currentTime = new Date().toISOString().slice(0, 13); // Current hour
      const currentIndex = weatherData.hourly.time.findIndex((time) =>
        time.startsWith(currentTime)
      );
      const weatherCode = weatherData.hourly.weathercode[currentIndex];
      setCurrentWeather(weatherDescriptions[weatherCode] || "Unknown Weather");
    }
  }, [weatherData]);

  return null;
};

WeatherDisplay.propTypes = {
  weatherData: PropTypes.shape({
    hourly: PropTypes.shape({
      time: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of time strings
      weathercode: PropTypes.arrayOf(PropTypes.number).isRequired, // Array of weather codes
    }).isRequired,
  }).isRequired,
};

export default WeatherDisplay;
