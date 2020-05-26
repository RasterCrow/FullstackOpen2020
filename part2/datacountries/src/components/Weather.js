import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather = ({location}) => {
    
    const [locationWeather,setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    const req = `http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`

    useEffect(() => {
        axios
        .get(req)
        .then(response => {
            setWeather(response.data)
        })
      },[])

    if (locationWeather.location === undefined) {
        return <div>Getting the weather..</div>
    }else{
        return (
            <div>
                <h3>Weather in {locationWeather.location.name}</h3>
                <div>
                    <b>Temperature:</b> {locationWeather.current.temperature}°C
                </div>
                <img
                    src={locationWeather.current.weather_icons[0]}
                    alt='weather image'
                />
                <div>
                <b>Wind:</b> {locationWeather.current.wind_speed}kph, direction: {locationWeather.current.wind_dir}
                </div>
            </div>
        )
    }
}

export default Weather