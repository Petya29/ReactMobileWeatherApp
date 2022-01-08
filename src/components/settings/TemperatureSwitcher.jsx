import React, { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUnitsTemp } from "../../store/reducers/weatherSlice";

export default function TemperatureSwitcher() {

    const units = useSelector(state => state.weatherReducer.units);

    const dispatch = useDispatch();

    const changeTempUnits = (event) => {
        const choice = Number(event.target.value);
        if (choice === 1) {
            dispatch(setUnitsTemp({ id: 1, name: 'metric' }));
        } else if (choice === 2) {
            dispatch(setUnitsTemp({ id: 2, name: 'imperial' }));
        }
    }

    return (
        <Fragment>
            <div>Temperature</div>
            <select
                className="language-select"
                defaultValue={units.temp.id}
                onChange={event => changeTempUnits(event)}
            >
                <option value="1">Celsius</option>
                <option value="2">Fahrenheit</option>
            </select>
        </Fragment>
    )
}
