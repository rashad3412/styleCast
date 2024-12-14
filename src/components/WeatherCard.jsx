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
    <div className="rounded-lg shadow-lg mt-10 p-6 bg-[#c9e8e0] w-72 mx-auto border border-blue-100">
      <h2 className="text-3xl text-center text-[#40666A] mb-6 tracking-wide font-poppins font-extrabold">
        StyleCast
      </h2>

      {/* Weather Icon Section */}
      <div className="mt-4 flex justify-center animate-pulse">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png" // Transparent weather icon
          alt="Weather Icon"
          className="h-16 w-16 transform hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Additional Weather Info */}
      {weatherData && weatherData.hourly && (
        <div className="mt-4">
          <p className="text-xl text-center text-[#40666A] mb-6 font-mono tracking-wide">
            {/* Placeholder for current weather */}
            {weatherData.hourly.weathercode
              ? "Clear Sky"
              : "Weather Unavailable"}
          </p>

          {/* Date, Day, and Time Section */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-light font-roboto text-[#40666A] tracking-wider">
              {dayName}
            </p>

            <p className="text-lg font-light mt-4 text-[#40666A] font-roboto tracking-widest uppercase">
              {time}
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
