// initialize express
const express = require("express");
const app = express();

// initialize and use express
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

//using user defined modules
const date = require( __dirname+ "/date.js");

// initialize and use ejs
app.set( "view engine", "ejs");

//set the static directory to load css and media from
app.use(express.static('public'));

// listen on port 3000
app.listen( 3000, () => {
    console.log("Sever started on port 3000");
});

let items = [];

let workListItems = [];

// reply to get '/'
app.get("/", ( req, res) => {

    res.render( 'list', {
        listTitle: date.getDate(), //calling userdefined module
        newListItem: items
    });

});

// reply to get '/work'
app.get("/work", ( req, res) => {

    res.render( 'list', {
        listTitle: "Work List",
        newListItem: workListItems
    });

});

app.post("/", (req, res) => {

    if( req.body.value === "Work List"){
        workListItems.push(req.body.newItem);
        res.redirect("/work");
    }else{
        items.push(req.body.newItem);
        res.redirect("/");
    }

});

app.get("/about", (req, res) => {

    res.render("about");

});