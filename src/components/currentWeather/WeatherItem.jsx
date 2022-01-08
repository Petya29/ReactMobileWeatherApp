import React from 'react';
import HumidityItem from '../UI/HumidityItem/HumidityItem';
import PressureItem from '../UI/PressureItem/PressureItem';
import TemperatureItem from '../UI/TemperatureItem/TemperatureItem';
import WindItem from '../UI/WindItem/WindItem';

export default function WeatherItem(props) {
    return (
        <div className="weather-item">
            <TemperatureItem weather={props.item} isFirst={props.isFirst} />
            <br /><br />
            <WindItem wind={props.item.wind} />
            <br /><br />
            <HumidityItem humidity={props.item.main.humidity} />
            <br /><br />
            <PressureItem pressure={props.item.main.pressure} />
        </div>
    )
}
