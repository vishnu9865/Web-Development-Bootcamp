const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//parse request body
app.use(bodyParser.urlencoded({ extended: true}));

//start listening to port
app.listen( port, () => {
    console.log('Server started at ' + port);
});

// send the index.html file 
app.get('/', ( req, res) => {
    res.sendFile( __dirname + "/index.html");
});

app.post( '/', (req, res) => {
    var result = Number(req.body.num1) + Number(req.body.num2);
    res.send("The result is " + result);
});

//bmi caculator
app.get( '/bmiCalculator', ( req, res) => {
    res.sendFile( __dirname + "/bmiCalculator.html");
});

//respond the result
app.post( '/bmi', ( req, res) => {
    var weight = parseFloat( req.body.weight);
    var height = parseFloat( req.body.height);
    res.send("Your BMI is " + ( weight/Math.pow( height, 2)));
});