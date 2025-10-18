import React from "react";

const Weather = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-green-800 mb-3">
          ☀️ Weather Forecast
        </h2>
        <p className="text-gray-700">
          Check temperature, humidity, and rainfall forecast for your farm’s
          location.
        </p>
      </div>
      <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-all">
        View Weather
      </button>
    </div>
  );
};

export default Weather;
