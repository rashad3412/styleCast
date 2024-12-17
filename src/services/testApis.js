import { fetchLocationData, fetchWeatherData } from "./locationApi.js";

const testCityWeather = async (city) => {
  try {
    // Step 1: Fetch Location Data
    console.log(`Fetching location data for ${city}...`);
    const locationData = await fetchLocationData(city);

    if (!locationData.latt || !locationData.longt) {
      throw new Error("Invalid location data received");
    }

    const latitude = locationData.latt;
    const longitude = locationData.longt;

    console.log(
      `Coordinates for ${city}: Latitude ${latitude}, Longitude ${longitude}`
    );

    // Step 2: Fetch Weather Data
    console.log("Fetching weather data for the location...");
    const weatherData = await fetchWeatherData(latitude, longitude);

    console.log("Weather data received:", weatherData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Test the function with a city name
testCityWeather("zebra");
