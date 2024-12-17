const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherData(latitude, longitude) {
  const endpoint = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&hourly=weathercode&timezone=auto`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
