import PropTypes from "prop-types";

function WeatherCard({ weatherData }) {
  const now = new Date();

  const options = { weekday: "long" };
  const dayName = now.toLocaleDateString(undefined, options); // Full weekday name
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-lg shadow-lg mt-20 p-6 bg-white text-gray-800 w-60 mx-auto border border-blue-100 ">
      <h2 className="text-xl font-thin text-center text-gray-700 mb-4 tracking-widest ">
        StyleCast
      </h2>

      {/* Weather Icon Section */}
      <div className="mt-4 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
          alt="Weather Icon"
          className="h-16 w-16"
        />
      </div>

      {/* Additional Weather Info */}
      {weatherData && weatherData.hourly && (
        <div className="mt-4">
          <h3 className="text-lg font-thin text-center tracking-wider  text-gray-600">
            Current Weather
          </h3>
          <p className="text-xl text-center text-blue-500 mb-4 tracking-widest">
            {/* Placeholder for current weather */}
            {weatherData.hourly.weathercode
              ? "Clear Sky"
              : "Weather Unavailable"}
          </p>

          {/* Date, Day, and Time Section */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-thin text-gray-600">{dayName}</p>

            <p className="text-lg font-thin text-blue-500">{time}</p>
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
