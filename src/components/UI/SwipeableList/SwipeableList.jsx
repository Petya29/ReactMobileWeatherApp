import React from 'react';
import classes from './SwipeableList.module.css';

export default function SwipeableList(props) {
    return (
        <div className={classes.swipeableList}>
            <ul className={classes.swipeableListContainer}>
                {props.items.weatherList.map((el, index) => (
                    <li className={classes.swipeableListItem} key={index}>
                        {React.cloneElement(props.children, { item: el, isFirst: index === 0 ? true : false })}
                    </li>
                ))}
            </ul>
        </div>
    )
}
