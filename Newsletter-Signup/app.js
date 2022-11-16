const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// API key
// 30f63cd31b19f1fad166da28b6a470f3-us8

// list ID
// 75b94114b4.

app.listen( process.env.PORT, () => {
    console.log("Started server on port 3000");
});

app.get( "/", (req, res) => {
    res.sendFile( __dirname + "/signup.html");
});

app.post( "/signup", ( req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    let data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    let jsonData = JSON.stringify(data);

    const url = "https://us8.api.mailchimp.com/3.0/lists/75b94114b4";
    const options = {
        method: "POST",
        auth: "jeyavishnu:30f63cd31b19f1fad166da28b6a470f3-us8"
    };

    const request = https.request( url, options, ( response) => {

        if( response.statusCode === 200) {
            res.sendFile( __dirname + "/success.html");
        } else {
            res.sendFile( __dirname + "/failure.html");
        }

        response.on( "data", ( data) => {
            console.log(JSON.parse(data));
        })
    } );

    request.write( jsonData);
    request.end();

});

app.post( "/failure", (req, res) => {
    res.redirect("/");
});