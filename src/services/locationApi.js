// locationApi.js
export const fetchLocationData = async () => {
  const apiUrl =
    "https://geocode.xyz/37.7749,-122.4194?geoit=json&auth=872062381529377569192x102706";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the data to be used elsewhere
  } catch (error) {
    console.error("Error fetching location data:", error);
    throw error; // Propagate the error
  }
};
