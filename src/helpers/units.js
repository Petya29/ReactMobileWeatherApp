import { windDirections } from "./config";

const celsiusToFahrenheit = (temp, type) => {
    if (type === 1) return temp;
    return (temp * 9 / 5 + 32);
}

const meterSecToMileshour = (speed, type) => {
    if (type === 1) return speed;
    return (speed * 2.237);
}

const degreeToCommonDirection = (degree) => {
    const roundedDegree = Math.round(degree / 10) * 10;
    if (windDirections.has(roundedDegree)) return windDirections.get(roundedDegree);
}

export {
    celsiusToFahrenheit,
    meterSecToMileshour,
    degreeToCommonDirection
}