import React, { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUnitsWindSpeed } from "../../store/reducers/globalSlice";

export default function WindSpeedSwitcher() {

    const units = useSelector(state => state.global.units);

    const dispatch = useDispatch();

    const changeWindSpeedUnits = (event) => {
        const choice = Number(event.target.value);
        if (choice === 1) {
            dispatch(setUnitsWindSpeed({ id: 1, name: 'metric' }));
        } else if (choice === 2) {
            dispatch(setUnitsWindSpeed({ id: 2, name: 'imperial' }));
        }
    }

    return (
        <Fragment>
            <div>Wind speed</div>
            <select
                className="language-select"
                defaultValue={units.windSpeed.id}
                onChange={event => changeWindSpeedUnits(event)}
            >
                <option value="1">meter/sec</option>
                <option value="2">miles/hour</option>
            </select>
        </Fragment>
    )
}
