// initialize express
const express = require("express");
const app = express();
// initialize and use express
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
// listen on port 3000
app.listen( 3000, () => {
    console.log("Sever started on port 3000");
});
// reply to get '/'
app.get("/", ( req, res) => {
    var today = new Date();
    if( today.getDay() === 6 || today.getDay() === 0)
        res.send("It is the weekend")
    else
        res.send("Boo! I have to work!");
});