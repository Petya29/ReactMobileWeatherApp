import React from 'react';
import { useSelector } from "react-redux";
import SwipeableList from '../UI/SwipeableList/SwipeableList';
import WeatherItem from './WeatherItem';
import SwipeableListTitle from '../UI/SwipeableListTitle/SwipeableListTitle';
import { prepareCurrentWeather } from '../../helpers/weather';

export default function CurrentWeather() {

    const forecastWeather = useSelector(state => state.weather.forecastWeather);

    return (
        <div className="current-weather">
            <SwipeableList items={prepareCurrentWeather(forecastWeather)}>
                <WeatherItem />
            </SwipeableList>
            <SwipeableListTitle title="wind" top={38} />
            <SwipeableListTitle title="humidity" top={59} />
            <SwipeableListTitle title="pressure" top={79} />
        </div>
    )
}
