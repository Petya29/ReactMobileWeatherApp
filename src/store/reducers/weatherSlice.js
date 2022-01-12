import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState: {
        screenName: '',
        cities: [],
        currentWeather: {},
        forecastWeather: {},
        lastFetch: {
            current: '',
            forecast: ''
        }
    },
    reducers: {
        setScreenName(state, action) {
            let pathname = (action.payload).substring(1);
            pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);
            if (pathname === 'Weather') {
                if (Object.keys(state.currentWeather).length) {
                    state.screenName = (state.currentWeather.name).charAt(0).toUpperCase() + (state.currentWeather.name).slice(1);
                } else {
                    state.screenName = '';
                }
            } else {
                state.screenName = pathname;
            }
        },
        setCities(state, action) {
            let counter = 0;
            for (let i = 0; i < state.cities.length; i++) {
                if ((state.cities[i].name).toLowerCase() === (action.payload.name).toLowerCase()) {
                    counter++;
                    if (action.payload.inaccuracy) {
                        if (state.cities[i].inaccuracy) {
                            const inaccuracy = (Object.keys(action.payload.inaccuracy)[0]);
                            state.cities[i].inaccuracy[inaccuracy] = inaccuracy;
                        } else {
                            state.cities[i].inaccuracy = action.payload.inaccuracy;
                        }
                    }
                }
            }
            if (counter === 0) {
                state.cities.push(action.payload);
            }
        },
        setCurrentWeather(state, action) {
            state.currentWeather = action.payload;
        },
        setForecastWeather(state, action) {
            state.forecastWeather = action.payload;
        },
        setLastFetch(state, action) {
            const currDate = new Date();
            if (action.payload === 'current') {
                state.lastFetch.current = currDate.toString();
            } else if (action.payload === 'forecast') {
                state.lastFetch.forecast = currDate.toString();
            }
        }
    }
})

export default weatherSlice.reducer;
export const {
    setScreenName,
    setCities,
    setCurrentWeather,
    setForecastWeather,
    setLastFetch
} = weatherSlice.actions;