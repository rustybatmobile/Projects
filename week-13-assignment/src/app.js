const express = require("express");

const app = express();
const weatherData = require("../utils/weatherData");
const getForecast = require("../utils/getForecast");


app.get("/weather", (req, res) => {

    const {city, from, limit} = req.query;
    const options = {
        from, 
        limit
    }

    const cityList = city.split(",");

    weatherData(cityList, options, (err, data) => {
        if(err) {
            console.log(err, "this is the err");
            res.send(err);
        } else {
            console.log(data, "the data");
            res.send(data);
        }
    })
})

app.get("/forecast", (req, res) => {
    const {city, count} = req.query;
    getForecast(city, count, (err, data) => {
        if(err) {
            return res.send(err);
        } 
        res.send(data);
    });
})


app.listen(8282, () => {
    console.log(`Server is listening to port 8282`)
});

