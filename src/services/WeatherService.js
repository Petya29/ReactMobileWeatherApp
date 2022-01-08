import axios from "axios";

export default class WeatherService {
    static async getCurrentWeatherByCity(city, cities, currWeather, lastFetch) {
        if (this.checkLastFetch(lastFetch, 'current') || this.citiesIncludesWeather(cities, city, currWeather)) {
            return axios.get(
                `${process.env.REACT_APP_BASE_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
        }
        return false;
    }

    static async getForecastWeatherByCity(city, cities, currWeather, lastFetch) {
        if (this.checkLastFetch(lastFetch, 'forecast') || this.citiesIncludesWeather(cities, city, currWeather)) {
            return axios.get(
                `${process.env.REACT_APP_BASE_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            );
        }
        return false;
    }

    static createCityFromResponse(response, location) {
        return {
            id: response.id,
            name: response.name,
            inaccuracy: {
                [location]: location
            },
            coord: {
                lat: response.coord.lat,
                lon: response.coord.lon
            },
            country: response.sys.country,
            timezone: response.timezone,
            sunrise: response.sys.sunrise,
            sunset: response.sys.sunset
        }
    }

    static createCurrentWeatherFromResponse(response) {
        return {
            name: response.name,
            clouds: response.clouds,
            main: response.main,
            weather: response.weather[0],
            wind: response.wind
        }
    }

    static createForecastWeatherFromResponse(response) {
        return {
            name: response.city.name,
            weatherList: response.list
        }
    }

    static checkLastFetch(lastFetch, type) {
        if (lastFetch || lastFetch === '') {
            if (lastFetch === '') return true;
            const formatedLastFetch = new Date(lastFetch);
            const currDate = new Date();
            const difference = (currDate - formatedLastFetch) / 1000 / 60;
            if (type === 'current') {
                if (!isNaN(difference) && difference > Number(process.env.REACT_APP_CURRENT_FETCH_INTERVAL)) return true;
            } else if (type === 'forecast') {
                if (!isNaN(difference) && difference > Number(process.env.REACT_APP_FORECAST_FETCH_INTERVAL)) return true;
            }
        }
        return false;
    }

    static citiesIncludesWeather(cities, city, currWeather) {
        if (!currWeather) return true;
        for (let i = 0; i < cities.length; i++) {
            if ((cities[i].name).toLowerCase() === city.toLowerCase()) {
                if (currWeather.name.toLowerCase() === (cities[i].name).toLowerCase()) return false;
            } else if (cities[i].inaccuracy !== undefined && cities[i].inaccuracy[city]) {
                if (currWeather.name.toLowerCase() === (cities[i].name).toLowerCase()) return false;
            }
        }
        return true;
    }
}