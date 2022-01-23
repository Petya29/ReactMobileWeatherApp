import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentWeather, setForecastWeather, setCities, setLastFetch } from '../../store/reducers/weatherSlice';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import WeatherService from '../../services/WeatherService';
import { Geolocation } from '@ionic-native/geolocation';

export default function CurrentLocation() {

    const history = useHistory();

    const dispatch = useDispatch();

    const currentWeather = useSelector(state => state.weather.currentWeather);

    const [loading, setLoading] = useState(false);
    const [geolocationErr, setGeolocationErr] = useState(false);

    let findLocation = useRef(() => { });

    findLocation = async () => {
        setLoading(true);
        setGeolocationErr(false);
        try {
            const geolocation = await Geolocation.getCurrentPosition();
            const currResponse = await WeatherService.getCurrentWeatherByCoords(geolocation.coords.latitude, geolocation.coords.longitude);
            const forecastResponse = await WeatherService.getForecastWeatherByCoords(geolocation.coords.latitude, geolocation.coords.longitude);
            if (currResponse || forecastResponse) {
                if (currResponse) {
                    if (currResponse) {
                        const currentWeather = WeatherService.createCurrentWeatherFromResponse(currResponse.data);
                        dispatch(setCurrentWeather(currentWeather));

                        const newCity = WeatherService.createCityFromResponse(currResponse.data, currResponse.data.name);
                        dispatch(setCities(newCity));
                        dispatch(setLastFetch('current'));
                    }

                    if (forecastResponse) {
                        const forecastWeather = WeatherService.createForecastWeatherFromResponse(forecastResponse.data);
                        dispatch(setForecastWeather(forecastWeather));
                        dispatch(setLastFetch('forecast'));
                    }
                }
            } else {
                setGeolocationErr(false);
            }
        } catch (e) {
            setLoading(false);
            setGeolocationErr(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        const elemsModal = document.querySelector('.modal');
        M.Modal.init(elemsModal, {
            endingTop: '30%',
            onOpenEnd: () => {
                findLocation();
            }
        });
    }, []);

    return (
        <Fragment>
            {/* Modal Trigger */}
            <a className="my-location modal-trigger" href="#modal1">Find me</a>

            {/* Modal Structure */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                    {loading
                        ?
                        <Fragment>
                            <h5>Search for your location</h5>
                            <div className="progress" style={{ marginTop: '50px' }}>
                                <div className="indeterminate"></div>
                            </div>
                        </Fragment>
                        :
                        (geolocationErr
                            ?
                            <h5>You need to enable access to geolocation!</h5>
                            :
                            <Fragment>
                                <h4>Is you here?</h4>
                                <div>
                                    <h5>{currentWeather.name}</h5>
                                </div>
                            </Fragment>
                        )
                    }
                </div>
                <div className="modal-footer">
                    {!loading && !geolocationErr
                        ?
                        <Fragment>
                            <span className="modal-close waves-effect waves-green btn-flat">No</span>
                            <span
                                className="modal-close waves-effect waves-green btn-flat"
                                onClick={() => history.push('/weather')}
                            >
                                Yes
                            </span>
                        </Fragment>
                        :
                        <span className="modal-close waves-effect waves-green btn-flat">Ok</span>
                    }
                </div>
            </div>
        </Fragment>
    )
}
