import React from 'react';
import { useSelector } from "react-redux";
import SwipeableList from '../UI/SwipeableList/SwipeableList';
import WeatherItem from './WeatherItem';
import SwipeableListTitle from '../UI/SwipeableListTitle/SwipeableListTitle';
import { prepareForecastWeather } from '../../helpers/weather';

export default function ForecastWeather() {

    const forecastWeather = useSelector(state => state.weatherReducer.forecastWeather);

    return (
        <div className="forecast-weather">
            <SwipeableList items={prepareForecastWeather(forecastWeather)}>
                <WeatherItem />
            </SwipeableList>
            <SwipeableListTitle title="wind" top={38} />
            <SwipeableListTitle title="humidity" top={59} />
            <SwipeableListTitle title="pressure" top={79} />
        </div>
    )
}
