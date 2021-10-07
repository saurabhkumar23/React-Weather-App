import React, {useState} from "react";
import "./weather.css";

function Weather() {

    const [city,setCity] = useState('')
    const [country,setCountry] = useState('')
	const [weather, setWeather] = useState(null)
	const APIKEY = "f72d3208d111d02f19aabb823be0c462"

	function fetchWeather(){
        if(city.trim() == '' || country.trim() == ''){
            alert('fill both the fields!')
            return
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
            data.main.temp = ((data.main.temp - 32) * 5/9).toFixed(2)
            data.main.temp_min = ((data.main.temp_min - 32) * 5/9).toFixed(2)
            data.main.temp_max = ((data.main.temp_max - 32) * 5/9).toFixed(2)
            setWeather(data)
        })
        .catch((e) => alert(e))
	}

	return (
        <div className='container'>
            <h1>REACT WEATHER APP</h1>
            <input  type='text'
					placeholder='City'
					name='city'
                    value={city}
					onChange={(e) => setCity(e.target.value)}
                />
            <input
					type='text'
					placeholder='Country'
					name='country'
                    value={country}
					onChange={(e) => setCountry(e.target.value)}
				/>
            <button className='getweather' onClick={(e) => fetchWeather(e)}>Submit</button>

            {
                weather ? 
                <div className='display'>
                    <div className='main-temp'>
                        <h1>{weather.main.temp}&deg;</h1>
                        <h5>Temperature</h5>
                    </div>
                    <div className='sec-temp'>
                        <div>
                            <h1>{weather.main.temp_min}&deg;</h1>
                            <h5>Min. Temperature</h5>
                        </div>
                        <div>
                            <h1>{weather.main.temp_max}&deg;</h1>
                            <h5>Max. Temperature</h5>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
	);
}

export default Weather;
