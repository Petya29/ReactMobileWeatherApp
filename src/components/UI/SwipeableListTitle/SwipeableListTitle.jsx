import React from 'react';
import { useSelector } from "react-redux";
import classes from './SwipeableListTitle.module.css';

export default function SwipeableListTitle(props) {

    const units = useSelector(state => state.global.units);

    const formatTitle = (title) => {
        if (title === 'wind') {
            return `Wind speed, ${units.windSpeed.id === 1 ? 'm/sec' : 'mil/hour'}`;
        } else if (title === 'humidity') {
            return `Humidity, %`;
        } else if (title === 'pressure') {
            return `Pressure, mmHg`;
        }
    }

    return (
        <div className={classes.weatherSwipeWind} style={{ top: (props.top + '%') }}>
            <div className={classes.weatherSwipeTitle}>
                <hr />
                <div>{formatTitle(props.title)}</div>
            </div>
        </div>
    )
}
