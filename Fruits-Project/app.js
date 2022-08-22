const { MongoClient } = require("mongodb");
const assert = require('assert')
// Replace the uri string with your connection string.

const uri =
  "mongodb://localhost:27017";
const client = new MongoClient(uri);

client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected Successfully to server");

    const db = client.db(dbname);
    client.close();
})