import React from 'react';
import classes from './HumidityItem.module.css'

export default function HumidityItem(props) {
    return (
        <div className={classes.humidityItem}>
            <div>
                <i className="material-icons">blur_on</i>
            </div>
            <span>{props.humidity}</span>
        </div>
    )
}
