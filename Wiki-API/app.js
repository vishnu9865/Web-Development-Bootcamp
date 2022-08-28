// express
const express = require("express");
const app = express();
app.use(express.static("public"));

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// ejs
const ejs = require("ejs");
app.set("view engine", "ejs");

// mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wikiDB");

// schema
const articleSchema = {
    title: String,
    content: String
}

// model and collection creation
const Article = mongoose.model( "Article", articleSchema);

//main login code from now

// chained route handlers

app.route("/articles")

.get((req, res) => {

    Article.find({}, (err, results) =>{
        if(!err){
            res.send(results);
        }else{
            res.send(err);
        }
    });

})

.post((req, res) => {

    const article = new Article({
        title: req.body.title,
        content: req.body.content
    });

    article.save((err)=>{
        if(!err){
            res.send("Successfully added a new Article!!");
        }else{
            res.send(err);
        }
    });

})

.delete((req, res) => {
    // deletes all articles
    Article.deleteMany(
        {},
        (err) => {
            if(!err){
                res.send("Successfully deleted all articles.");
            } else {
                res.send(err);
            }
        }
    );
});

// route handlers for specific articles

app.route("/articles/:articleName")
.get((req, res) => {
    Article.findOne({
        title: req.params.articleName
    },
    (err, results) => {
        if(!err){
            res.send(results);
        } else {
            res.send(err);
        }
    });
})

.put((req, res) => {
    Article.findOneAndUpdate(
        {title: req.params.articleName},
        {title: req.body.title, content: req.body.content},
        ( err, results) => {
            if(!err){
                res.send(results);
            }else{
                res.send(err);
            }
        });
})

.patch((req, res) => {
    Article.updateOne(
        {title: req.params.articleName},
        {$set: req.body},
        // dynamic field patch or update without specifying specific fields.
        (err) => {
            if(!err){
                res.send("PATCH: Successfully updated article.");
            }else{
                res.send(err);
            }
        }
    );
})

.delete((req, res) => {
    Article.deleteOne(
        {title: req.params.articleName},
        ( err) => {
            if(!err) {
                res.send("DELETE: Successfully deleted article \""+ req.params.articleName +"\".")
            }
        }
    );
});

// start the server
app.listen( process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});