import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { cloudyWeather, sunnyWeather } from '../../helpers/config';
import { formatMainDate, getTime, calculateInterval } from '../../helpers/dates';
import { celsiusToFahrenheit, meterSecToMileshour } from '../../helpers/units';

export default function WeatherScreen() {

    const currentWeather = useSelector(state => state.weather.currentWeather);
    const units = useSelector(state => state.global.units);

    const [time, setTime] = useState(getTime());

    let bgSelector = useRef((choice) => { });
    bgSelector = (choice) => {

        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20

        let bgClass = '';
        if (cloudyWeather.includes(currentWeather.weather.main)) {
            bgClass = isDayTime ? 'bg-wrapper-cloudy' : 'bg-wrapper-night-cloudy';
        } else if (sunnyWeather.includes(currentWeather.weather.main)) {
            bgClass = isDayTime ? 'bg-wrapper-sunny' : 'bg-wrapper-night-clear-sky';
        }

        const el = document.querySelector('.bg-wrapper');
        if (choice) {
            el.classList.add(bgClass);
        } else {
            el.classList.remove(bgClass);
        }

    }

    let clock = useRef(() => { });
    clock = () => {
        setTime(getTime());
        setTimeout(clock, calculateInterval() * 1000);
    }

    const firstLetterToUppercase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        bgSelector(true);
        clock();
        return () => {
            bgSelector(false);
        }
    }, []);

    return (
        <div className="weather-screen">
            <div className="center-align weather-screen-date">{formatMainDate()} {time}</div>
            <div className="center-align weather-screen-temperature">
                <span>
                    <span className="weather-screen-temperature-number">{celsiusToFahrenheit(currentWeather.main.temp, units.temp.id).toFixed(0)}</span>
                    <span className="temperature-sup">
                        {units.temp.id === 1
                            ?
                            <span>&#8451;</span>
                            :
                            <span>&#8457;</span>
                        }
                    </span>
                </span>
                <span className="weather-icon">
                    <img
                        src={`${process.env.REACT_APP_BASE_API_IMAGES_URL}${currentWeather.weather.icon}@2x.png`}
                        alt="weather_icon"
                        className="weather-screen-icon"
                    />
                </span>
            </div>
            <div className="weather-screen-dascription center-align">
                <div>{firstLetterToUppercase(currentWeather.weather.description)}</div>
                <div>
                    Wind {meterSecToMileshour(currentWeather.wind.speed, units.windSpeed.id).toFixed(0)}
                    {units.windSpeed.id === 1
                        ?
                        ' m/sec'
                        :
                        ' mil/hour'
                    }
                </div>
            </div>
        </div>
    )
}
