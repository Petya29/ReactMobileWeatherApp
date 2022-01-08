import React from 'react';
import classes from './PressureItem.module.css';

export default function PressureItem(props) {
    return (
        <div className={classes.pressureItem}>
            <div>
                <i className="material-icons">vertical_align_center</i>
            </div>
            <span>
                {props.pressure}
            </span>
        </div>
    )
}
