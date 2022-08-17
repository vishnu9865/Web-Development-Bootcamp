const express = require('express');
const app = express();
const port = 3000;

//start listening to port
app.listen( port, () => {
    console.log('Server started at ' + port);
});

app.get('/', ( req, res) => {
    res.sendFile( __dirname + "/index.html");
});