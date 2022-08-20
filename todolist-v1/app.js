// initialize express
const express = require("express");
const app = express();

// initialize and use express
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// initialize and use ejs
app.set( "view engine", "ejs");

//set the static directory to load css and media from
app.use(express.static('public'));

// listen on port 3000
app.listen( 3000, () => {
    console.log("Sever started on port 3000");
});

let items = [];

// reply to get '/'
app.get("/", ( req, res) => {

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var date = today.toLocaleDateString("en-IN", options);

    res.render( 'list', {
        dayEJS: date,
        newListItem: items
    });

});

app.post("/", (req, res) => {
    items.push(req.body.newItem);
    res.redirect("/");
});