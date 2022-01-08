const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

const cloudyWeather = [
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Dust',
    'Ash',
    'Squall',
    'Tornado',
    'Clouds'
];

const sunnyWeather = [
    'Clear'
];

const windDirections = new Map([
    [10, 'N'],
    [20, 'N/NE'],
    [30, 'N/NE'],
    [40, 'NE'],
    [50, 'NE'],
    [60, 'E/NE'],
    [70, 'E/NE'],
    [80, 'E'],
    [90, 'E'],
    [100, 'E'],
    [110, 'E/SE'],
    [120, 'E/SE'],
    [130, 'SE'],
    [140, 'SE'],
    [150, 'S/SE'],
    [160, 'S/SE'],
    [170, 'S'],
    [180, 'S'],
    [190, 'S'],
    [200, 'S/SW'],
    [210, 'S/SW'],
    [220, 'SW'],
    [230, 'SW'],
    [240, 'W/SW'],
    [250, 'W/SW'],
    [260, 'W'],
    [270, 'W'],
    [280, 'W'],
    [290, 'W/NW'],
    [300, 'W/NW'],
    [310, 'NW'],
    [320, 'NW'],
    [330, 'N/NW'],
    [340, 'N/NW'],
    [350, 'N'],
    [360, 'N'],
]);

export {
    months,
    days,
    cloudyWeather,
    sunnyWeather,
    windDirections
}