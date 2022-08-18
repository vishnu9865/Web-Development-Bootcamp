const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen( 3000, () => {
    console.log("Started server on port 3000");
});

