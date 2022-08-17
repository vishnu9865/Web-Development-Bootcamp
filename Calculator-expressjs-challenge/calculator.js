const express = require('express');

const app = express();

const port = 3000;

app.listen( port, ( hostname) => {
    console.log('Server ' + hostname + ' started at ' + port);
});

app.get('/', ( req, res) => {
    res.send( '<h1>Hello World</h1>');
});