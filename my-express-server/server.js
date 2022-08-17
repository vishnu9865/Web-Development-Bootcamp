// this is the basic express server

const express = require( 'express');

const app = express();

const port = 3000;

app.get('/', ( req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/contact', ( req, res) => {
    res.send("Contact me at: sjeyavishnu9865@gmail.com");
});

app.listen( port,function(){
    console.log('Server started on Port 3000..');
});