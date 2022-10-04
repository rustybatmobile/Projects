const { default: axios } = require("axios");
const axious = require("axios");
const constants = require("../config");

function geoConversion(city) {
    const {openWeatherMap} = constants;
    const {GEO_BASE_URL, SECRET_KEY} = openWeatherMap || {};
    const url = GEO_BASE_URL + city + "&appid=" + SECRET_KEY;

    return axios.get(url).then(res => {
        const {data} = res;
        const {lat, lon} = data[0] || {};
        return {
            lat, 
            lon
        }
    })
}

module.exports = geoConversion;