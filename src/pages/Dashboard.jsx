import NavBar from "../components/NavBar";
// import WeatherCard from "../components/WeatherCard";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-400 to-blue-300">
      {/* NavBar */}
      <NavBar />
      {/* 
      Dashboard Content
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-6 w-11/12 max-w-4xl mt-6">
        <h1 className="text-gray-600 text-2xl font-extrabold mb-4">
          StyleCast Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome to your weather and outfit suggestion app. Let’s make sure
          you’re dressed perfectly for the day!
        </p>
      </div> */}
      {/* WeatherCard */}
      {/* <div className="mt-6">
        <WeatherCard />
      </div> */}
    </div>
  );
}

export default Dashboard;
