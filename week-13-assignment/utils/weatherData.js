const axios = require("axios");
const constants = require("../config");

function getWeatherDataForCity(apiEndpoint) {
    return axios.get(apiEndpoint);
}


function weatherData(cities, options, callback) {
    const {BASE_URL, SECRET_KEY} = constants.openWeatherMap;
    const promiseList = [];

    const {from = 0, limit = 5} = options;
    
    if(Array.isArray(cities)) {
        cities.forEach(city => {
            const constructed_url_link =  BASE_URL + city + `&appid=` + SECRET_KEY;
            console.log(constructed_url_link)
            promiseList.push(getWeatherDataForCity(constructed_url_link));
        })
    } else {
        throw "Cities is not an array"
    }

    Promise.all(promiseList).then(res => {
        const resultArray = [];
        res.forEach(cityInfo => {
            const {data} = cityInfo; 
            const {weather, main, wind, sys, name} = data;
            const {id, description: weatherDescription} = weather[0];
            const {temp: temperature, pressure, humidity} = main;
            const {speed: windSpeed} = wind;
            const {country, id: countryId} = sys;
            resultArray.push({
                id,
                name, 
                weatherDescription, 
                temperature,
                pressure, 
                humidity, 
                windSpeed, 
                country, 
                countryId
            })
        })

        const slicedArray = resultArray.slice(from - 1, (from - 1) + limit);

        callback(null, slicedArray);
    }).catch(err => {
        callback("API fetch failed");
    })
}

module.exports = weatherData;

