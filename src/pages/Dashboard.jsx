import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import WeatherCard from "../components/WeatherCard.jsx";
import WeatherDisplay from "../components/WeatherDisplay.jsx";
import { fetchWeatherData } from "../services/weatherApi";

function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherData(37.4316, -78.6569); // Coordinates for Virginia
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center ">
      <NavBar />

      {/* Introduction Section */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800 shadow-lg rounded-lg p-8 mt-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
            alt="StyleCast Icon"
            className="h-16 w-16 mb-4"
          />

          {/* Heading */}
          <h1 className="text-4xl font-bold text-blue-800 text-center drop-shadow-md">
            Welcome to StyleCast!
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl font-medium text-gray-700 text-center">
            Your daily guide to staying stylish, no matter the weather.
          </p>

          {/* Additional Text */}
          <p className="mt-2 text-center text-gray-600">
            Check out real-time weather forecasts and outfit suggestions
            tailored to your location.
          </p>

          {/* Decorative Divider */}
          <div className="w-16 h-1 bg-blue-700 rounded-full mt-4"></div>
        </div>
        <WeatherCard weatherData={weatherData} />
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
}

export default Dashboard;
