import { useState, useEffect } from "react";
import WeatherCard from "../components/WeatherCard.jsx";
import WeatherDisplay from "../components/WeatherDisplay.jsx";
import { fetchWeatherData } from "../services/weatherApi";
import { fetchLocationData } from "../services/locationApi"; // Import the location data fetch function
import bgImg from "..//assets/bgImg.png";

function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null); // State for location data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherAndLocationData = async () => {
      try {
        setLoading(true);

        // Fetch location data
        const location = await fetchLocationData();

        // Optionally log the location to ensure it's correct
        console.log("Location Data:", location);

        // Fetch weather data using coordinates from location
        const { latt: latitude, longt: longitude } = location; // Extract latitude and longitude
        const weather = await fetchWeatherData(latitude, longitude);

        // Update state
        setLocationData(location);
        setWeatherData(weather);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeatherAndLocationData();
  }, []);

  if (loading) {
    return <div>Loading weather and location data...</div>;
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
        <div className="flex flex-col items-center animate-fade-in">
          {/* Additional Text */}
          <p className="mt-10 text-center text-[#C9E8E0]">
            Check out real-time weather forecasts and outfit suggestions
            tailored to your location.
          </p>
        </div>
        <WeatherCard weatherData={weatherData} />
        <WeatherDisplay weatherData={weatherData} />
        {locationData && (
          <p
            className="mt-2 text-center text-[#C9E8E0] text-lg font-semibold tracking-wide 
            bg-[#40666A]/80 px-4 py-2 rounded-lg shadow-md border border-[#C9E8E0]/40 
            animate-fade-in"
          >
            {locationData.city}, {locationData.state}
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#C9E8E0] text-[#40666A] text-center py-4 z-10">
        © 2024 StyleCast. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;
