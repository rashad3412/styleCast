import { useState } from "react";
import WeatherCard from "../components/WeatherCard.jsx";
import WeatherDisplay from "../components/WeatherDisplay.jsx";
import { fetchWeatherData } from "../services/weatherApi";
import { fetchLocationData } from "../services/locationApi";
import bgImg from "../assets/bgImg.png";

function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const statesByTimeZone = {
    "Eastern Time": ["New York", "Florida", "Virginia", "North Carolina"],
    "Central Time": ["Texas", "Illinois", "Louisiana", "Minnesota"],
    "Mountain Time": ["Colorado", "Arizona", "Utah", "Montana"],
    "Pacific Time": ["California", "Oregon", "Washington", "Nevada"],
  };

  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);

    if (state) {
      try {
        setLoading(true);
        setError(null);

        // Fetch location data for the selected state
        const location = await fetchLocationData(state);
        const { latt: latitude, longt: longitude } = location;
        console.log(location);

        // Fetch weather data using the coordinates
        const weather = await fetchWeatherData(latitude, longitude);

        setLocationData(location);
        setWeatherData(weather);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch weather data. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#40666a] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay for background */}
      <div className="absolute inset-0 bg-[#40666a] opacity-95 z-0"></div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center relative z-10">
        <p className="mt-10 text-center text-[#C9E8E0]">
          Select a state from the dropdown menu to view the weather.
        </p>

        {/* Dropdown Menu */}
        <div className="mt-6">
          <label htmlFor="timezone" className="text-[#C9E8E0] text-lg">
            Select Time Zone:
          </label>
          <select
            id="timezone"
            className="ml-2 p-2 bg-white text-gray-800 rounded shadow"
            onChange={handleStateChange}
            value={selectedState}
          >
            <option value="">-- Select a State --</option>
            {Object.entries(statesByTimeZone).map(([timeZone, states]) => (
              <optgroup key={timeZone} label={timeZone}>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <p className="mt-4 text-[#C9E8E0]">Loading weather data...</p>
        )}

        {/* Error Message */}
        {error && <p className="mt-4 text-red-500">{error}</p>}

        {/* Display Weather and Location Info */}
        {weatherData && locationData && (
          <div className="mt-6">
            <WeatherCard weatherData={weatherData} />
            <WeatherDisplay weatherData={weatherData} />
            <p
              className="mt-4 text-center text-[#C9E8E0] text-lg font-semibold tracking-wide 
              bg-[#40666A]/80 px-4 py-2 rounded-lg shadow-md border border-[#C9E8E0]/40"
            >
              {" "}
              {locationData.standard?.city || "USA"}
            </p>
          </div>
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
