const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
//const request = require("request");
const app = express();

//to parse post and 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen( 3000, () => {
    console.log("Started server on port 3000");
});

app.get( "/", (req, res) => {
    res.sendFile( __dirname + "/signup.html");
});