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

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "the Best fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = new mongoose.model("Person", personSchema);

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// });

// person.save();

Person.updateOne( {name:"John"}, {favouriteFruit: kiwi}, (err) => {
    if(err) console.log(err);
    else console.log("Successfully updated Document");
});

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

// Fruit.deleteOne({name:"Peach"}, (err) => {
//     if( err) console.log( err);
//     else console.log( "Successfully deleted!!");
// });

// Person.deleteMany({name:"John"}, (err) => {
//     if( err) console.log(err);
//     else console.log("successfully deleted many documents!!");
// })