import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "globalSlice",
    initialState: {
        units: { // metric - Celsius, imperial - Fahrenheit
            temp: {
                id: 1,
                name: 'metric'
            },
            windSpeed: {
                id: 1,
                name: 'metric'
            }
        }
    },
    reducers: {
        setUnitsTemp(state, action) {
            state.units.temp.id = action.payload.id;
            state.units.temp.name = action.payload.name;
        },
        setUnitsWindSpeed(state, action) {
            state.units.windSpeed.id = action.payload.id;
            state.units.windSpeed.name = action.payload.name;
        },
    }
})

export default globalSlice.reducer;
export const {
    setUnitsTemp,
    setUnitsWindSpeed
} = globalSlice.actions;