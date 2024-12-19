import PropTypes from "prop-types";
import partlyCloudy from "../assets/partlyCloudy.png";
import fog from "../assets/fog.png";
import sun from "../assets/sun.png";
import clouds from "../assets/clouds.png";
import lightRain from "../assets/lightRain.png";
import snowy from "../assets/snowy.png";

function WeatherCard({ weatherData }) {
  // Extract current weather condition and corresponding icon
  const getWeatherCondition = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return {
          condition: "Sunny",
          icon: sun,
        }; // Clear Sky Icon

      case 1:
      case 2:
        return {
          condition: "Partly Cloudy",
          icon: partlyCloudy,
        }; // Partly Cloudy Icon
      case 3:
        return {
          condition: "Cloudy",
          icon: clouds,
        }; // Cloudy Icon
      case 45:
      case 48:
        return {
          condition: "Foggy",
          icon: fog,
        }; // Foggy Icon
      case 51:
      case 53:
      case 55:
        return {
          condition: "Light Rain",
          icon: lightRain,
        }; // Light Rain Icon
      case 56:
      case 57:
        return {
          condition: "Heavy Rain",
          icon: lightRain,
        }; // Heavy Rain Icon
      case 61:
      case 63:
        return {
          condition: "Light Showers",
          icon: lightRain,
        }; // Light Showers Icon
      case 66:
      case 67:
        return {
          condition: "Freezing Rain",
          icon: lightRain,
        }; // Freezing Rain Icon
      case 71:
      case 73:
      case 75:
        return {
          condition: "Light Snow",
          icon: snowy,
        }; // Light Snow Icon
      case 77:
        return {
          condition: "Snow Showers",
          icon: snowy,
        }; // Snow Showers Icon
      case 80:
      case 81:
      case 82:
        return {
          condition: "Heavy Showers",
          icon: snowy,
        }; // Heavy Showers Icon
      default:
        return {
          condition: "Weather Unavailable",
          icon: "https://cdn-icons-png.flaticon.com/512/1163/1163660.png",
        }; // Default icon
    }
  };

  const { condition, icon } = getWeatherCondition(
    weatherData.hourly.weathercode[0]
  );

  return (
    <div className="rounded-lg shadow-lg mt-10 p-6 bg-[#c9e8e0] w-72 mx-auto border border-blue-100 animate-fade-in">
      <h2 className="text-3xl text-center text-[#40666A] mb-6 tracking-wide font-poppins font-extrabold">
        StyleCast
      </h2>

      {/* Weather Icon Section */}
      <div className="mt-4 flex justify-center">
        <img
          src={icon} // Use the icon for the current weather condition
          alt={condition}
          className="h-16 w-16 transform hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Additional Weather Info */}
      {weatherData && weatherData.hourly && (
        <div className="mt-4">
          <p className="text-xl text-center text-[#40666A] mb-6 font-mono tracking-wide">
            {condition} {/* Display dynamic weather condition */}
          </p>

          {/* Date, Day, and Time Section */}
          <div className="flex flex-col items-center">
            {/* Display current day */}
            <p className="text-lg font-light font-roboto text-[#40666A] tracking-wider">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>

            {/* Display current time */}
            <p className="text-lg font-light mt-4 text-[#40666A] font-roboto tracking-widest uppercase">
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

WeatherCard.propTypes = {
  weatherData: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    hourly: PropTypes.shape({
      time: PropTypes.arrayOf(PropTypes.string),
      weathercode: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
  }).isRequired,
};

export default WeatherCard;
