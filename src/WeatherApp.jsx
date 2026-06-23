import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({
        city: "Delhi",
        weather: "clear sky",
        feelsLike: 35.85,
        temp: 36.27,
        temp_min: 36.27,
        temp_max: 36.27,
        humidity: 27,
    });
    let updateWeatherData = (newData) => {
        setWeatherData(newData);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather App</h2>
            <SearchBox updateWeather={updateWeatherData} />
            <InfoBox info={weatherData} />
        </div>
    );
}