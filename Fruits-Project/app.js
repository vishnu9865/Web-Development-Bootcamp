const { MongoClient } = require("mongodb");
const assert = require('assert')
// Replace the uri string with your connection string.

const uri =
  "mongodb://localhost:27017";

const dbname = 'fruitsDB';

const client = new MongoClient(uri);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected Successfully to server");

    const db = client.db(dbname);

    insertDocuments( db, function() {
        client.close();
    })
});

const insertDocuments = ( db, callback) => {
    const collection = db.collection( 'fruits');

    collection.insertMany([
        {
            name: "Apple",
            score: 8
        },
        {
            name: "Orange",
            score: 6
        },
        {
            name: "Banana",
            score: 9
        }
    ], ( err, result) => {
        assert.equal(err, null);
        console.log("Inserted 3 documents into the collections");
        callback(result);
    });
};