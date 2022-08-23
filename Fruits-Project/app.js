//initialize mongoose
const e = require("express");
const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Fruit name is required'
        ]
    },
    rating: {
        type: Number,
        min: [ 1, 'below mininum rating of 1'],
        max: [ 10, 'above max. rating of 10']
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

    rating: 10,
    review: "Pretty solid as a fruit."
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = new mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();

Fruit.find( ( err, fruits) => {
    if(err) {
        console.log(err);
    }else {
        mongoose.connection.close();
        fruits.forEach( (obj) => {
            console.log(obj.name);
        });
    }
});

// Fruit.updateOne({_id: "63041b5fd4dffd87378d6dc4"}, {name: "Peach"}, ( err) => {
//     if( err) {
//         console.log(err);
//     }else {
//         console.log("Successfully updated!")
//     }
// });

Fruit.deleteOne({name:"Peach"}, (err) => {
    if( err) console.log( err);
    else console.log( "Successfully deleted!!");
});