import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard.jsx";
import WeatherDisplay from "../components/WeatherDisplay.jsx";
import { fetchWeatherData } from "../services/weatherApi";
import bgImg from "..//assets/bgImg.png";

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
    <div
      className="min-h-screen flex flex-col bg-[#40666a] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImg})`, // Using imported image here
      }}
    >
      {/* Overlay for background only */}
      <div className="absolute inset-0 bg-[#40666a] opacity-95 z-0"></div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Additional Text */}
          <p className="mt-10 text-center text-[#C9E8E0]">
            Check out real-time weather forecasts and outfit suggestions
            tailored to your location.
          </p>
        </div>
        <WeatherCard weatherData={weatherData} />
        <WeatherDisplay weatherData={weatherData} />
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#C9E8E0] text-[#40666A] text-center py-4 z-10">
        © 2024 StyleCast. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
