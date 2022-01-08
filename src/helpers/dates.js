import { months, days } from "./config";

const formatMainDate = (date = null) => {
    let today = new Date();
    if (date) today = new Date(date);
    return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}`;
}

const createTimeFromDt_txt = (dt_txt) => {
    let time = (dt_txt.split(' '))[1];
    time = time.substr(0, time.length - 3);
    return time;
}

const isStartOfDay = (dt_txt) => {
    const time = new Date(dt_txt);
    if (time.getHours() === 0) return true;
    return false;
}

const getTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    //let s = today.getSeconds();
    m = checkTime(m);
    //s = checkTime(s);
    return (h + ":" + m);
}

const checkTime = (i) => {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

const calculateInterval = () => {
    return ((60 - (new Date()).getSeconds()));
}

export {
    formatMainDate,
    createTimeFromDt_txt,
    isStartOfDay,
    getTime,
    calculateInterval
}