import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import WeatherService from '../services/WeatherService';
import { setCurrentWeather, setForecastWeather, setCities, setLastFetch } from '../store/reducers/weatherSlice';
import AppLogo from '../components/partials/AppLogo';
import CurrentLocation from '../components/locationSearch/CurrentLocation';

export default function Home() {

    const history = useHistory();

    const cities = useSelector(state => state.weather.cities);
    const currentWeather = useSelector(state => state.weather.currentWeather);
    const lastFetch = useSelector(state => state.weather.lastFetch);

    const dispatch = useDispatch();

    const [location, setLocation] = useState('');
    const [inputError, setInputError] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [loading, setLoading] = useState(false);

    const findLocation = async (location) => {
        setLoading(true);
        setInputError(false);
        setFetchError(false);
        try {
            const currResponse = await WeatherService.getCurrentWeatherByCity(location, cities, currentWeather, lastFetch.current);
            const forecastResponse = await WeatherService.getForecastWeatherByCity(location, cities, currentWeather, lastFetch.forecast);
            if (currResponse || forecastResponse) {
                if (currResponse) {
                    const currentWeather = WeatherService.createCurrentWeatherFromResponse(currResponse.data);
                    dispatch(setCurrentWeather(currentWeather));

                    const newCity = WeatherService.createCityFromResponse(currResponse.data, location);
                    dispatch(setCities(newCity));
                    dispatch(setLastFetch('current'));
                }

                if (forecastResponse) {
                    const forecastWeather = WeatherService.createForecastWeatherFromResponse(forecastResponse.data);
                    dispatch(setForecastWeather(forecastWeather));
                    dispatch(setLastFetch('forecast'));
                }

                setLoading(false);
                history.push('/weather');
            } else {
                setInputError(true);
                setLoading(false);
                if (fetchError === false) history.push('/weather');
            }
        } catch (e) {
            setInputError(true);
            setFetchError(true);
            console.log(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='home-view container'>
            <div>
                <h1><AppLogo /></h1>
            </div>
            <div className="home-page-logo"></div>
            <div className="find-city">
                <h5>Find Weather of your city</h5>
                <div className="input-field">
                    <input
                        id="city-input"
                        type="text"
                        autoComplete="off"
                        className={inputError ? "invalid" : ""}
                        onChange={(e) => { setLocation(e.target.value) }}
                    />
                    <label htmlFor="city-input">City</label>
                    <small className={["danger-text", "left-align", "red-text", inputError ? "" : "hide"].join(" ")}>We didn't find anything :(</small>
                </div>
                <button
                    className="btn waves-effect waves-light btn-search"
                    type="button"
                    disabled={!location || loading}
                    onClick={() => { findLocation(location) }}
                >
                    Search
                    {loading
                        ?
                        <div className="preloader-wrapper small active btn-loading-spinner">
                            <div className="spinner-layer spinner-black-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                        :
                        <i className="material-icons right">search</i>
                    }
                </button>
            </div>
            <div className="my-location">
                <CurrentLocation />
            </div>
        </div>
    )
}
