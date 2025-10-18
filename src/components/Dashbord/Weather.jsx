import React, { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = "Mumbai";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || "1ba772ce109561d482871658bb494843";
  const [searchCity, setSearchCity] = useState("");
  // Fetch weather data
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  // Animate with GSAP when weatherData loads
  useEffect(() => {
    if (weatherData) {
      // Animate main card
      gsap.from("#weather-card", {
        opacity: 2,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });


      gsap.to("#weather-icon", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });


      gsap.from("#weather-button", {
        opacity: 2,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "back.out(1.5)",
      });
    }
  }, [weatherData]);


  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny id="weather-icon" className="text-yellow-500 text-6xl" />;
      case "Clouds":
        return <WiCloud id="weather-icon" className="text-gray-400 text-6xl" />;
      case "Rain":
        return <WiRain id="weather-icon" className="text-blue-500 text-6xl" />;
      case "Snow":
        return <WiSnow id="weather-icon" className="text-blue-200 text-6xl" />;
      default:
        return <WiDaySunny id="weather-icon" className="text-yellow-500 text-6xl" />;
    }
  };

  if (!weatherData) {
    return (
      <div className="rounded-xl shadow-2xl p-6 flex justify-center items-center h-60">
        Loading Weather...
      </div>
    );
  }

  return (

    <>
    <div
      id="weather-card"
      className="rounded-xl shadow-2xl p-6 flex flex-col gap-5 justify-between hover:scale-105 transition-transform duration-500"
    >
      <div className="flex items-center gap-4">
        {getWeatherIcon(weatherData?.weather?.[0]?.main)}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-1">{city} Weather</h2>
          <p className="text-black">
            {weatherData?.weather?.[0]?.description} <br />
            Temperature: <span className="font-semibold">{weatherData?.main?.temp}°C</span> <br />
            Humidity: <span className="font-semibold">{weatherData?.main?.humidity}%</span> <br />
            Wind: <span className="font-semibold">{weatherData?.wind?.speed} m/s</span>
          </p>
        </div>
      </div>

    </div>
    </>
  );
};

export default Weather;
