// setup express
const express = require("express");
const app = express();
app.use(express.static("public"));

// setup body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// setup ejs
const ejs = require("ejs");
app.set("view engine", "ejs");

// --setup mongoose--

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/userDB");

// create schema
const userSchema = {
    email: String,
    password: String
}

// create user model
const User = new mongoose.model("User", userSchema);

// --finished setting up mongoose--

// main application logic here
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {

    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save((err) => {
        if(err){
            console.log(err);
        }else{
            res.render("secrets");
        }
    });
});

app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({
        email: username
    },
    ( err, results) => {
        if( err) console.log(err);
        if( results) {
            if( results.password === password)
                res.render("secrets");
        }else {
            res.send("incorrect email or password");
        }
    });

});

// start the server
app.listen( process.env.PORT || 3000, () => {
    console.log("Server started on port 3000.");
});