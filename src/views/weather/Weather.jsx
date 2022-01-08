import React, { useEffect } from 'react';
import M from 'materialize-css';
import { useSelector } from "react-redux";
import CurrentWeather from '../../components/currentWeather/CurrentWeather';
import ForecastWeather from '../../components/forecastWeather/ForecastWeather';
import WeatherScreen from '../../components/weatherScreen/WeatherScreen';
import MissData from '../errors/MissData';

export default function Weather() {

    const currentWeather = useSelector(state => state.weatherReducer.currentWeather);
    const forecastWeather = useSelector(state => state.weatherReducer.forecastWeather);

    useEffect(() => {
        const elemsTabs = document.querySelectorAll('.tabs');
        M.Tabs.init(elemsTabs, {});
        const tabsContent = document.querySelectorAll('.tab-content');
        if (tabsContent.length) {
            tabsContent.forEach((el) => {
                el.style.height = (window.innerHeight * 45 / 100).toFixed(0) + 'px';
            });
        }
    }, [])

    return (
        <div className="weather-page-wrap">
            {Object.keys(currentWeather).length && Object.keys(forecastWeather).length
                ?
                <div>
                    <WeatherScreen />
                    <div className="weather-swipe">
                        <ul id="tabs" className="tabs">
                            <li className="tab col s3"><a className="active" href="#Today">Today (24h)</a></li>
                            <li className="tab col s3"><a href="#Forecast">Forecast</a></li>
                        </ul>
                        <div id="Today" className="tab-content col s12"><CurrentWeather /></div>
                        <div id="Forecast" className="tab-content col s12"><ForecastWeather /></div>
                    </div>
                </div>
                :
                <MissData />
            }
        </div>
    )
}
