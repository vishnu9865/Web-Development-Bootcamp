const express = require("express");
const app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const ejs = require("ejs");
app.set("view engine", "ejs");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
    title: String,
    content: String
}

const Article = mongoose.model( "Article", articleSchema);

app.listen( process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});