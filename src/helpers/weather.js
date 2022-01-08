const prepareCurrentWeather = (forecastWeather) => {
    const weather = {
        name: forecastWeather.name,
        weatherList: []
    };
    const now = new Date();
    for (let i = 0; i < forecastWeather.weatherList.length; i++) {
        const itemTime = new Date(forecastWeather.weatherList[i].dt_txt);
        const difference = ((itemTime - now) / 1000 / 60 / 60).toFixed(0); //hours
        if (difference <= 24 && difference >= 0) weather.weatherList.push(forecastWeather.weatherList[i]);
    }
    return weather;
}

const prepareForecastWeather = (forecastWeather) => {
    const weather = {
        name: forecastWeather.name,
        weatherList: []
    };
    const now = new Date();
    for (let i = 0; i < forecastWeather.weatherList.length; i++) {
        const itemTime = new Date(forecastWeather.weatherList[i].dt_txt);
        const difference = ((itemTime - now) / 1000 / 60 / 60).toFixed(0); //hours
        if (difference >= 24) weather.weatherList.push(forecastWeather.weatherList[i]);
    }
    return weather;
}

export {
    prepareCurrentWeather,
    prepareForecastWeather
}