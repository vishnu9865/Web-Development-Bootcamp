const express = require( 'express');
const https = require( 'https');
const bodyParse = require( 'body-parser');
const app = express();
const port = 3000;

app.use(bodyParse.urlencoded({extended: true}));

app.get( '/', (req, res) => {
    res.sendFile( __dirname + "/index.html");
});

app.post( "/", (req, res) => {
    const query = req.body.cityName;
    const apiKey = "6450c2c1bdf849626ce34b62503b7533";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units="+ units +"&appid=" + apiKey;
    https.get(url , (response) => {
        console.log( response.statusCode);
        response.on( "data", ( data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const iconCode = weatherData.weather[0].icon;
            res.write("<h1>The temperature in "+ query +" is " + temp + " deg. Celsius</h1>");
            res.write("<h2>Today's Weather Desc: " + weatherDescription + "</h2>");
            res.write("<img src='http://openweathermap.org/img/wn/"+ iconCode +"@2x.png'>");
            res.send();
        });
    });
})

app.listen( 3000, () => {
    console.log("Server is running on Port 3000");
});