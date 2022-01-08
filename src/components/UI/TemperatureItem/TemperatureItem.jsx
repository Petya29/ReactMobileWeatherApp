import React from 'react';
import { useSelector } from "react-redux";
import { createTimeFromDt_txt, formatMainDate, isStartOfDay } from '../../../helpers/dates';
import { celsiusToFahrenheit } from '../../../helpers/units';
import classes from './TemperatureItem.module.css';

export default function TemperatureItem(props) {

    const units = useSelector(state => state.weatherReducer.units);

    return (
        <div className={classes.temperatureItem}>
            {isStartOfDay(props.weather.dt_txt) || props.isFirst
                ?
                <div className={classes.temperatureItemDay}>{formatMainDate(props.weather.dt_txt)}</div>
                :
                <div className={classes.temperatureItemDay}></div>
            }
            <span className={classes.temperatureItemTime}>{createTimeFromDt_txt(props.weather.dt_txt)}</span>
            <br />
            <span className={classes.temperatureItemIcon}>
                <img
                    src={`${process.env.REACT_APP_BASE_API_IMAGES_URL}${props.weather.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                />
            </span>
            <div className={classes.temperatureItemTemp}>{celsiusToFahrenheit(props.weather.main.temp, units.temp.id).toFixed(0)}</div>
        </div>
    )
}
