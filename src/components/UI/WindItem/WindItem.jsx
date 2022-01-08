import React from 'react';
import { useSelector } from "react-redux";
import { degreeToCommonDirection, meterSecToMileshour } from '../../../helpers/units';
import classes from './WindItem.module.css';

export default function WindItem(props) {
    const units = useSelector(state => state.weatherReducer.units);

    return (
        <div className={classes.windItem}>
            <div>
                <i
                    className="material-icons"
                    style={{ transform: `rotate(${props.wind.deg}deg)` }}
                >
                    arrow_upward
                </i>
            </div>
            <span>
                {meterSecToMileshour(props.wind.speed, units.windSpeed.id).toFixed(0)}
                <span className={classes.windItemDirection}> {degreeToCommonDirection(props.wind.deg)}</span>
            </span>
        </div>
    )
}
