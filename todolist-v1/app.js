// initialize express
const express = require("express");
const app = express();

// initialize and use express
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// initialize and use ejs
app.set( "view engine", "ejs");

// listen on port 3000
app.listen( 3000, () => {
    console.log("Sever started on port 3000");
});
// reply to get '/'
app.get("/", ( req, res) => {
    var today = new Date();
    var day = "";
    if( today.getDay() === 6 || today.getDay() === 0) {
        day = "Weekend";
        //res.sendFile(__dirname+'/index.html');
    }else {
        day = "Weekday";
        //res.sendFile(__dirname+'/index.html');
    }

    res.render( 'list', {
        dayEJS: day
    });
});