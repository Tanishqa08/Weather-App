import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({ updateWeather }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ddb1889aa181f72e5dfe5ff02a78ea86";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
                city: city,
                temp: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newData = await getWeatherInfo();
            updateWeather(newData);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange} />
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{ color: "red" }}>No such place in our API !</p>}
            </form>
        </div>
    );
}
