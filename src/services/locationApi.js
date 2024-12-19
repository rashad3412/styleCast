export const fetchLocationData = async (state) => {
  // Use the state name to fetch data (you can append 'state' for more context if needed)
  const apiUrl = `https://geocode.xyz/${state}?geoit=json&auth=872062381529377569192x102706`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the location data
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error;
  }
};

const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherData(latitude, longitude) {
  const endpoint = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&hourly=weathercode&timezone=auto`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the weather data
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
