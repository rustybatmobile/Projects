const { default: axios } = require("axios");
const constants = require("../config");
const geoConversion = require("./geoConversion");

function getForecast(city, cnt, callback) {
    geoConversion(city).then(res => {
        const {lat, lon} = res || {};

        //now that we're getting lat and lon, next make the forecast api call

        const {FORECAST_URL, SECRET_KEY} = constants.openWeatherMap;
        const url = FORECAST_URL + lat + "&lon=" + lon + "&appid=" + SECRET_KEY ;

        return axios.get(url).then(res => {
            callback(null, res.data.slice(0, cnt));
        }).catch(err => {
            callback(err);
        })
    })
}

module.exports = getForecast